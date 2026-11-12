import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LANGS, ROUTES, SITE } from './src/i18n/routes.ts';

// Every URL lists its EN/NL/FR versions in the sitemap (slugs are translated, so the plugin cannot guess them).
const ALT = new Map();
for (const r of Object.values(ROUTES)) {
  const links = [
    ...LANGS.map((l) => ({ lang: l, url: `${SITE}/${r[l]}` })),
    { lang: 'x-default', url: `${SITE}/${r.en}` },
  ];
  for (const l of LANGS) ALT.set(`${SITE}/${r[l]}`, links);
}

export default defineConfig({
  site: 'https://mindveto.app',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [sitemap({
    lastmod: new Date(),
    serialize(item) {
      const links = ALT.get(item.url);
      return links ? { ...item, links } : item;
    },
  })],
});
