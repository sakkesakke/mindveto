import type { Page } from '../types';

// "Ask the student" (Nov 2026): the page sends a student text to Mindveto's own API (api.mindveto.app),
// which returns questions only the real author can answer easily. One file per language. No links in the texts.
export type Ask = {
  pages: { ask: Page };
  ui: Record<string, string>;
};
