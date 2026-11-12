import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mindveto.app',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', nl: 'nl', fr: 'fr' } },
  })],
});
