export const LANGS = ['en', 'nl', 'fr', 'es', 'de', 'pt', 'it', 'ar'] as const;
export const RTL: Lang[] = ['ar'];
export type Lang = (typeof LANGS)[number];

// One entry per page. English lives at the root, Dutch under /nl/, French under /fr/.
export const ROUTES = {
  home:     { en: '',                  nl: 'nl/',                  fr: 'fr/' , es: 'es/', de: 'de/', pt: 'pt/', it: 'it/', ar: 'ar/' },
  parents:  { en: 'parents/',          nl: 'nl/ouders/',           fr: 'fr/parents/' , es: 'es/padres/', de: 'de/eltern/', pt: 'pt/pais/', it: 'it/genitori/', ar: 'ar/parents/' },
  schools:  { en: 'schools/',          nl: 'nl/scholen/',          fr: 'fr/ecoles/' , es: 'es/escuelas/', de: 'de/schulen/', pt: 'pt/escolas/', it: 'it/scuole/', ar: 'ar/schools/' },
  offices:  { en: 'offices/',          nl: 'nl/kantoren/',         fr: 'fr/bureaux/' , es: 'es/oficinas/', de: 'de/bueros/', pt: 'pt/escritorios/', it: 'it/uffici/', ar: 'ar/offices/' },
  browser:  { en: 'browser-extension/', nl: 'nl/browserextensie/', fr: 'fr/extension-navigateur/' , es: 'es/extension-navegador/', de: 'de/browser-erweiterung/', pt: 'pt/extensao-navegador/', it: 'it/estensione-browser/', ar: 'ar/browser-extension/' },
  android:  { en: 'android/',          nl: 'nl/android/',          fr: 'fr/android/' , es: 'es/android/', de: 'de/android/', pt: 'pt/android/', it: 'it/android/', ar: 'ar/android/' },
  windows:  { en: 'windows/',          nl: 'nl/windows/',          fr: 'fr/windows/' , es: 'es/windows/', de: 'de/windows/', pt: 'pt/windows/', it: 'it/windows/', ar: 'ar/windows/' },
  maclinux: { en: 'mac-linux/',        nl: 'nl/mac-linux/',        fr: 'fr/mac-linux/' , es: 'es/mac-linux/', de: 'de/mac-linux/', pt: 'pt/mac-linux/', it: 'it/mac-linux/', ar: 'ar/mac-linux/' },
  network:  { en: 'network/',          nl: 'nl/netwerk/',          fr: 'fr/reseau/' , es: 'es/red/', de: 'de/netzwerk/', pt: 'pt/rede/', it: 'it/rete/', ar: 'ar/network/' },
  exam:     { en: 'exam-button/',      nl: 'nl/examenknop/',       fr: 'fr/bouton-examen/' , es: 'es/boton-examen/', de: 'de/pruefungsknopf/', pt: 'pt/botao-exame/', it: 'it/pulsante-esame/', ar: 'ar/exam-button/' },
  paste:    { en: 'paste-guard/',      nl: 'nl/plakbewaker/',      fr: 'fr/garde-collage/' , es: 'es/guardia-pegado/', de: 'de/einfuege-schutz/', pt: 'pt/guarda-colagem/', it: 'it/guardia-incolla/', ar: 'ar/paste-guard/' },
  guide:    { en: 'block-chatgpt/',    nl: 'nl/chatgpt-blokkeren/', fr: 'fr/bloquer-chatgpt/' , es: 'es/bloquear-chatgpt/', de: 'de/chatgpt-blockieren/', pt: 'pt/bloquear-chatgpt/', it: 'it/bloccare-chatgpt/', ar: 'ar/block-chatgpt/' },
  family:   { en: 'block-porn/', nl: 'nl/porno-blokkeren/', fr: 'fr/bloquer-porno/', es: 'es/bloquear-porno/', de: 'de/pornos-blockieren/', pt: 'pt/bloquear-pornografia/', it: 'it/bloccare-porno/', ar: 'ar/block-porn/' },
  policy:   { en: 'ai-policy-template/', nl: 'nl/ai-beleid-sjabloon/', fr: 'fr/modele-politique-ia/' , es: 'es/plantilla-politica-ia/', de: 'de/ki-richtlinie-vorlage/', pt: 'pt/modelo-politica-ia/', it: 'it/modello-policy-ia/', ar: 'ar/ai-policy-template/' },
  download: { en: 'download/',         nl: 'nl/download/',         fr: 'fr/telecharger/' , es: 'es/descargar/', de: 'de/herunterladen/', pt: 'pt/baixar/', it: 'it/scarica/', ar: 'ar/download/' },
  pricing:  { en: 'pricing/',          nl: 'nl/prijzen/',          fr: 'fr/tarifs/' , es: 'es/precios/', de: 'de/preise/', pt: 'pt/precos/', it: 'it/prezzi/', ar: 'ar/pricing/' },
  help:     { en: 'help/',             nl: 'nl/hulp/',             fr: 'fr/aide/' , es: 'es/ayuda/', de: 'de/hilfe/', pt: 'pt/ajuda/', it: 'it/aiuto/', ar: 'ar/help/' },
  about:    { en: 'about/',            nl: 'nl/over/',             fr: 'fr/a-propos/' , es: 'es/acerca/', de: 'de/ueber-uns/', pt: 'pt/sobre/', it: 'it/chi-siamo/', ar: 'ar/about/' },
  privacy:  { en: 'privacy/',          nl: 'nl/privacy/',          fr: 'fr/confidentialite/' , es: 'es/privacidad/', de: 'de/datenschutz/', pt: 'pt/privacidade/', it: 'it/privacy/', ar: 'ar/privacy/' },
  terms:    { en: 'terms/',            nl: 'nl/voorwaarden/',      fr: 'fr/conditions/' , es: 'es/condiciones/', de: 'de/nutzungsbedingungen/', pt: 'pt/termos/', it: 'it/termini/', ar: 'ar/terms/' },
  legal:    { en: 'legal/',            nl: 'nl/wettelijk/',        fr: 'fr/mentions-legales/' , es: 'es/aviso-legal/', de: 'de/impressum/', pt: 'pt/aviso-legal/', it: 'it/note-legali/', ar: 'ar/legal/' },
} as const;

export type PageKey = keyof typeof ROUTES;

export const href = (key: PageKey, lang: Lang) => '/' + ROUTES[key][lang];
export const SITE = 'https://mindveto.app';
export const DL = '/downloads/';
export const CONTACT = 'hello@mindveto.app';
