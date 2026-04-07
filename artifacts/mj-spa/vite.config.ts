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
  plugins: [
    react(),
    tailwindcss(),

    // Pre-compress assets with Brotli (served by Vercel/nginx/caddy directly)
    ...(!isDev
      ? [
          compression({ algorithm: "brotliCompress", exclude: /\.(br|gz|png|jpg|jpeg|gif|webp|ico|woff2)$/ }),
          compression({ algorithm: "gzip",           exclude: /\.(br|gz|png|jpg|jpeg|gif|webp|ico|woff2)$/ }),
        ]
      : []),

    // Replit-only dev plugins
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
    outDir:              path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir:         true,
    cssCodeSplit:        true,
    reportCompressedSize:false,
    chunkSizeWarningLimit: 600,
    // Target modern browsers only — no legacy polyfills, smaller output
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) return "vendor-react";
          if (id.includes("node_modules/framer-motion"))  return "vendor-motion";
          if (id.includes("node_modules/@radix-ui"))      return "vendor-radix";
          if (id.includes("node_modules/wouter"))         return "vendor-router";
          if (id.includes("node_modules/@tanstack"))      return "vendor-query";
          if (id.includes("node_modules/zod") || id.includes("node_modules/react-hook-form")) return "vendor-forms";
          if (id.includes("node_modules/"))               return "vendor-misc";
        },
      },
      // Strip console.* calls from production build
      treeshake: { preset: "recommended" },
    },
    minify: "esbuild",
    // Remove console.log / console.debug in production
    esbuildOptions: {
      drop: isDev ? [] : ["console", "debugger"],
      legalComments: "none",
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
