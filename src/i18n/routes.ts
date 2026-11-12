export const LANGS = ['en', 'nl', 'fr'] as const;
export type Lang = (typeof LANGS)[number];

// One entry per page. English lives at the root, Dutch under /nl/, French under /fr/.
export const ROUTES = {
  home:     { en: '',                  nl: 'nl/',                  fr: 'fr/' },
  parents:  { en: 'parents/',          nl: 'nl/ouders/',           fr: 'fr/parents/' },
  schools:  { en: 'schools/',          nl: 'nl/scholen/',          fr: 'fr/ecoles/' },
  offices:  { en: 'offices/',          nl: 'nl/kantoren/',         fr: 'fr/bureaux/' },
  browser:  { en: 'browser-extension/', nl: 'nl/browserextensie/', fr: 'fr/extension-navigateur/' },
  android:  { en: 'android/',          nl: 'nl/android/',          fr: 'fr/android/' },
  windows:  { en: 'windows/',          nl: 'nl/windows/',          fr: 'fr/windows/' },
  maclinux: { en: 'mac-linux/',        nl: 'nl/mac-linux/',        fr: 'fr/mac-linux/' },
  network:  { en: 'network/',          nl: 'nl/netwerk/',          fr: 'fr/reseau/' },
  exam:     { en: 'exam-button/',      nl: 'nl/examenknop/',       fr: 'fr/bouton-examen/' },
  paste:    { en: 'paste-guard/',      nl: 'nl/plakbewaker/',      fr: 'fr/garde-collage/' },
  guide:    { en: 'block-chatgpt/',    nl: 'nl/chatgpt-blokkeren/', fr: 'fr/bloquer-chatgpt/' },
  policy:   { en: 'ai-policy-template/', nl: 'nl/ai-beleid-sjabloon/', fr: 'fr/modele-politique-ia/' },
  download: { en: 'download/',         nl: 'nl/download/',         fr: 'fr/telecharger/' },
  pricing:  { en: 'pricing/',          nl: 'nl/prijzen/',          fr: 'fr/tarifs/' },
  help:     { en: 'help/',             nl: 'nl/hulp/',             fr: 'fr/aide/' },
  about:    { en: 'about/',            nl: 'nl/over/',             fr: 'fr/a-propos/' },
  privacy:  { en: 'privacy/',          nl: 'nl/privacy/',          fr: 'fr/confidentialite/' },
  terms:    { en: 'terms/',            nl: 'nl/voorwaarden/',      fr: 'fr/conditions/' },
  legal:    { en: 'legal/',            nl: 'nl/wettelijk/',        fr: 'fr/mentions-legales/' },
} as const;

export type PageKey = keyof typeof ROUTES;

export const href = (key: PageKey, lang: Lang) => '/' + ROUTES[key][lang];
export const SITE = 'https://mindveto.app';
export const DL = '/downloads/';
export const CONTACT = 'hello@mindveto.app';
