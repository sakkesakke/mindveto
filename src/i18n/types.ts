import type { PageKey } from './routes';

export type Action = { label: string; to?: PageKey; url?: string; solid?: boolean; download?: boolean };
export type Block = {
  h: string;
  p?: string[];          // paragraphs (may contain inline HTML written by us)
  list?: string[];
  steps?: string[];
  fold?: string;          // show the steps inside a closed <details> with this summary
  foldLead?: string;
  facts?: [string, string][];
  note?: string;
  human?: boolean;       // note in the "human" colour instead of the AI colour
  actions?: Action[];
};
export type Page = {
  title: string; desc: string; h1: string; lead: string;
  actions?: Action[];
  blocks: Block[];
  faq?: { q: string; a: string }[];
  related?: PageKey[];
};
export type Home = {
  title: string; desc: string; h1: string; lead: string;
  motto: string; trust: string; mockOn: string; mockOff: string;
  switchOn: string; switchOff: string; statusOn: string; statusOff: string; switchLabel: string;
  how: string;
  doorsH: string; doors: { key: PageKey; who: string; why: string; go: string }[];
  productsH: string; productsLead: string;
  proofH: string; proofP: string; ledger: [string, string, boolean][];
  limitsH: string; limits: string[];
  priceH: string; priceP: string; priceGo: string;
};
