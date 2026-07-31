// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { preRelease } from './src/data/preRelease';

export default defineConfig({
  site: 'https://adolxsense.com',
  output: 'static',
  integrations: [
    sitemap({
      // Keep /pre-release out of the sitemap while it redirects to /releases.
      filter: (page) => preRelease.active || !page.includes('/pre-release'),
    }),
  ],
});
