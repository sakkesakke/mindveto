import type { Lang } from './routes';

export const UI: Record<Lang, Record<string, string>> = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Main',
    parents: 'Parents', schools: 'Schools', offices: 'Offices', download: 'Download', pricing: 'Pricing', help: 'Help',
    home: 'Home', products: 'Products', forWho: 'Who it is for', company: 'Mindveto',
    about: 'About', privacy: 'Privacy', terms: 'Terms', legal: 'Legal information', contact: 'Contact',
    tagline: 'Made in Belgium by Amghar Said.',
    fine: 'No cookies, no trackers, no ads on this site.',
    langName: 'English', getFree: 'Download free', related: 'Related',
  },
  nl: {
    skip: 'Naar de inhoud', menu: 'Menu', navLabel: 'Hoofdmenu',
    parents: 'Ouders', schools: 'Scholen', offices: 'Kantoren', download: 'Download', pricing: 'Prijzen', help: 'Hulp',
    home: 'Home', products: 'Producten', forWho: 'Voor wie', company: 'Mindveto',
    about: 'Over ons', privacy: 'Privacy', terms: 'Voorwaarden', legal: 'Wettelijke info', contact: 'Contact',
    tagline: 'Gemaakt in België door Amghar Said.',
    fine: 'Geen cookies, geen trackers, geen advertenties op deze site.',
    langName: 'Nederlands', getFree: 'Gratis downloaden', related: 'Ook interessant',
  },
  fr: {
    skip: 'Aller au contenu', menu: 'Menu', navLabel: 'Menu principal',
    parents: 'Parents', schools: 'Écoles', offices: 'Bureaux', download: 'Télécharger', pricing: 'Tarifs', help: 'Aide',
    home: 'Accueil', products: 'Produits', forWho: 'Pour qui', company: 'Mindveto',
    about: 'À propos', privacy: 'Confidentialité', terms: 'Conditions', legal: 'Mentions légales', contact: 'Contact',
    tagline: 'Créé en Belgique par Amghar Said.',
    fine: 'Pas de cookies, pas de traceurs, pas de publicité sur ce site.',
    langName: 'Français', getFree: 'Télécharger gratuitement', related: 'À voir aussi',
  },
};
