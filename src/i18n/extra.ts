import type { Lang } from './routes';

// Names shown in the homepage stream. Only named to describe what is blocked.
export const AI_NAMES = ['ChatGPT', 'Gemini', 'Claude', 'Copilot', 'Perplexity', 'DeepSeek', 'Grok', 'Mistral Le Chat', 'Meta AI', 'Character.AI', 'Replika', 'Poe', 'Qwen', 'Kimi', 'Pi', 'You.com', 'Phind', 'QuillBot', 'Jasper', 'Writesonic', 'Gamma', 'Brainly AI', 'Photomath', 'Gauth', 'NotebookLM', 'Sora', 'Cursor', 'Windsurf', 'Lovable', 'v0', 'Bolt', 'Undetectable AI', 'Janitor AI', 'Talkie', 'Venice', 'OpenRouter', 'HuggingChat', 'Duck.ai', 'Monica', 'Merlin'];

type Plan = { name: string; price: string; per: string; who: string; items: string[]; free?: boolean; cta: string; to?: string; mail?: string; pick?: boolean };
export const PLANS: Record<Lang, { plans: Plan[]; note: string }> = {
  en: {
    note: 'Planned prices. During the launch every feature is free. Consumer prices include VAT.',
    plans: [
      { name: 'Free', price: '€0', per: 'always', who: 'Everyone', free: true, items: ['Blocks 150+ AI services', 'PIN lock and schedule', 'Your own block and allow lists', 'Browser, Android, Windows, Mac, Linux, network lists'], cta: 'Download free', to: 'download' },
      { name: 'Plus', price: '€14.99', per: 'per year, or €1.99 per month', who: 'Families and freelancers', items: ['Everything in Free', 'Paste guard with your own words', 'Approved AI', 'Tamper log and alerts on Android', 'School holidays in the schedule', '15 days free to try'], cta: 'Use it free now', to: 'download', pick: true },
      { name: 'School', price: '€1', per: 'per pupil per year, minimum €149', who: 'Schools', items: ['Exam button for every class', 'Roll-out help for IT', 'Data processing agreement', 'Invoice', 'Free pilot for one term'], cta: 'Ask for a pilot', mail: 'School pilot' },
      { name: 'Business', price: '€2.50', per: 'per user per month, minimum 5', who: 'Offices and companies', items: ['Paste guard for the whole team', 'Approved AI set centrally', 'Roll-out help and invoice', 'AI Act and GDPR report (coming)'], cta: 'Talk to us', mail: 'Mindveto for our office' },
    ],
  },
  nl: {
    note: 'Geplande prijzen. Tijdens de lancering is elke functie gratis. Prijzen voor consumenten zijn inclusief btw.',
    plans: [
      { name: 'Gratis', price: '€0', per: 'altijd', who: 'Iedereen', free: true, items: ['Blokkeert 150+ AI-diensten', 'Pincode en rooster', 'Eigen blokkeer- en toelaatlijsten', 'Browser, Android, Windows, Mac, Linux, netwerklijsten'], cta: 'Gratis downloaden', to: 'download' },
      { name: 'Plus', price: '€14,99', per: 'per jaar, of €1,99 per maand', who: 'Gezinnen en zelfstandigen', items: ['Alles uit Gratis', 'Plakbewaker met je eigen woorden', 'Goedgekeurde AI', 'Sabotagelog en meldingen op Android', 'Schoolvakanties in het rooster', '15 dagen gratis proberen'], cta: 'Nu gratis gebruiken', to: 'download', pick: true },
      { name: 'School', price: '€1', per: 'per leerling per jaar, minimum €149', who: 'Scholen', items: ['Examenknop voor elke klas', 'Hulp bij de uitrol voor IT', 'Verwerkersovereenkomst', 'Factuur', 'Gratis proef van één trimester'], cta: 'Vraag een proef aan', mail: 'Proef voor onze school' },
      { name: 'Business', price: '€2,50', per: 'per gebruiker per maand, minimum 5', who: 'Kantoren en bedrijven', items: ['Plakbewaker voor het hele team', 'Goedgekeurde AI centraal ingesteld', 'Hulp bij de uitrol en factuur', 'Rapport AI-wet en AVG (komt)'], cta: 'Neem contact op', mail: 'Mindveto voor ons kantoor' },
    ],
  },
  fr: {
    note: 'Prix prévus. Pendant le lancement, toutes les fonctions sont gratuites. Les prix pour particuliers incluent la TVA.',
    plans: [
      { name: 'Gratuit', price: '0 €', per: 'toujours', who: 'Tout le monde', free: true, items: ['Bloque 150+ services d’IA', 'PIN et horaire', 'Vos listes de blocage et d’autorisation', 'Navigateur, Android, Windows, Mac, Linux, listes réseau'], cta: 'Télécharger gratuitement', to: 'download' },
      { name: 'Plus', price: '14,99 €', per: 'par an, ou 1,99 € par mois', who: 'Familles et indépendants', items: ['Tout le Gratuit', 'Garde-collage avec vos propres mots', 'IA approuvée', 'Journal et alertes anti-sabotage sur Android', 'Vacances scolaires dans l’horaire', '15 jours d’essai gratuit'], cta: 'Utiliser gratuitement', to: 'download', pick: true },
      { name: 'École', price: '1 €', per: 'par élève et par an, minimum 149 €', who: 'Écoles', items: ['Bouton examen pour chaque classe', 'Aide au déploiement pour l’IT', 'Accord de traitement des données', 'Facture', 'Pilote gratuit d’un trimestre'], cta: 'Demander un pilote', mail: 'Pilote pour notre école' },
      { name: 'Business', price: '2,50 €', per: 'par utilisateur et par mois, minimum 5', who: 'Bureaux et entreprises', items: ['Garde-collage pour toute l’équipe', 'IA approuvée réglée de façon centrale', 'Aide au déploiement et facture', 'Rapport AI Act et RGPD (bientôt)'], cta: 'Nous contacter', mail: 'Mindveto pour notre bureau' },
    ],
  },
};

export const EXAM_UI: Record<Lang, Record<string, string>> = {
  en: {
    mkH: 'Make your class', mkP: 'You get a class code for the pupils and a private teacher link for you.', mkB: 'Make a class',
    clH: 'Your class code',
    s1: 'Pupils install the Mindveto extension in their browser (school computers: once).',
    s2: 'They open the extension, go to “Class · exam mode”, type this code and tap Join.',
    s3: 'The school or teacher sets the PIN in the extension, not the pupil, so a pupil cannot leave the class.',
    cp: 'Copy my private teacher link', fg: 'Forget this class on this device',
    keep: 'Keep the teacher link private: whoever has it can start and stop the exam. Save it as a bookmark to use the class on another device.',
    exH: 'Exam mode', dur: 'How long?', go: 'Start exam mode', st: 'Stop now',
    lim: 'Honest limits: it works in browsers where the extension joined your class, and it can take up to one minute before every browser follows. It does not block phones or other browsers. On school computers, install the extension with browser policy. During the exam every AI category is blocked, also AI your school normally approves.',
    on: 'Exam mode is on: {t} left', off: 'Exam mode is off. AI follows the normal settings.',
    slow: 'Too many requests right now. Try again in a minute.', net: 'Could not reach the server. Check your internet and try again.',
    bad: 'This teacher link is not valid (any more).', copied: 'Copied. Keep it private.',
    other: 'This link is for another class. This device already has a class: tap “Forget this class on this device” first, then open the link again.',
    yes: 'Tap again to forget',
  },
  nl: {
    mkH: 'Maak je klas', mkP: 'Je krijgt een klascode voor de leerlingen en een privé-lerarenlink voor jou.', mkB: 'Klas maken',
    clH: 'Je klascode',
    s1: 'Leerlingen installeren de Mindveto-extensie in hun browser (schoolcomputers: één keer).',
    s2: 'Ze openen de extensie, gaan naar “Klas · examenmodus”, typen deze code en tikken op Koppelen.',
    s3: 'De school of leraar stelt de pincode in de extensie in, niet de leerling, zodat een leerling de klas niet kan verlaten.',
    cp: 'Kopieer mijn privé-lerarenlink', fg: 'Vergeet deze klas op dit toestel',
    keep: 'Hou de lerarenlink privé: wie hem heeft, kan het examen starten en stoppen. Bewaar hem als bladwijzer om de klas op een ander toestel te gebruiken.',
    exH: 'Examenmodus', dur: 'Hoe lang?', go: 'Start examenmodus', st: 'Nu stoppen',
    lim: 'Eerlijke grenzen: het werkt in browsers waar de extensie aan je klas gekoppeld is, en het kan tot één minuut duren voor elke browser volgt. Het blokkeert geen telefoons of andere browsers. Installeer de extensie op schoolcomputers via browserbeleid. Tijdens het examen is elke AI-categorie geblokkeerd, ook AI die je school normaal goedkeurt.',
    on: 'Examenmodus staat aan: nog {t}', off: 'Examenmodus staat uit. AI volgt de gewone instellingen.',
    slow: 'Te veel aanvragen op dit moment. Probeer over een minuut opnieuw.', net: 'De server is niet bereikbaar. Controleer je internet en probeer opnieuw.',
    bad: 'Deze lerarenlink is niet (meer) geldig.', copied: 'Gekopieerd. Hou hem privé.',
    other: 'Deze link is voor een andere klas. Dit toestel heeft al een klas: tik eerst op “Vergeet deze klas op dit toestel” en open de link daarna opnieuw.',
    yes: 'Tik nog eens om te vergeten',
  },
  fr: {
    mkH: 'Créez votre classe', mkP: 'Vous recevez un code de classe pour les élèves et un lien enseignant privé pour vous.', mkB: 'Créer une classe',
    clH: 'Votre code de classe',
    s1: 'Les élèves installent l’extension Mindveto dans leur navigateur (ordinateurs de l’école : une seule fois).',
    s2: 'Ils ouvrent l’extension, vont dans « Classe · mode examen », tapent ce code et touchent Rejoindre.',
    s3: 'L’école ou l’enseignant définit le PIN dans l’extension, pas l’élève, pour qu’un élève ne puisse pas quitter la classe.',
    cp: 'Copier mon lien enseignant privé', fg: 'Oublier cette classe sur cet appareil',
    keep: 'Gardez le lien enseignant privé : celui qui l’a peut démarrer et arrêter l’examen. Enregistrez-le en favori pour utiliser la classe sur un autre appareil.',
    exH: 'Mode examen', dur: 'Combien de temps ?', go: 'Démarrer le mode examen', st: 'Arrêter maintenant',
    lim: 'Limites honnêtes : cela fonctionne dans les navigateurs où l’extension a rejoint votre classe, et il peut falloir jusqu’à une minute avant que chaque navigateur suive. Cela ne bloque pas les téléphones ni les autres navigateurs. Sur les ordinateurs de l’école, installez l’extension par stratégie de navigateur. Pendant l’examen, toutes les catégories d’IA sont bloquées, même les IA que votre école approuve d’habitude.',
    on: 'Mode examen activé : encore {t}', off: 'Le mode examen est désactivé. L’IA suit les réglages habituels.',
    slow: 'Trop de demandes pour le moment. Réessayez dans une minute.', net: 'Serveur injoignable. Vérifiez votre connexion et réessayez.',
    bad: 'Ce lien enseignant n’est pas (ou plus) valide.', copied: 'Copié. Gardez-le privé.',
    other: 'Ce lien concerne une autre classe. Cet appareil a déjà une classe : touchez d’abord « Oublier cette classe sur cet appareil », puis rouvrez le lien.',
    yes: 'Touchez encore pour oublier',
  },
};

export const STREAM_LABEL: Record<Lang, string> = { en: 'On the list', nl: 'Op de lijst', fr: 'Sur la liste' };

// Paste guard mock shown on the offices and paste guard pages (static picture of the real dialog).
export const PASTE_MOCK: Record<Lang, { h: string; p: string; found: string[]; a: string; b: string; c: string }> = {
  en: { h: 'Private data in your paste', p: 'You are pasting into an AI chat. We found:', found: ['Bank account number (IBAN)', 'National ID number', 'Your word: “Dossier Peeters”'], a: 'Don’t paste', b: 'Paste without private parts', c: 'Paste anyway' },
  nl: { h: 'Privégegevens in je plakwerk', p: 'Je plakt in een AI-chat. We vonden:', found: ['Rekeningnummer (IBAN)', 'Rijksregisternummer', 'Jouw woord: “Dossier Peeters”'], a: 'Niet plakken', b: 'Plakken zonder privédelen', c: 'Toch plakken' },
  fr: { h: 'Données privées dans votre collage', p: 'Vous collez dans un chat IA. Nous avons trouvé :', found: ['Numéro de compte (IBAN)', 'Numéro de registre national', 'Votre mot : « Dossier Peeters »'], a: 'Ne pas coller', b: 'Coller sans les parties privées', c: 'Coller quand même' },
};
