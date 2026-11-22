import type { Page } from '../types';

// Linkable content (Nov 2026): the statistics page and blog article A1. One file per language.
// Internal links: en/es/de/pt/it/ar use the English paths (the template rewrites them), nl/fr use their own paths.
export type Linkable = {
  pages: { stats: Page; gdpr: Page };
  ui: {
    checked: string;   // "Last checked"
    cite: string;      // heading "How to cite this page"
    src: string;       // "Source"
    statsT: string; statsD: string;   // card/footer link to the statistics page
    gdprT: string; gdprD: string;     // card link to the GDPR article (offices page)
  };
};
