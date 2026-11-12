// Content for es/de/pt/it/ar is written with the English page paths in links (href="/browser-extension/").
// This rewrites those links to the page in the current language, so translators never need to know the slugs.
import { ROUTES, type Lang } from './routes';

const MAP = (lang: Lang) => {
  const m = new Map<string, string>();
  for (const r of Object.values(ROUTES)) m.set('/' + r.en, '/' + r[lang]);
  return m;
};

export function localize<T>(value: T, lang: Lang): T {
  if (['en', 'nl', 'fr'].includes(lang)) return value;
  const m = MAP(lang);
  const fix = (s: string) => s.replace(/href="(\/[^"#?]*)"/g, (all, p) => (m.has(p) ? `href="${m.get(p)}"` : all));
  const walk = (v: any): any =>
    typeof v === 'string' ? fix(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v;
  return walk(value);
}
