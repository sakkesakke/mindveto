# Mindveto — mindveto.app

The website of Mindveto, "the human override for AI" (formerly Human Override).
© 2026 Amghar Said. All rights reserved.

## How it is built
- [Astro](https://astro.build), fully static: 54 pages (18 pages × EN/NL/FR) + 404. No server, no database for the site.
- All text lives in `src/i18n/en.ts`, `nl.ts`, `fr.ts` (pages), `ui.ts` (menu/footer), `products.ts`, `extra.ts` (pricing, exam tool, AI names). Routes per language: `src/i18n/routes.ts`.
- One template: `src/pages/[...path].astro`. Layout and SEO tags: `src/layouts/Base.astro`. Styles: `src/styles/site.css`.
- Downloads and block lists: `public/downloads/`, copied daily from `sakkesakke/geopolcoins/human-override/` by `.github/workflows/sync-lists.yml`.

## Privacy and compliance (by design)
- No cookies, no analytics, no trackers, no ads, no third-party scripts → no consent banner needed and the same strict rules for every visitor (EU, UK, US/California and elsewhere). No geo-IP lookup.
- Font: Atkinson Hyperlegible Next (SIL OFL), self-hosted in `public/fonts/`. No request to fonts.googleapis.com or fonts.gstatic.com; the deploy workflow fails if one appears.
- Content-Security-Policy on every page: only this site, plus the EU Supabase project for the teacher exam button.
- The only external connection: the exam button page talks to Supabase (Frankfurt) with a class code; localStorage keeps the class code in the teacher's own browser.

## External dependencies
| Dependency | Why it is allowed |
| --- | --- |
| Astro + @astrojs/sitemap (build only) | Generates static HTML; nothing runs in the visitor's browser from them |
| Atkinson Hyperlegible Next (OFL) | Served from this site |
| Supabase (EU) | Exam button only; stores hashes, no personal data |
| GitHub Pages | Hosting |

## Run locally
```
npm ci
npm run build   # output in dist/
npm run dev     # local preview
```
