import type { Lang, PageKey } from './routes';

type P = Partial<Record<PageKey, string>>;

export const PRODUCT_NAMES: Record<Lang, P> = {
  en: { browser: 'Browser extension', android: 'Android app', windows: 'Windows', maclinux: 'Mac and Linux', network: 'Whole network (IT)', exam: 'Exam button', paste: 'Paste guard' },
  nl: { browser: 'Browserextensie', android: 'Android-app', windows: 'Windows', maclinux: 'Mac en Linux', network: 'Hele netwerk (IT)', exam: 'Examenknop', paste: 'Plakbewaker' },
  fr: { browser: 'Extension de navigateur', android: 'Appli Android', windows: 'Windows', maclinux: 'Mac et Linux', network: 'Tout le réseau (IT)', exam: 'Bouton examen', paste: 'Garde-collage' },
};

export const PRODUCT_LINES: Record<Lang, P> = {
  en: {
    browser: 'One switch and a PIN in Chrome, Edge, Brave or Opera.',
    android: 'Blocks AI in every app on the phone, not just the browser.',
    windows: 'One download blocks AI in every browser and app on the PC.',
    maclinux: 'One command blocks AI system-wide on a Mac or Linux computer.',
    network: 'Ready-made files for DNS, firewalls and browser policy.',
    exam: 'A teacher switches AI off for a whole class during a test.',
    paste: 'A warning before private data is pasted into an AI chat.',
  },
  nl: {
    browser: 'Eén schakelaar en een pincode in Chrome, Edge, Brave of Opera.',
    android: 'Blokkeert AI in elke app op de telefoon, niet alleen in de browser.',
    windows: 'Eén download blokkeert AI in elke browser en app op de pc.',
    maclinux: 'Eén commando blokkeert AI op het hele Mac- of Linux-systeem.',
    network: 'Kant-en-klare bestanden voor DNS, firewalls en browserbeleid.',
    exam: 'Een leraar zet AI uit voor de hele klas tijdens een toets.',
    paste: 'Een waarschuwing voor je privégegevens in een AI-chat plakt.',
  },
  fr: {
    browser: 'Un interrupteur et un PIN dans Chrome, Edge, Brave ou Opera.',
    android: 'Bloque l’IA dans toutes les applis du téléphone, pas seulement le navigateur.',
    windows: 'Un téléchargement bloque l’IA dans tous les navigateurs et applis du PC.',
    maclinux: 'Une commande bloque l’IA dans tout le système Mac ou Linux.',
    network: 'Des fichiers prêts pour le DNS, les pare-feu et les stratégies de navigateur.',
    exam: 'Un enseignant coupe l’IA pour toute la classe pendant un test.',
    paste: 'Un avertissement avant de coller des données privées dans un chat IA.',
  },
};

export const PRODUCT_KEYS: PageKey[] = ['browser', 'android', 'windows', 'maclinux', 'network', 'exam', 'paste'];
