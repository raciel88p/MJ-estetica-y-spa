import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression2";
import path from "path";

const isReplit = process.env.REPL_ID !== undefined;
const isDev    = process.env.NODE_ENV !== "production";

// PORT is only required for the dev/preview server, not for `vite build`
const rawPort = process.env.PORT;
const port    = rawPort ? Number(rawPort) : 3000;

// BASE_PATH defaults to "/" for Vercel and other CI environments
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,

  // ── esbuild transform options (applied to EVERY file, not just minifier) ──
  esbuild: {
    // Drop console.* and debugger statements in production
    drop: isDev ? [] : ["console", "debugger"],
    legalComments: "none",
  },

  plugins: [
    react(),
    tailwindcss(),

    // Pre-compress JS/CSS assets with Brotli + Gzip
    // Exclude HTML so Vercel serves index.html natively (it does edge compression)
    ...(!isDev
      ? [
          compression({
            algorithm: "brotliCompress",
            exclude: /\.(br|gz|html|png|jpg|jpeg|gif|webp|ico|woff2|svg|xml|txt)$/,
          }),
          compression({
            algorithm: "gzip",
            exclude: /\.(br|gz|html|png|jpg|jpeg|gif|webp|ico|woff2|svg|xml|txt)$/,
          }),
        ]
      : []),

    // Replit-only dev plugins (not loaded on Vercel — REPL_ID is absent there)
    ...(isDev && isReplit
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then((m) => m.default()),
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({ root: path.resolve(import.meta.dirname, "..") }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@":       path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir:               path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir:          true,
    cssCodeSplit:         true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,
    target: "es2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/"))
            return "vendor-react";
          if (id.includes("node_modules/framer-motion"))  return "vendor-motion";
          if (id.includes("node_modules/@radix-ui"))      return "vendor-radix";
          if (id.includes("node_modules/wouter"))         return "vendor-router";
          if (id.includes("node_modules/@tanstack"))      return "vendor-query";
          if (id.includes("node_modules/zod") || id.includes("node_modules/react-hook-form"))
            return "vendor-forms";
          if (id.includes("node_modules/")) return "vendor-misc";
        },
      },
      treeshake: { preset: "recommended" },
    },
  },

  server: {
    port,
    host:         "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny:   ["**/.*"],
    },
  },

  preview: {
    port,
    host:         "0.0.0.0",
    allowedHosts: true,
  },
});
