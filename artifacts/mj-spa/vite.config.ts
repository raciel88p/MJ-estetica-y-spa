import { defineConfig, createLogger } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isReplit = process.env.REPL_ID !== undefined;
const isDev    = process.env.NODE_ENV !== "production";
const basePath = process.env.BASE_PATH ?? "/";
const port     = process.env.PORT ? Number(process.env.PORT) : 3000;

const logger = createLogger();
const _warn  = logger.warn.bind(logger);
logger.warn  = (msg, opts) => {
  if (msg.includes("Can't resolve original location of error")) return;
  _warn(msg, opts);
};

export default defineConfig(async () => {
  const replitPlugins: import("vite").PluginOption[] = [];

  if (isDev && isReplit) {
    const [errorModal, cartographer, devBanner] = await Promise.all([
      import("@replit/vite-plugin-runtime-error-modal"),
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);
    replitPlugins.push(
      errorModal.default(),
      cartographer.cartographer({ root: path.resolve(__dirname, "..") }),
      devBanner.devBanner(),
    );
  }

  return {
    customLogger: logger,
    base: basePath,

    esbuild: {
      drop: isDev ? [] : ["console", "debugger"],
      legalComments: "none",
    },

    plugins: [
      react(),
      tailwindcss(),
      ...replitPlugins,
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      dedupe: ["react", "react-dom"],
    },

    root: path.resolve(__dirname),

    build: {
      outDir:                path.resolve(__dirname, "dist"),
      emptyOutDir:           true,
      cssCodeSplit:          true,
      reportCompressedSize:  false,
      chunkSizeWarningLimit: 600,
      target:  "es2020",
      minify:  "esbuild",
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (
            warning.code === "SOURCEMAP_ERROR" ||
            warning.message?.includes("Can't resolve original location")
          ) return;
          defaultHandler(warning);
        },
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/scheduler/") ||
              id.includes("node_modules/use-sync-external-store/")
            ) return "vendor-react";

            if (id.includes("node_modules/framer-motion"))  return "vendor-motion";
            if (id.includes("node_modules/@radix-ui"))      return "vendor-radix";
            if (id.includes("node_modules/wouter"))         return "vendor-router";
            if (id.includes("node_modules/@tanstack"))      return "vendor-query";
            if (
              id.includes("node_modules/zod") ||
              id.includes("node_modules/react-hook-form")
            ) return "vendor-forms";

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
  };
});
