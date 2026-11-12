import type { Lang } from './routes';

export const UI: Record<Lang, Record<string, string>> = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Main',
    parents: 'Parents', schools: 'Schools', offices: 'Offices', download: 'Download', pricing: 'Pricing', help: 'Help',
    home: 'Home', products: 'Products', forWho: 'Who it is for', company: 'Mindveto',
    about: 'About', privacy: 'Privacy', terms: 'Terms', legal: 'Legal information', contact: 'Contact',
    tagline: 'The human override for AI. Made in Belgium by Amghar Said.',
    fine: 'No cookies, no trackers, no ads on this site. Mindveto was called Human Override until November 2026; the apps still show that name until their next update.',
    langName: 'English', getFree: 'Download free', related: 'Related',
  },
  nl: {
    skip: 'Naar de inhoud', menu: 'Menu', navLabel: 'Hoofdmenu',
    parents: 'Ouders', schools: 'Scholen', offices: 'Kantoren', download: 'Download', pricing: 'Prijzen', help: 'Hulp',
    home: 'Home', products: 'Producten', forWho: 'Voor wie', company: 'Mindveto',
    about: 'Over ons', privacy: 'Privacy', terms: 'Voorwaarden', legal: 'Wettelijke info', contact: 'Contact',
    tagline: 'De menselijke noodknop voor AI. Gemaakt in België door Amghar Said.',
    fine: 'Geen cookies, geen trackers, geen advertenties op deze site. Mindveto heette tot november 2026 Human Override; de apps tonen die naam nog tot hun volgende update.',
    langName: 'Nederlands', getFree: 'Gratis downloaden', related: 'Ook interessant',
  },
  fr: {
    skip: 'Aller au contenu', menu: 'Menu', navLabel: 'Menu principal',
    parents: 'Parents', schools: 'Écoles', offices: 'Bureaux', download: 'Télécharger', pricing: 'Tarifs', help: 'Aide',
    home: 'Accueil', products: 'Produits', forWho: 'Pour qui', company: 'Mindveto',
    about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions', legal: 'Mentions légales', contact: 'Contact',
    tagline: 'Le bouton humain pour couper l’IA. Créé en Belgique par Amghar Said.',
    fine: 'Pas de cookies, pas de traceurs, pas de publicité sur ce site. Mindveto s’appelait Human Override jusqu’en novembre 2026 ; les applis affichent encore ce nom jusqu’à leur prochaine mise à jour.',
    langName: 'Français', getFree: 'Télécharger gratuitement', related: 'À voir aussi',
  },
};
