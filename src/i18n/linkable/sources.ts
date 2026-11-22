// Sources for the statistics page and article A1. Every figure was opened and checked on the date in CHECKED.
// Recheck every 3 months: open each link, compare the number and year, update CHECKED (and the pages' article.updated).
export const CHECKED = '2026-11-22';

// key: [source name as shown under a figure, publication year, link, full title for the sources list]
export const SRC = {
  pew1: ['Pew Research Center', '2025', 'https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/', 'Pew Research Center: Teens, Social Media and AI Chatbots 2025 (9 Dec 2025)'],
  pew2: ['Pew Research Center', '2026', 'https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/', 'Pew Research Center: How Teens Use and View AI (24 Feb 2026)'],
  pew3: ['Pew Research Center', '2025', 'https://www.pewresearch.org/short-reads/2025/01/15/about-a-quarter-of-us-teens-have-used-chatgpt-for-schoolwork-double-the-share-in-2023/', 'Pew Research Center: About a quarter of U.S. teens have used ChatGPT for schoolwork (15 Jan 2025)'],
  csm: ['Common Sense Media', '2025', 'https://about.commonsensemedia.org/press-room/press-releases/nearly-3-in-4-teens-have-used-ai-companions-new-national-survey-finds', 'Common Sense Media: Talk, Trust, and Trade-Offs, press release (16 Jul 2025)'],
  eu1: ['Eurostat', '2026', 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1', 'Eurostat: 64% of 16-24-year-olds used AI in 2025 (10 Feb 2026)'],
  eu2: ['Eurostat', '2025', 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2', 'Eurostat: 20% of EU enterprises use AI technologies (11 Dec 2025)'],
  hepi: ['HEPI', '2026', 'https://www.hepi.ac.uk/2026/03/12/new-hepi-and-kortext-report-student-generative-artificial-intelligence-survey-2026/', 'HEPI and Kortext: Student Generative AI Survey 2026 (12 Mar 2026)'],
  thorn: ['Thorn', '2025', 'https://www.thorn.org/press-releases/1-in-8-teens-know-someone-targeted-by-deepfake-nudes-new-report-finds/', 'Thorn: Deepfake Nudes & Young People, press release (3 Mar 2025)'],
  plos: ['PLOS ONE (Mai et al.)', '2023', 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285333', 'Mai, Bray, Davies, Griffin: Warning: Humans cannot reliably detect speech deepfakes, PLOS ONE (2 Aug 2023)'],
  iwf: ['Internet Watch Foundation', '2026', 'https://www.iwf.org.uk/news-media/news/ai-becoming-child-sexual-abuse-machine-adding-to-dangerous-record-levels-of-online-abuse-iwf-warns/', 'Internet Watch Foundation: AI videos of child sexual abuse in 2025 (16 Jan 2026)'],
  kpmg: ['University of Melbourne & KPMG', '2025', 'https://assets.kpmg.com/content/dam/kpmgsites/xx/pdf/2025/05/trust-attitudes-and-use-of-ai-global-report.pdf', 'University of Melbourne & KPMG: Trust, attitudes and use of AI, a global study 2025 (PDF)'],
  ibm: ['IBM / Ponemon Institute', '2025', 'https://newsroom.ibm.com/2025-07-30-ibm-report-13-of-organizations-reported-breaches-of-ai-models-or-applications,-97-of-which-reported-lacking-proper-ai-access-controls', 'IBM: Cost of a Data Breach Report 2025, press release (30 Jul 2025)'],
  gar: ['Garante per la protezione dei dati personali', '2024', 'https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432', 'Garante privacy (Italy): ChatGPT, EUR 15 million fine for OpenAI (20 Dec 2024)'],
  oaidc: ['OpenAI', '2026', 'https://help.openai.com/en/articles/7730893-data-controls-faq', 'OpenAI Help Center: Data controls FAQ'],
  oaient: ['OpenAI', '2026', 'https://openai.com/enterprise-privacy/', 'OpenAI: Enterprise privacy'],
  oaidpa: ['OpenAI', '2026', 'https://openai.com/policies/data-processing-addendum/', 'OpenAI: Data Processing Addendum'],
  ap: ['Autoriteit Persoonsgegevens', '2024', 'https://www.autoriteitpersoonsgegevens.nl/en/current/caution-use-of-ai-chatbot-may-lead-to-data-breaches', 'Dutch Data Protection Authority: Caution, use of AI chatbot may lead to data breaches (6 Aug 2024)'],
  ap72: ['Autoriteit Persoonsgegevens', '2026', 'https://www.autoriteitpersoonsgegevens.nl/en/themes/security/data-breaches/this-is-how-you-report-a-data-breach', 'Dutch Data Protection Authority: This is how you report a data breach'],
} as const;
export type SrcKey = keyof typeof SRC;

/** One statistic: big number, statement, and its source (name, year, link) from SRC. */
export const st = (n: string, text: string, key: SrcKey): [string, string, string, string, string] =>
  [n, text, SRC[key][0], SRC[key][1], SRC[key][2]];

/** Sources list for the page's article block. */
export const list = (...keys: SrcKey[]): [string, string][] => keys.map((k) => [SRC[k][3], SRC[k][2]]);

export const STATS_SOURCES: SrcKey[] = ['pew1', 'pew2', 'pew3', 'csm', 'eu1', 'eu2', 'hepi', 'thorn', 'plos', 'iwf', 'kpmg', 'ibm', 'gar'];
export const GDPR_SOURCES: SrcKey[] = ['oaidc', 'oaient', 'oaidpa', 'ap', 'ap72', 'kpmg', 'ibm', 'gar'];
