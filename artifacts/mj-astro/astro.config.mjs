// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://mjfisioesteticayspa.com",
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: 'c7ltnbh1',
      dataset: 'production',
      useCdn: true,
      studioBasePath: '/admin',
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline CSS when the chunk is less than 100KB — eliminates blocking requests
      cssCodeSplit: false,
      assetsInlineLimit: 102400, // 100KB limit
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
  }
});