import type { Page } from '../types';

// Mindveto Protect, part 1 (B9): "Is this link safe?" and the AI phishing quiz. One file per language.
// Internal links use the English paths; the page template rewrites them for every language.
export type QuizItem = { t: string; s: string; a: 'real' | 'fake'; e: string };
export type Protect = {
  pages: { linkcheck: Page; quiz: Page };
  hub: { h: string; lcT: string; lcD: string; qzT: string; qzD: string };
  lc: Record<string, string>;
  qz: Record<string, string>;
  items: QuizItem[];
};
