import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

export const home: Home = {
  title: 'Mindveto : bloquez ChatGPT et 150+ outils d’IA d’un geste',
  desc: 'Bloquez ChatGPT, Gemini, Copilot et 150+ outils d’IA sur navigateurs, Android, Windows, Mac et réseaux. PIN, bouton examen. Gratuit, sans pistage.',
  h1: 'Votre esprit a le dernier mot.',
  lead: 'Mindveto coupe ChatGPT, Gemini, Copilot et 150+ autres outils d’IA sur un navigateur, un téléphone, un ordinateur ou tout un réseau. Un code PIN décide qui peut les rallumer.',
  switchOn: 'IA', switchOff: 'Veto', switchLabel: 'Essayez : coupez l’IA sur cette page',
  statusOn: 'IA autorisée. Basculez-le.', statusOff: 'Veto. 150+ services d’IA bloqués.',
  how: 'Comment ça marche',
  doorsH: 'Pour qui',
  doors: [
    { key: 'parents', who: 'Parents', why: 'Des « amis IA » à minuit, des devoirs écrits par un chatbot. Verrouillez l’ordinateur familial et le téléphone de votre enfant. Nouveau : un filtre famille gratuit pour les sites porno, de jeux d’argent et de rencontre.', go: 'Pour les parents' },
    { key: 'schools', who: 'Écoles', why: 'Un bouton examen pour les enseignants, et des fichiers que l’IT peut déployer dès aujourd’hui sur chaque ordinateur.', go: 'Pour les écoles' },
    { key: 'offices', who: 'Bureaux', why: 'Les dossiers clients, IBAN et contrats restent hors des chatbots publics. N’autorisez que l’IA approuvée par votre cabinet.', go: 'Pour les bureaux' },
  ],
  productsH: 'Une idée, sept outils',
  productsLead: 'Choisissez selon l’appareil. Aujourd’hui, tout est gratuit.',
  proofH: 'Ce qui quitte votre appareil',
  proofP: 'Mindveto vérifie tout sur l’appareil lui-même. Nous ne voulons pas vos données, alors nous l’avons construit pour ne jamais les recevoir.',
  ledger: [
    ['Rien', 'Les pages que vous visitez, ce que vous tapez, ce que vous collez.', true],
    ['Rien', 'Votre nom, votre adresse e-mail ou un compte. Il n’y a pas de compte.', true],
    ['Une fois par jour', 'L’extension télécharge la liste publique des adresses d’IA. Elle n’envoie rien avec.', false],
    ['Seulement si vous rejoignez', 'En mode examen, le code de classe est envoyé une fois par minute pour savoir si l’examen est en cours. Pas de noms.', false],
  ],
  limitsH: 'Limites honnêtes',
  limits: [
    'Il fonctionne sur le navigateur, le téléphone, l’ordinateur ou le réseau où vous l’installez. Un enfant peut toujours utiliser le téléphone d’un ami.',
    'Qui contrôle tout l’appareil peut le retirer. Donnez aux enfants et au personnel un compte standard (pas administrateur).',
    'De nouveaux outils d’IA apparaissent chaque semaine. La liste est mise à jour chaque jour, mais l’un d’eux peut passer quelques jours.',
  ],
  priceH: 'Gratuit pour commencer',
  priceP: 'Le blocage reste gratuit pour tous. Les formules payantes pour familles, écoles et bureaux démarrent avec le lancement sur Google Play.',
  priceGo: 'Voir les formules',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  parents: {
    title: 'Bloquer ChatGPT et les applis d’IA pour votre enfant',
    desc: 'Bloquez les chatbots IA, les « amis IA » et l’IA des devoirs sur le navigateur, le téléphone Android de votre enfant et le PC familial. Gratuit.',
    h1: 'Bloquez l’IA pour votre enfant, sur chaque écran qu’il utilise.',
    lead: 'Des « amis IA » qui discutent à minuit, des rédactions écrites en dix secondes. Avec Mindveto, c’est vous qui décidez quand l’IA fait partie de la journée de votre enfant, et un PIN le garantit.',
    actions: [{ label: 'Télécharger gratuitement', to: 'download', solid: true }, { label: 'Quelle version choisir ?', to: 'help' }],
    blocks: [
      { h: 'Ce que vous pouvez faire', list: [
        'Bloquer 150+ chatbots IA, « amis IA », aides aux devoirs et outils d’images IA d’un seul geste.',
        'Définir un PIN pour que votre enfant ne puisse ni le couper ni modifier la liste.',
        'Utiliser un horaire : bloquer seulement les jours d’école, ou seulement le soir. Les vacances scolaires de Belgique, des Pays-Bas et de France sont intégrées.',
        'Consulter le journal anti-sabotage : PIN erronés et moments où l’interrupteur a été coupé.',
        'Autoriser une IA de confiance, par exemple pour un projet scolaire, et garder le reste bloqué.',
        'Si vous le souhaitez, bloquer aussi les réseaux sociaux comme TikTok, Instagram et Snapchat dans le navigateur. Désactivé tant que vous ne l’activez pas.',
        'Filtre famille, gratuit : bloquez les sites porno et 18+ et imposez SafeSearch dans Google, Bing, DuckDuckGo et YouTube. Désactivé tant que vous ne l’activez pas. En option : bloquez aussi les sites de VPN, de proxy et de DNS sécurisé, pour que le filtre ne soit pas facile à contourner. Aussi en option : bloquer les sites de jeux d’argent et de paris, et les applis de rencontre et le chat vidéo aléatoire.',
      ]},
      { h: 'Prêt en 10 minutes', steps: [
        L('Sur l’ordinateur familial : installez l’<a href="/fr/extension-navigateur/">extension de navigateur</a>, ou bloquez l’IA dans toutes les applis avec le téléchargement <a href="/fr/windows/">Windows</a> ou <a href="/fr/mac-linux/">Mac</a>.'),
        L('Sur le téléphone Android de votre enfant : installez l’<a href="/fr/android/">appli Android</a> et activez « VPN permanent » pour qu’elle ne puisse pas être contournée.'),
        'Utilisez le même PIN partout et gardez-le pour vous.',
        'Donnez à votre enfant un compte standard (pas administrateur) sur l’ordinateur. Il ne pourra alors pas retirer Mindveto.',
      ]},
      { h: 'Une bonne conversation vaut mieux que tout blocage', p: [
        'Le blocage fonctionne mieux quand votre enfant sait pourquoi. Expliquez ce que fait Mindveto, quand l’IA est permise, et que le journal montre si quelqu’un essaie de le couper.',
      ], note: 'Mindveto ne lit pas les messages de votre enfant et ne nous envoie rien. Il empêche seulement les adresses d’IA de s’ouvrir.', human: true },
    ],
    faq: [
      { q: 'Est-ce que ça marche sur iPhone ?', a: L('Il n’y a pas encore d’appli iPhone. Vous pouvez bloquer l’IA sur un iPhone avec notre liste gratuite et un service DNS : voir <a href="/fr/reseau/">tout le réseau</a>. Temps d’écran d’Apple peut aussi bloquer des sites isolés.') },
      { q: 'Mon enfant utilise un portable de l’école. Puis-je l’y installer ?', a: 'Demandez d’abord à l’école. Les appareils scolaires sont gérés par l’école, et beaucoup d’écoles peuvent installer Mindveto pour tous les élèves à la fois.' },
      { q: 'C’est vraiment gratuit ?', a: 'Oui. Le blocage, le PIN et l’horaire restent gratuits. Une formule Plus payante avec des extras pour les familles arrive avec le lancement sur Google Play.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'Bloquer l’IA à l’école, avec un bouton examen',
    desc: 'Bloquez ChatGPT et l’IA sur les ordinateurs et le réseau de l’école. Bouton examen pour les enseignants, fichiers pour l’IT. Aucune donnée d’élève.',
    h1: 'L’IA coupée pendant le test. Allumée quand le cours le demande.',
    lead: 'Les enseignants reçoivent un bouton examen. L’IT reçoit des fichiers prêts pour chaque ordinateur et le réseau de l’école. Personne ne lit ce que tapent les élèves.',
    actions: [{ label: 'Ouvrir le bouton examen', to: 'exam', solid: true }, { label: 'Fichiers pour l’IT', to: 'network' }],
    blocks: [
      { h: 'Pour les enseignants', list: [
        'Créez une classe en un clic. Les élèves rejoignent avec un code dans l’extension.',
        'Lancez le mode examen de 30 à 240 minutes. En une minute, toute IA est bloquée dans les navigateurs de votre classe.',
        'Pas de comptes, pas de noms d’élèves, pas d’adresses e-mail.',
      ], actions: [{ label: 'Créer une classe', to: 'exam' }] },
      { h: 'Pour l’IT', list: [
        'Installez l’extension de force via les stratégies Chrome et Edge (Google Admin, GPO, Intune) pour que les élèves ne puissent pas la retirer.',
        'Bloquez l’IA sur le réseau de l’école avec des fichiers pour Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid et les pare-feu courants.',
        'N’autorisez que les outils d’IA approuvés par l’école et gardez le reste bloqué.',
      ], actions: [{ label: 'Télécharger le pack IT', to: 'network' }] },
      { h: 'Vie privée des élèves', p: [
        'Mindveto vérifie tout sur l’appareil. Il n’enregistre pas les sites visités et ne lit pas les prompts. Pour le mode examen, notre base de données ne garde qu’un code de classe haché et l’heure de fin de l’examen.',
        L('C’est simple à expliquer aux parents et à votre délégué à la protection des données. Lisez la <a href="/fr/confidentialite/">politique de confidentialité</a>.'),
      ]},
      { h: 'Essayez pendant un trimestre', p: [
        L('Gratuit pendant le pilote. Écrivez à <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> avec le nom de votre école et le nombre d’appareils, et nous vous aidons à l’installer.'),
      ]},
    ],
    faq: [
      { q: 'Un élève peut-il quitter la classe ou le couper ?', a: 'Pas si l’école définit le PIN et installe l’extension par stratégie de navigateur. Sur un ordinateur où l’élève est administrateur, il peut la retirer.' },
      { q: 'Est-ce que ça bloque les téléphones en classe ?', a: 'Le mode examen fonctionne dans les navigateurs des ordinateurs de l’école. Pour les téléphones sur le Wi-Fi de l’école, utilisez les fichiers DNS du réseau.' },
      { q: 'Combien cela coûtera-t-il ?', a: L('Le prix prévu est de 1 € par élève et par an, minimum 149 € par école. Voir les <a href="/fr/tarifs/">tarifs</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Données clients hors de ChatGPT : le garde-collage',
    desc: 'Garde-collage pour bureaux : un avertissement avant que des IBAN, listes clients ou textes confidentiels n’entrent dans un chat IA.',
    h1: 'Les données clients restent hors des chatbots publics.',
    lead: 'Un comptable colle un extrait bancaire dans un chatbot pour « le résumer ». Mindveto arrête ce moment à l’écran, avant que les données ne quittent le bureau.',
    actions: [{ label: 'Voir le garde-collage', to: 'paste', solid: true }, { label: 'Tarifs pour équipes', to: 'pricing' }],
    blocks: [
      { h: 'Ce qu’il fait pour un cabinet', list: [
        'N’autorise que l’IA approuvée par votre cabinet (par exemple Microsoft Copilot avec votre compte professionnel) et bloque les 150+ autres.',
        'Avertit avant que des IBAN, numéros de carte, numéros de registre national, listes d’adresses e-mail, clés secrètes ou textes marqués « confidentiel » ne soient collés dans un site d’IA.',
        'Ajoutez vos propres mots privés : noms de clients, codes de projet, numéros de dossier.',
        'Verrouillez les réglages avec un PIN et voyez quand quelqu’un a essayé de les modifier.',
      ]},
      { h: 'Pourquoi les cabinets le choisissent', p: [
        'Les grands outils anti-fuite envoient vos données dans leur cloud pour les vérifier, et coûtent des milliers d’euros. Mindveto vérifie sur le PC lui-même : le texte ne quitte jamais le bureau.',
        'Il convient aux comptables, avocats, notaires, courtiers en assurances, RH et cabinets médicaux : de petites équipes avec des dossiers confidentiels et sans service IT.',
      ], note: 'En Belgique, aux Pays-Bas et en Allemagne, le conseil d’entreprise ou le personnel doit parfois être informé avant d’introduire un tel outil. Mindveto ne lit rien et n’envoie rien, ce qui facilite cette discussion.', human: true },
      { h: 'Déployer', steps: [
        L('Installez l’<a href="/fr/extension-navigateur/">extension de navigateur</a> sur chaque ordinateur de travail, ou installez-la de force par stratégie Edge ou Chrome.'),
        'Cochez l’IA que votre cabinet autorise et ajoutez vos mots privés.',
        'Définissez un seul PIN pour tout le bureau.',
      ]},
    ],
    faq: [
      { q: 'Peut-il bloquer l’IA dans Word ou Outlook ?', a: L('L’extension fonctionne dans le navigateur. Sous Windows, le <a href="/fr/windows/">téléchargement Windows</a> peut aussi couper Copilot et Recall intégrés à Windows.') },
      { q: 'Voyez-vous ce que colle mon personnel ?', a: 'Non. La vérification se fait sur l’ordinateur. Le texte collé n’est jamais conservé ni envoyé.' },
      { q: 'Combien ça coûte ?', a: L('La formule pour équipes est de 2,50 € par utilisateur et par mois. Pendant le lancement, c’est gratuit. Voir les <a href="/fr/tarifs/">tarifs</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'Bloqueur d’IA pour Chrome, Edge, Brave et Opera',
    desc: 'Extension gratuite qui bloque ChatGPT, Gemini, Claude et 150+ sites d’IA dans Chrome, Edge, Brave et Opera. PIN, horaire, garde-collage.',
    h1: 'L’interrupteur d’IA pour votre navigateur.',
    lead: 'Un interrupteur bloque 150+ chatbots et outils d’IA. Un PIN empêche quiconque de le modifier. Fonctionne dans Chrome, Edge, Brave et Opera.',
    actions: [{ label: 'Télécharger v1.6.0 (735 Ko)', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Étapes d’installation', url: '#install' }],
    blocks: [
      { h: 'Ce qu’il contient', list: [
        'Bloque le chat IA, la recherche IA, les outils d’image, vidéo, voix et musique IA, l’IA de rédaction et de devoirs, l’IA de programmation et les preneurs de notes IA.',
        'PIN pour l’interrupteur et tous les réglages.',
        'Horaire avec les vacances scolaires de Belgique, des Pays-Bas et de France.',
        L('<a href="/fr/garde-collage/">Garde-collage</a> avec vos propres mots privés.'),
        'IA approuvée : n’autorisez que les outils permis par votre école ou entreprise.',
        L('Mode classe et <a href="/fr/bouton-examen/">mode examen</a> pour les enseignants.'),
        'Journal anti-sabotage et une marque rouge sur l’icône après un PIN erroné.',
        'Vos propres listes de blocage et d’autorisation. La liste publique est mise à jour chaque jour.',
        'En option : bloquez aussi les réseaux sociaux (TikTok, Instagram, Snapchat et plus). Désactivé tant que vous ne l’activez pas.',
        'Filtre famille : bloque plus de 60 000 sites porno et 18+ et impose SafeSearch dans Google, Bing, DuckDuckGo et YouTube. Désactivé tant que vous ne l’activez pas ; avec un PIN, vous seul pouvez le couper. En option : bloque aussi les sites de VPN, de proxy, Tor et DNS sécurisé, pour que le filtre ne soit pas simple à contourner. Aussi en option : bloquer les sites de jeux d’argent et de paris, et les applis de rencontre et le chat vidéo aléatoire.',
      ]},
      { h: 'Installer en une minute', fold: 'Afficher les étapes d’installation', foldLead: 'Les versions des boutiques arrivent. D’ici là, vous l’installez à la main en une minute.', steps: [
        'Téléchargez le zip ci-dessus et décompressez-le (clic droit, « Extraire tout »).',
        L('Ouvrez <code>chrome://extensions</code> (dans Edge : <code>edge://extensions</code>).'),
        'Activez le « Mode développeur » (en haut à droite).',
        'Cliquez sur « Charger l’extension non empaquetée » et choisissez le dossier décompressé.',
        'Épinglez l’icône dans votre barre d’outils, ouvrez-la et définissez un PIN.',
      ], note: 'Pour les parents et les écoles : sur la page « Détails » de l’extension, activez « Autoriser en navigation privée ». Sinon, les fenêtres privées ne sont pas bloquées.' },
      { h: 'Fiche', facts: [
        ['Version', '1.6.0 (Manifest V3)'], ['Taille', '735 Ko'], ['Navigateurs', 'Chrome, Edge, Brave, Opera. Firefox et les boutiques officielles : bientôt'],
        ['Autorisations', 'Règles de blocage, stockage local, un minuteur quotidien'], ['Données envoyées', 'Aucune. Seule la liste publique est téléchargée chaque jour'], ['Prix', 'Gratuit'],
      ]},
    ],
    faq: [
      { q: 'Pourquoi n’est-il pas encore dans le Chrome Web Store ?', a: 'Les versions des boutiques arrivent. D’ici là, vous l’installez à la main en une minute, avec les étapes ci-dessus.' },
      { q: 'Pourquoi un ancien téléchargement affiche-t-il « Human Override » ?', a: 'C’était son nom jusqu’en novembre 2026. La version 1.3.0 et les suivantes affichent Mindveto. C’est le même produit.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'Bloquer les applis d’IA sur Android',
    desc: 'Appli Android qui bloque ChatGPT, Gemini, Character.AI et 150+ services d’IA dans toutes les applis du téléphone. PIN et alertes.',
    h1: 'L’IA coupée dans toutes les applis du téléphone.',
    lead: 'Le navigateur n’est que la moitié de l’histoire : les applis d’IA vivent sur le téléphone. L’appli Android de Mindveto bloque les adresses d’IA pour toutes les applis, et vous prévient si quelqu’un essaie de la couper.',
    actions: [{ label: 'Télécharger pour Android (389 Ko, bêta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Comment ça marche', p: [
        'L’appli fait tourner un petit filtre local de noms internet (DNS) sur le téléphone. Quand une appli demande une adresse d’IA, le filtre répond qu’elle n’existe pas. Tout le reste fonctionne normalement.',
        'Seules ces demandes de noms passent par l’appli. Rien ne nous est envoyé.',
        'Filtre famille en option : activez « Sites pour adultes » et « SafeSearch » dans l’appli. Les sites porno ne s’ouvrent alors dans aucune appli, et Google, Bing, DuckDuckGo et YouTube montrent des résultats sûrs. Avec un PIN, il faut le PIN pour le couper. Un troisième interrupteur bloque les services de VPN, de proxy et de DNS sécurisé, pour que le filtre ne soit pas facile à contourner. Aussi en option : bloquer les sites de jeux d’argent et de paris, et les applis de rencontre et le chat vidéo aléatoire.',
      ]},
      { h: 'Installer', steps: [
        'Ouvrez le lien de téléchargement sur le téléphone.',
        'Quand Android le demande, autorisez « installer des applis inconnues » pour votre navigateur.',
        'Ouvrez l’appli et touchez le grand bouton.',
        'Activez « VPN permanent » et « Bloquer les connexions sans VPN » (l’appli montre comment). Elle ne peut alors pas être contournée.',
        'Définissez un PIN.',
      ], note: 'Bêta : pour mettre à jour, désinstallez d’abord l’ancienne version. La version Google Play arrive, avec 15 jours de Plus gratuits.' },
      { h: 'Fiche', facts: [
        ['Version', 'Bêta, cible Android 16 (SDK 36)'], ['Taille', '389 Ko'], ['Nécessite', 'Android 8 ou plus récent'],
        ['Alertes anti-sabotage', 'Oui, une notification si la protection s’arrête'], ['Données envoyées', 'Aucune'], ['Prix', 'Gratuit pendant la bêta'],
      ]},
    ],
    faq: [
      { q: 'Est-ce que ça ralentit le téléphone ou la batterie ?', a: 'À peine. Il répond seulement aux demandes de noms ; votre trafic ne passe pas par un serveur.' },
      { q: 'Puis-je utiliser un autre VPN en même temps ?', a: 'Non. Android n’autorise qu’un VPN à la fois. Mindveto utilise cette place pour son filtre local.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'Bloquer l’IA sous Windows, dans chaque appli',
    desc: 'Téléchargement Windows gratuit qui bloque ChatGPT et 150+ services d’IA dans chaque navigateur et appli, et peut couper Copilot et Recall.',
    h1: 'Bloquez l’IA sur tout le PC Windows.',
    lead: 'Pas besoin d’extension : un téléchargement bloque les adresses d’IA pour tous les navigateurs et toutes les applis de l’ordinateur. Il peut aussi couper l’IA intégrée à Windows.',
    actions: [{ label: 'Télécharger pour Windows (501 Ko)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installer', fold: 'Afficher les étapes d’installation', foldLead: 'Les versions des boutiques arrivent. D’ici là, vous l’installez à la main en une minute.', steps: [
        'Décompressez le téléchargement.',
        'Double-cliquez sur « Start-Mindveto.bat » et cliquez sur Oui.',
        'Tapez 1 pour bloquer l’IA. Tapez 3 pour couper aussi Copilot, Recall et l’IA d’Edge et de Chrome.',
        'Donnez aux enfants ou au personnel un compte standard (pas administrateur). Ils ne pourront pas l’annuler.',
        'Tapez 5 pour activer le filtre famille : sites porno et 18+ bloqués, SafeSearch imposé dans Google, Bing et YouTube. Tapez 6 pour le couper. Il bloque aussi les sites de VPN, de proxy et de DNS sécurisé et coupe le DNS sécurisé dans Chrome, Edge et Firefox. L’option 5 propose aussi les sites de jeux d’argent et de rencontre.',
      ], note: 'Windows peut d’abord dire qu’il « a protégé votre PC ». Cliquez sur « Informations complémentaires », puis « Exécuter quand même ». Le script est du texte simple : vous pouvez l’ouvrir dans le Bloc-notes et lire chaque ligne.' },
      { h: 'Fiche', facts: [
        ['Fonctionne sur', 'Windows 10 et 11'], ['Comment', 'Ajoute les adresses d’IA au fichier hosts de Windows et utilise les stratégies officielles de Windows pour l’IA intégrée'],
        ['Annuler', 'Relancez-le et tapez 2 (4 pour l’IA intégrée)'], ['Nécessite', 'Droits administrateur une fois'], ['Prix', 'Gratuit'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'Bloquer l’IA sur Mac et Linux',
    desc: 'Script gratuit qui bloque ChatGPT et 150+ services d’IA dans tous les navigateurs et applis d’un Mac ou d’un ordinateur Linux.',
    h1: 'Une commande. L’IA coupée sur tout le Mac ou l’ordinateur Linux.',
    lead: 'Le script ajoute les adresses d’IA au fichier hosts du système, pour que chaque navigateur et appli de l’ordinateur soit couvert.',
    actions: [{ label: 'Télécharger pour Mac et Linux (498 Ko)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installer', steps: [
        'Décompressez le téléchargement.',
        'Ouvrez le Terminal dans le dossier décompressé.',
        L('Tapez <code>sudo sh mindveto.sh on</code> et votre mot de passe.'),
        L('Pour autoriser l’IA à nouveau : <code>sudo sh mindveto.sh off</code>.'),
        L('Filtre famille (sites porno et 18+, SafeSearch) : <code>sudo sh mindveto.sh family-on</code>, et <code>family-off</code> pour annuler. Il bloque aussi les sites de VPN, de proxy et de DNS sécurisé. Ajoutez <code>gambling dating</code> pour bloquer aussi ces sites.'),
      ], note: 'Donnez aux enfants un compte standard (pas administrateur). Ils ne pourront pas modifier le fichier hosts.' },
      { h: 'Fiche', facts: [
        ['Fonctionne sur', 'macOS, Ubuntu, Debian, Fedora et la plupart des systèmes Linux'], ['Annuler', 'Une commande'], ['Prix', 'Gratuit'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'Bloquer l’IA sur tout un réseau : DNS et pare-feu',
    desc: 'Listes gratuites et pack IT pour bloquer ChatGPT et 150+ services d’IA sur tout un réseau : Pi-hole, AdGuard, DNS, BIND, Squid, GPO.',
    h1: 'Bloquez l’IA pour chaque appareil du réseau.',
    lead: 'Pour les familles, écoles, bureaux et services publics. Utilisez nos listes gratuites avec le filtre que vous avez déjà, ou déployez le pack IT dès aujourd’hui.',
    actions: [{ label: 'Télécharger le pack IT (13 Ko)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Listes gratuites', p: ['Ajoutez une adresse à votre filtre. Les listes restent à la même adresse et sont mises à jour quand de nouveaux services d’IA apparaissent.'], facts: [
        ['Liste AdGuard / uBlock', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['Fichier hosts', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Domaines simples', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Où les utiliser', list: [
        'Routeur à la maison ou au bureau avec Pi-hole ou AdGuard Home : ajoutez la liste une fois, chaque appareil sur le Wi-Fi est couvert.',
        'Android et iPhone : un compte AdGuard DNS gratuit avec notre liste en règles utilisateur, puis DNS privé (Android) ou un profil (iPhone).',
        'Un ordinateur : ajoutez la liste hosts au fichier hosts (droits administrateur nécessaires).',
      ]},
      { h: 'Dans le pack IT', list: [
        'Stratégies Chrome et Edge (GPO, Intune, Google Admin) pour installer l’extension de force et bloquer les sites d’IA.',
        'Stratégie Firefox.',
        'Windows Server DNS (PowerShell), zone BIND RPZ, Unbound, dnsmasq.',
        'ACL pour proxy Squid et une liste pour pare-feu Palo Alto, Fortinet et Check Point.',
      ], note: 'Les listes DNS bloquent des domaines entiers. Quelques blocages au niveau de la page, comme Bing Chat, ne fonctionnent que dans l’extension de navigateur.' },
    ],
    faq: [
      { q: 'Pouvons-nous utiliser les listes à titre professionnel ?', a: L('Oui, au sein de votre propre organisation. Les revendre nécessite une autorisation écrite. Voir les <a href="/fr/conditions/">conditions</a>.') },
      { q: 'Aidez-vous au déploiement ?', a: L('Oui. Écrivez à <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> avec le nombre d’appareils et votre configuration.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Bouton examen : coupez l’IA pour votre classe',
    desc: 'Bouton examen gratuit : un geste bloque tous les chatbots IA dans les navigateurs de votre classe pendant un test. Sans compte, sans noms.',
    h1: 'Pas d’IA pendant le test.',
    lead: 'Un geste coupe tous les chatbots IA dans les navigateurs de votre classe, pendant toute la durée du test. Gratuit, sans compte, sans noms d’élèves.',
    blocks: [
      { h: 'Comment ça marche', steps: ['Créez une classe ici. Vous recevez un code de classe et un lien enseignant privé.', 'Les élèves ouvrent l’extension Mindveto, vont dans « Classe · mode examen » et tapent le code.', 'Touchez « Démarrer le mode examen ». En une minute, toute IA est bloquée dans leurs navigateurs, jusqu’à la fin du temps ou jusqu’à ce que vous arrêtiez.'] },
    ],
    faq: [
      { q: 'De quoi les élèves ont-ils besoin ?', a: L('De l’<a href="/fr/extension-navigateur/">extension Mindveto</a> dans leur navigateur, reliée à votre classe avec le code. Sur les ordinateurs de l’école, l’école l’installe une fois.') },
      { q: 'Que garde votre serveur ?', a: 'Un code de classe haché, une clé enseignant hachée et l’heure de fin de l’examen. Pas de noms, pas d’adresses e-mail, pas d’adresses IP.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Garde-collage : vos données privées hors des chats IA',
    desc: 'Mindveto avertit avant que des IBAN, numéros d’identité, listes d’e-mails ou textes confidentiels ne soient collés dans ChatGPT. Local.',
    h1: 'Un second regard avant de coller.',
    lead: 'On colle d’abord, on réfléchit ensuite. Sur les sites d’IA, le garde-collage vérifie ce que vous collez, sur votre propre ordinateur, et demande avant que des données privées n’arrivent dans le chat.',
    actions: [{ label: 'Obtenir l’extension', to: 'browser', solid: true }, { label: 'Pour les bureaux', to: 'offices' }],
    blocks: [
      { h: 'Ce qu’il repère', list: [
        'Numéros de compte (IBAN) et de carte.',
        'Numéros de registre national, de sécurité sociale et autres numéros d’identité.',
        'Listes d’adresses e-mail.',
        'Clés secrètes, mots de passe et jetons d’accès.',
        'Texte marqué « confidentiel », « confidential » ou « vertrouwelijk ».',
        'Vos propres mots privés : noms de clients, codes de projet, numéros de dossier.',
      ]},
      { h: 'Ce que vous pouvez choisir', steps: [
        'Ne pas coller.',
        'Coller sans les parties privées : elles sont remplacées par un repère.',
        'Coller quand même, si vous en êtes sûr.',
      ]},
      { h: 'Où se fait la vérification', p: [
        'Sur votre ordinateur, dans le navigateur. Le texte collé n’est jamais conservé ni envoyé, pas même à nous.',
      ], note: 'Il fonctionne sur les sites d’IA de chat, de recherche, de rédaction et de programmation. Il ne regarde pas vos e-mails, documents ou autres sites.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Télécharger Mindveto : navigateur, Android, Windows, Mac',
    desc: 'Téléchargez Mindveto gratuitement : extension, appli Android, scripts Windows et Mac/Linux, listes de blocage et pack IT. Sans compte.',
    h1: 'Télécharger Mindveto.',
    lead: 'Choisissez l’appareil à protéger. Tout est gratuit et sans compte.',
    blocks: [
      { h: 'Extension de navigateur', p: ['Chrome, Edge, Brave et Opera. Version 1.6.0, 735 Ko.'], actions: [{ label: 'Télécharger', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Étapes d’installation', to: 'browser' }] },
      { h: 'Appli Android (bêta)', p: ['Bloque l’IA dans toutes les applis. 389 Ko.'], actions: [{ label: 'Télécharger', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Étapes d’installation', to: 'android' }] },
      { h: 'Windows', p: ['Tous les navigateurs et applis du PC. 501 Ko.'], actions: [{ label: 'Télécharger', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Étapes d’installation', to: 'windows' }] },
      { h: 'Mac et Linux', p: ['Une commande, pour tout le système. 498 Ko.'], actions: [{ label: 'Télécharger', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Étapes d’installation', to: 'maclinux' }] },
      { h: 'Pack IT et listes', p: ['Fichiers DNS, pare-feu et stratégies de navigateur. 13 Ko.'], actions: [{ label: 'Télécharger', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Toutes les listes', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
  },

  pricing: {
    title: 'Tarifs Mindveto : Gratuit, Plus, École et Business',
    desc: 'Le blocage est gratuit. Plus 14,99 € par an pour les familles, 1 € par élève pour les écoles, 2,50 € par utilisateur et par mois pour les bureaux.',
    h1: 'Le blocage est gratuit. Les extras financent le travail.',
    lead: 'Aujourd’hui, toutes les fonctions sont gratuites pendant le lancement. Les formules payantes démarrent avec la version Google Play.',
    blocks: [],
    faq: [
      { q: 'Quand dois-je payer ?', a: 'Pas maintenant. Quand les formules payantes démarrent, vous choisissez vous-même de passer à une formule payante. Rien n’est débité automatiquement et la formule gratuite reste.' },
      { q: 'Y a-t-il une offre de lancement ?', a: 'Oui. Les 250 premières personnes qui installent l’appli Android depuis Google Play reçoivent Plus gratuitement pendant un an. Un compteur sur cette page indiquera les places restantes.' },
      { q: 'Les prix incluent-ils la TVA ?', a: 'Oui, les prix pour les particuliers incluent la TVA belge. Les écoles et entreprises reçoivent une facture.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Aide et questions fréquentes',
    desc: 'Réponses sur Mindveto : quelle version choisir, PIN, horaire, vie privée, désinstallation, et ce que Mindveto peut ou non bloquer.',
    h1: 'Aide',
    lead: 'Des réponses courtes aux questions les plus fréquentes. Votre question n’y est pas ? Écrivez à hello@mindveto.app.',
    blocks: [
      { h: 'Quelle version choisir ?', facts: [
        ['Le téléphone Android d’un enfant', L('<a href="/fr/android/">Appli Android</a>')],
        ['Un ordinateur familial ou de bureau', L('<a href="/fr/extension-navigateur/">Extension de navigateur</a>, plus <a href="/fr/windows/">Windows</a> ou <a href="/fr/mac-linux/">Mac</a> pour toutes les applis')],
        ['Les ordinateurs de l’école', L('<a href="/fr/extension-navigateur/">Extension</a> par stratégie de navigateur, plus le <a href="/fr/bouton-examen/">bouton examen</a>')],
        ['Chaque appareil à la maison ou au travail', L('<a href="/fr/reseau/">Listes réseau</a>')],
      ]},
    ],
    faq: [
      { q: 'J’ai oublié mon PIN.', a: 'Par sécurité, il n’y a pas de bouton de réinitialisation. Retirez l’extension sur la page des extensions du navigateur (il faut contrôler l’ordinateur) et réinstallez-la.' },
      { q: 'Un site normal est bloqué par erreur.', a: 'Ouvrez l’extension et ajoutez le site à votre liste d’autorisation. Envoyez-nous l’adresse, et nous corrigeons la liste publique.' },
      { q: 'Un outil d’IA n’est pas bloqué.', a: 'Ajoutez-le tout de suite à votre liste de blocage et envoyez-nous l’adresse. Nous ajoutons les nouveaux services d’IA à la liste publique.' },
      { q: 'Comment le désinstaller ?', a: 'Navigateur : retirez-le sur la page des extensions. Android : coupez-le, puis désinstallez l’appli. Windows : lancez le script et tapez 2. Mac et Linux : lancez le script avec « off ».' },
      { q: 'Mindveto utilise-t-il de l’IA ?', a: 'Non. Le blocage et le garde-collage utilisent des règles simples sur votre appareil.' },
      { q: 'Qui fait Mindveto ?', a: L('Amghar Said, un créateur indépendant. <a href="/fr/a-propos/">À propos</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'À propos de Mindveto',
    desc: 'Mindveto est créé par Amghar Said, créateur indépendant. Pourquoi un bouton d’arrêt de l’IA, comment nous protégeons votre vie privée.',
    h1: 'Chacun décide quand l’IA fait partie de sa journée.',
    lead: 'Mindveto est créé par Amghar Said, un créateur indépendant. Il a commencé en 2026 sous le nom Human Override et a reçu son propre nom en novembre 2026.',
    blocks: [
      { h: 'Qui le fait', p: [
        'Dans son métier, Amghar Said coordonne des séjours éducatifs pour adolescents. La technologie est sa passion depuis 30 ans, et Mindveto est un projet qu’il construit à côté de son travail.',
        L('Suivez-le ou écrivez-lui sur <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Pourquoi ce nom', p: [
        'Dans les années 1980, le chercheur Benjamin Libet a décrit comment notre esprit conscient peut arrêter une impulsion juste avant d’agir : un veto. Mindveto offre cette pause face à l’IA à qui la veut.',
      ]},
      { h: 'Nos promesses', list: [
        'Pas de compte, pas de pistage, pas de publicité, pas de vente de données.',
        'Des limites honnêtes, écrites sur les pages produits et pas en petits caractères.',
        'Le blocage reste gratuit.',
        'Site en 8 langues ; assistance par e-mail en anglais, néerlandais et français.',
      ]},
      { h: 'Si nous arrêtons un jour', p: [
        'Tout ce que vous avez installé continue de fonctionner : l’extension, l’appli et les scripts bloquent avec la liste déjà présente sur votre appareil. Vous pouvez toujours les retirer normalement.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Politique de confidentialité',
    desc: 'Mindveto ne collecte aucune donnée personnelle : pas de cookies, pas de traceurs, pas de comptes. Ce qui est traité, et vos droits RGPD.',
    h1: 'Politique de confidentialité',
    lead: 'En bref : nous ne collectons aucune donnée personnelle. Cette page explique les quelques éléments qui touchent un serveur, et vos droits. Version 2, 13 novembre 2026.',
    blocks: [
      { h: 'Responsable', p: [L('Amghar Said, Belgique. Contact : <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Ce site', list: [
        'Pas de cookies, pas de statistiques, pas de traceurs, pas de publicité, pas de polices ni de scripts d’autres entreprises.',
        'Le site est hébergé sur GitHub Pages (GitHub, Inc., États-Unis). Comme tout hébergeur, GitHub traite brièvement votre adresse IP dans ses journaux serveur pour livrer et protéger le site. Nous ne recevons pas ces journaux.',
        'La page du bouton examen conserve votre code de classe et votre clé enseignant dans votre propre navigateur (stockage local), uniquement pour que la page fonctionne. Vous les effacez avec « Oublier cette classe ».',
      ]},
      { h: 'Les applis et scripts', list: [
        'Le blocage, le garde-collage et tous les réglages fonctionnent sur votre appareil. Le texte collé n’est jamais conservé ni envoyé.',
        'L’extension de navigateur télécharge la liste publique une fois par jour. Elle n’envoie aucune donnée personnelle avec cette demande.',
        'L’appli Android filtre seulement les demandes de noms sur le téléphone. Elle ne nous envoie rien.',
        'Pour trouver les noms de sites, l’appli Android transmet les demandes non bloquées au serveur DNS que votre téléphone utilise déjà. S’il ne répond pas, elle utilise Cloudflare (1.1.1.1) ou Quad9 (9.9.9.9). Ces services voient le nom du site et votre adresse IP, comme pour toute demande DNS.',
      ]},
      { h: 'Mode examen', p: [
        'Quand un enseignant crée une classe, notre base de données (Supabase, Francfort, UE) conserve un code de classe haché, une clé enseignant hachée et l’heure de fin de l’examen. Les extensions de la classe n’envoient que le code de classe, une fois par minute. Pour éviter les abus, une version hachée de l’adresse IP est conservée une heure. Pas de noms, pas d’adresses e-mail.',
        'Base légale : notre intérêt légitime à offrir le bouton examen en sécurité (RGPD article 6.1.f).',
      ]},
      { h: 'E-mail', p: ['Si vous nous écrivez, nous utilisons votre message uniquement pour vous répondre, et le supprimons quand il n’est plus nécessaire.'] },
      { h: 'Vos droits', p: [
        L('Vous pouvez demander l’accès, la rectification ou l’effacement, et vous opposer. Écrivez à <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. Vous pouvez aussi porter plainte auprès de l’Autorité de protection des données belge (<a href="https://www.autoriteprotectiondonnees.be" rel="noopener">autoriteprotectiondonnees.be</a>) ou de l’autorité de votre pays.'),
      ]},
    ],
  },

  terms: {
    title: 'Conditions d’utilisation',
    desc: 'Conditions d’utilisation de Mindveto : ce qu’il fait ou non, votre responsabilité, absence de garantie, responsabilité limitée, droit belge.',
    h1: 'Conditions d’utilisation',
    lead: 'Mindveto est un logiciel créé par Amghar Said. Il aide à bloquer les services d’IA, mais aucun outil ne peut bloquer toute IA. Version 2, 12 novembre 2026. S’applique à l’extension, à l’appli Android, aux scripts Windows, Mac et Linux, aux listes et au pack IT.',
    blocks: [
      { h: '1. Qui le fournit', p: [L('Mindveto (anciennement Human Override) est créé par Amghar Said, qui en est propriétaire (« l’auteur »). Contact : <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Acceptation', p: ['En installant, téléchargeant ou utilisant Mindveto, vous acceptez ces conditions. Si vous n’êtes pas d’accord, ne l’utilisez pas et supprimez-le.'] },
      { h: '3. Ce qu’il fait et ne fait pas', p: ['Mindveto tente d’empêcher l’accès aux services d’IA en bloquant leurs adresses web. Il ne garantit pas qu’aucune IA ne soit accessible. Il ne peut pas bloquer l’IA intégrée aux services autorisés, l’IA fonctionnant hors ligne sur un appareil, les autres navigateurs, applis ou appareils, les VPN, proxys, autres services DNS, ni les nouveaux services d’IA pas encore listés. Toute personne ayant un accès suffisant à l’appareil peut modifier ou supprimer les réglages. Les listes peuvent bloquer un site par erreur ou en oublier un.'] },
      { h: '4. Votre responsabilité', p: ['Vous décidez où et comment utiliser Mindveto. Écoles, entreprises et autres organisations restent entièrement responsables de leurs propres règles, surveillance, sécurité, tests et du respect de la loi, y compris le droit de la vie privée et du travail. Testez-le avant de vous y fier. Ne l’utilisez pas pour enfreindre la loi ni pour surveiller des personnes sans base légale.'] },
      { h: '5. Fourni « tel quel »', p: ['Mindveto est fourni « tel quel » et « selon disponibilité », sans aucune garantie, expresse ou implicite, notamment d’adéquation à un usage particulier, d’exactitude, de disponibilité ou d’absence d’erreurs.'] },
      { h: '6. Limitation de responsabilité', p: ['Dans toute la mesure permise par la loi, Amghar Said n’est pas responsable des dommages directs ou indirects, pertes de données ou de revenus, pertes d’accès, blocages manqués, sites bloqués à tort ou de toute autre conséquence de l’utilisation ou de l’impossibilité d’utiliser Mindveto. Pour les formules payantes, la responsabilité totale est limitée au montant payé au cours des douze derniers mois. Rien dans ces conditions ne limite une responsabilité que la loi ne permet pas de limiter, par exemple en cas de dol ou de faute grave, ou les droits impératifs des consommateurs.'] },
      { h: '7. Propriété', p: ['Mindveto, son code, ses listes, icônes, textes et son nom sont © 2026 Amghar Said, tous droits réservés. Vous pouvez utiliser la version officielle non modifiée. Copier, modifier, redistribuer ou vendre nécessite une autorisation écrite.'] },
      { h: '8. Vie privée', p: [L('Mindveto ne collecte aucune donnée personnelle. Voir la <a href="/fr/confidentialite/">politique de confidentialité</a>.')] },
      { h: '9. Formules payantes', p: ['Les formules payantes, lorsqu’elles seront proposées, sont décrites sur la page des tarifs avant l’achat. Les achats via Google Play suivent aussi les conditions de Google Play. Les consommateurs de l’UE conservent leurs droits légaux, y compris le droit de rétractation lorsqu’il s’applique.'] },
      { h: '10. Modifications et fin', p: ['L’auteur peut modifier Mindveto, les listes ou ces conditions, ou cesser de le proposer. La version en vigueur est toujours sur cette page.'] },
      { h: '11. Droit applicable', p: ['Ces conditions sont régies par le droit belge, sans préjudice des règles impératives du pays où réside un consommateur.'] },
    ],
  },

  legal: {
    title: 'Mentions légales',
    desc: 'Mentions légales de Mindveto : qui publie le site et le logiciel, comment nous contacter, hébergement et propriété intellectuelle.',
    h1: 'Mentions légales',
    lead: 'Qui publie ce site et le logiciel Mindveto.',
    blocks: [
      { h: 'Éditeur', facts: [
        ['Nom', 'Amghar Said'], ['Pays', 'Belgique'], ['E-mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Numéro d’entreprise', COMPANY.kbo || 'Sera indiqué ici avant le début de toute formule payante'],
        ...(COMPANY.vat ? [['Numéro de TVA', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Adresse professionnelle', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hébergement', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.'] },
      { h: 'Propriété intellectuelle', p: ['© 2026 Amghar Said. Tous droits réservés. Les noms de produits comme ChatGPT, Gemini, Claude et Copilot appartiennent à leurs propriétaires et ne sont cités que pour décrire ce que bloque Mindveto. Mindveto n’y est pas affilié.', 'Police : Atkinson Hyperlegible Next, SIL Open Font License, servie depuis ce site. Dates des vacances scolaires : OpenHolidays API (ODbL).'] },
      { h: 'Sources et licences', p: [L('Vacances scolaires : données de l’API OpenHolidays, <a href="https://www.openholidaysapi.org/">openholidaysapi.org</a>, ODbL 1.0. Listes de blocage adultes et jeux d’argent : Sinfonietta/hostfiles, StevenBlack/hosts (clefspeare13) et bigdargon/hostsVN, licence MIT ; les mentions complètes accompagnent chaque téléchargement. Police : Atkinson Hyperlegible Next, Braille Institute, SIL Open Font License 1.1.')] },
    ],
  },
  guide: {
    title: 'Bloquer ChatGPT sur tout appareil (guide 2026)',
    desc: 'Bloquez ChatGPT dans Chrome, sur Windows, Mac, Android, iPhone ou tout le réseau Wi-Fi. Étapes gratuites par appareil, avec les limites honnêtes.',
    h1: 'Bloquer ChatGPT, sur chaque appareil.',
    lead: 'La réponse courte : bloquez l’adresse chatgpt.com (et chat.openai.com) dans le navigateur, sur l’ordinateur, sur le téléphone ou sur le routeur. Cette page montre la méthode gratuite pour chacun, et laquelle convient à votre situation.',
    actions: [{ label: 'Télécharger Mindveto gratuitement', to: 'download', solid: true }, { label: 'Quelle version me faut-il ?', to: 'help' }],
    blocks: [
      { h: 'Choisissez la méthode qui convient', facts: [
        ['Un navigateur (Chrome, Edge, Brave, Opera)', L('<a href="/fr/extension-navigateur/">Extension de navigateur</a> : un interrupteur, un PIN. Environ 1 minute.')],
        ['Tout un PC Windows, chaque navigateur et application', L('<a href="/fr/windows/">Téléchargement Windows</a> : ajoute les adresses d’IA au fichier hosts.')],
        ['Un Mac ou un ordinateur Linux', L('<a href="/fr/mac-linux/">Une commande</a> dans le Terminal.')],
        ['Un téléphone Android, aussi dans les applications', L('<a href="/fr/android/">Application Android</a> avec un filtre local et un PIN.')],
        ['Un iPhone', L('Un service DNS avec notre <a href="/fr/reseau/">liste gratuite</a>, ou Temps d’écran d’Apple pour des sites précis.')],
        ['Tous les appareils du Wi-Fi', L('<a href="/fr/reseau/">Listes réseau</a> pour Pi-hole, AdGuard Home ou le DNS de l’école ou du bureau.')],
      ]},
      { h: 'Bloquer ChatGPT dans Chrome ou Edge', steps: [
        L('Téléchargez l’<a href="/fr/extension-navigateur/">extension Mindveto</a> et décompressez-la.'),
        L('Ouvrez <code>chrome://extensions</code> (dans Edge : <code>edge://extensions</code>) et activez le « Mode développeur ».'),
        'Cliquez sur « Charger l’extension non empaquetée » et choisissez le dossier décompressé.',
        'Ouvrez Mindveto, basculez l’interrupteur et choisissez un PIN. ChatGPT, Gemini, Copilot et 150+ autres outils d’IA affichent maintenant une page de blocage.',
        'Sur la page « Détails » de l’extension, activez « Autoriser en mode navigation privée », sinon les fenêtres privées ne sont pas bloquées.',
      ]},
      { h: 'Bloquer ChatGPT sans logiciel', p: [
        L('Vous pouvez le faire à la main. Sur un ordinateur, ajoutez ces lignes au fichier hosts (droits d’administrateur nécessaires) : <code>0.0.0.0 chatgpt.com</code> et <code>0.0.0.0 chat.openai.com</code>. Sur un routeur avec Pi-hole ou AdGuard Home, ajoutez ces deux noms à la liste de blocage.'),
        L('Le problème : ChatGPT n’est qu’un outil parmi beaucoup. Gemini, Copilot, Claude, Character.AI et les autres restent ouverts, et de nouveaux apparaissent chaque semaine. C’est pourquoi Mindveto tient une <a href="/fr/reseau/">liste publique de 150+ services d’IA</a>, mise à jour chaque jour. Vous pouvez utiliser cette liste sans rien installer de chez nous.'),
      ]},
      { h: 'Les limites honnêtes de chaque méthode', list: [
        'Un blocage ne fonctionne que là où vous l’installez. Un enfant ou un collègue peut encore utiliser un autre téléphone ou un autre réseau.',
        'L’administrateur de l’appareil peut retirer un blocage. Donnez aux enfants et au personnel un compte normal (non administrateur).',
        'Les extensions de navigateur ne couvrent ni les autres navigateurs ni les applications. Pour cela, bloquez sur l’ordinateur, le téléphone ou le réseau.',
        'Les listes qui bloquent des domaines entiers ne peuvent pas bloquer une seule page. Quelques blocages au niveau de la page, comme Bing Chat, ne fonctionnent que dans l’extension.',
      ], note: 'Le blocage fonctionne mieux avec une règle claire : quand l’IA est-elle permise, et pourquoi pas maintenant. Mindveto ne lit rien et n’envoie rien ; il empêche seulement les adresses d’IA de s’ouvrir.', human: true },
    ],
    faq: [
      { q: 'Comment bloquer ChatGPT sur le téléphone de mon enfant ?', a: L('Sur Android : installez l’<a href="/fr/android/">application Mindveto</a>, activez « VPN permanent » et choisissez un PIN. Sur iPhone : utilisez un service DNS avec notre liste gratuite, ou Temps d’écran d’Apple pour bloquer chatgpt.com. Voir <a href="/fr/parents/">pour les parents</a>.') },
      { q: 'Comment bloquer ChatGPT sur les ordinateurs de l’école ?', a: L('Installez l’extension de force par stratégie Chrome ou Edge et bloquez l’IA sur le DNS de l’école avec le pack IT. Les enseignants peuvent aussi utiliser le <a href="/fr/bouton-examen/">bouton examen</a>. Voir <a href="/fr/ecoles/">pour les écoles</a>.') },
      { q: 'Comment bloquer ChatGPT au travail tout en autorisant Copilot ?', a: L('Dans l’extension, cochez l’IA que votre bureau approuve et laissez le reste bloqué. Le <a href="/fr/garde-collage/">garde-collage</a> avertit aussi avant que des données privées soient collées dans un site d’IA. Voir <a href="/fr/bureaux/">pour les bureaux</a>.') },
      { q: 'Bloquer ChatGPT, est-ce gratuit ?', a: 'Oui. Le blocage, le PIN et l’horaire sont gratuits dans Mindveto, et les listes de blocage sont gratuites.' },
      { q: 'Puis-je bloquer ChatGPT seulement pendant les devoirs ou les heures de travail ?', a: 'Oui. L’extension a un horaire, avec les vacances scolaires de Belgique, des Pays-Bas et de France intégrées.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Modèle gratuit de politique IA pour petits bureaux',
    desc: 'Une politique IA d’une page pour comptables, avocats et autres petits bureaux : outils approuvés, ce qui n’entre jamais dans l’IA et comment le suivre.',
    h1: 'Une politique IA que votre équipe lit en deux minutes.',
    lead: 'Un modèle d’une page pour comptables, avocats, notaires et autres petits bureaux. Copiez-le, complétez les parties entre crochets et partagez-le avec votre équipe.',
    actions: [{ label: 'Imprimer ou enregistrer en PDF', url: '#print', solid: true }, { label: 'Pour les bureaux', to: 'offices' }],
    blocks: [
      { h: 'Pourquoi en avoir une', p: ['Depuis le 2 février 2025, le règlement européen sur l’IA demande aux organisations qui utilisent des outils d’IA d’aider leur personnel à les comprendre (maîtrise de l’IA). Une courte politique écrite est un premier pas simple, et elle protège les données de vos clients.'] },
      { h: '1. Objectif', p: ['Nous utilisons l’IA quand elle améliore notre travail. Les données clients et les dossiers confidentiels restent protégés. Cette politique dit quels outils nous utilisons et ce qui n’y entre jamais.'] },
      { h: '2. Outils d’IA approuvés', list: ['[Outil, par exemple Microsoft Copilot avec notre compte professionnel] : autorisé pour [rédiger, résumer nos propres textes].', 'Les autres chatbots, moteurs de recherche et outils de rédaction IA ne sont pas utilisés sur les appareils de travail ni pour le travail.'] },
      { h: '3. Jamais dans un outil d’IA', list: ['Des noms de clients avec leurs données.', 'Des numéros de compte et de carte.', 'Des numéros de registre national, de sécurité sociale ou d’identité.', 'Des contrats, déclarations fiscales, dossiers médicaux ou RH.', 'Des mots de passe, codes d’accès et clés.', 'Tout ce qui est marqué confidentiel.'] },
      { h: '4. Avant d’utiliser un résultat d’IA', list: ['Vérifiez vous-même les faits, chiffres et sources.', 'Une personne valide chaque avis ou lettre envoyé à un client.', 'Indiquez que l’IA a aidé si un client le demande, ou si la loi ou vos règles professionnelles l’exigent.'] },
      { h: '5. Comment nous le respectons', list: ['Sur les ordinateurs de travail, Mindveto bloque les outils d’IA non approuvés et avertit avant que des données privées soient collées dans un chat IA. La vérification se fait sur l’ordinateur ; rien n’est envoyé.', 'Les réglages sont verrouillés par un PIN géré par [nom].'] },
      { h: '6. Erreurs et questions', p: ['Vous avez collé quelque chose par erreur ? Signalez-le à [nom] le jour même. Mieux vaut le savoir tôt que tard.', 'Responsable de cette politique : [nom]. Dernière révision : [date]. Prochaine révision : [date plus six mois].'], note: 'Ce modèle vous aide à démarrer ; ce n’est pas un avis juridique. Vérifiez vos règles professionnelles et informez le personnel avant d’introduire de nouvelles règles IT.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Bloquer les sites porno, de jeux et de rencontre", "desc": "Filtre famille gratuit : bloquez les sites porno et 18+, les jeux d’argent et les rencontres, imposez SafeSearch. Navigateur, Android, Windows, Mac.", "h1": "Bloquez les sites porno, de jeux d’argent et de rencontre.", "lead": "Mindveto a un filtre famille à côté de l’interrupteur IA. Vous choisissez ce qu’il bloque, et un PIN garde votre choix. Il est désactivé tant que vous ne l’activez pas.", "actions": [{"label": "Télécharger gratuitement", "to": "download", "solid": true}, {"label": "Pour les parents", "to": "parents"}], "blocks": [{"h": "Ce que vous pouvez activer", "list": ["Sites pour adultes : plus de 60 000 sites porno et 18+.", "SafeSearch : Google, Bing, DuckDuckGo et YouTube ne montrent que des résultats sûrs, quels que soient les réglages de recherche.", "Jeux d’argent : 1 600 sites de paris, de casino et de poker.", "Rencontres : 65 applis de rencontre et sites de chat vidéo aléatoire.", "Anti-contournement : les sites connus de VPN, de proxy et de Tor, pour que le filtre ne soit pas contourné en un clic.", "Chaque partie a son propre interrupteur. Elle fonctionne séparément de l’interrupteur IA."]}, {"h": "Comment l’activer", "steps": ["Navigateur : installez l’<a href=\"/fr/extension-navigateur/\">extension de navigateur</a>, ouvrez-la et cochez ce que vous voulez sous « Filtre familial ».", "Android : installez l’<a href=\"/fr/android/\">appli Android</a> et utilisez les interrupteurs sous « Filtre familial ». Il fonctionne alors dans toutes les applis du téléphone.", "Windows : lancez le <a href=\"/fr/windows/\">téléchargement Windows</a> et tapez 5. Le script propose les jeux d’argent et les rencontres.", "Mac et Linux : utilisez le <a href=\"/fr/mac-linux/\">téléchargement Mac et Linux</a> et tapez <code>sudo sh mindveto.sh family-on gambling dating</code>.", "Dans l’extension et l’appli, définissez un PIN : couper le filtre demande alors le PIN. Sur un ordinateur, donnez à votre enfant un compte normal (non administrateur)."]}, {"h": "Limites honnêtes", "list": ["Aucun filtre ne bloque tout. De nouveaux sites apparaissent chaque jour, et des images peuvent encore apparaître dans les chats, les applis et les réseaux sociaux.", "Les listes arrêtent les sites connus. Un enfant avec le téléphone d’un ami ou un compte administrateur peut les contourner.", "Sur Android, le filtre fonctionne tant que Mindveto est actif. Activez « VPN permanent » pour qu’il le reste."], "note": "Mindveto n’enregistre pas les sites visités et ne nous envoie rien. Un filtre aide ; parler avec votre enfant aide davantage.", "human": true}, {"h": "En bref", "facts": [["Prix", "Gratuit"], ["Sites pour adultes", "60 000+"], ["Sites de jeux d’argent", "1 600"], ["Rencontres et chat vidéo", "65"], ["Listes", "Listes ouvertes (licence MIT) et nos propres listes"], ["Données envoyées", "Aucune"]]}], "faq": [{"q": "Le filtre famille est-il gratuit ?", "a": "Oui. Il fait partie des téléchargements gratuits de Mindveto aujourd’hui."}, {"q": "Bloque-t-il aussi l’IA ?", "a": "Seulement si vous le voulez. L’interrupteur IA et le filtre famille fonctionnent séparément : vous pouvez utiliser l’un sans l’autre."}, {"q": "Fonctionne-t-il sur iPhone ou sur tout le Wi-Fi ?", "a": "Il n’y a pas encore d’appli iPhone. Vous pouvez utiliser les mêmes listes gratuites dans un filtre DNS comme AdGuard Home ou Pi-hole : voir <a href=\"/fr/reseau/\">tout le réseau</a>."}, {"q": "Peut-il bloquer un site normal par erreur ?", "a": "Cela peut arriver avec toute liste. Dans l’extension, vous pouvez autoriser un site de confiance ; votre choix passe avant le filtre."}], "related": ["parents", "browser", "android"]},
};
