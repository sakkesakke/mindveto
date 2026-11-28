import type { Page } from '../types';

// Writing trace (Nov 2026): students write in the browser, the page records how the text grew,
// the teacher opens the downloaded trace file. One file per language. No links in the texts.
export type Trace = {
  pages: { trace: Page };
  ui: Record<string, string>;
};
