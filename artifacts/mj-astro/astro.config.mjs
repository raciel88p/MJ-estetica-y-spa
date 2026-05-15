// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from 'astro-sitemap';
import indexnow from 'astro-indexnow';
import cookieconsent from 'astro-consent';
import htaccessManager from 'astro-htaccess-manager';

// https://astro.build/config
export default defineConfig({
  site: "https://mjfisioesteticayspa.com",
  integrations: [
    react(),
    sitemap(),
    indexnow({ key: process.env.INDEXNOW_KEY || '8c35d9f0910048e9a250325bdfce0ef4' }),
    cookieconsent(),
    htaccessManager({ manualFiles: {} })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});