import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// French content uses the French page paths in links. Non-breaking spaces before % and inside numbers.
export const LK: Linkable = {
  ui: {
    checked: 'Dernière vérification', cite: 'Comment citer cette page', src: 'Source',
    statsT: 'Enfants, écoles et IA : les chiffres', statsD: '24 chiffres vérifiés avec leur source, libres de citation.',
    gdprT: 'ChatGPT et données clients', gdprD: 'Ce que le RGPD implique pour votre bureau, et un plan en 5 étapes.',
  },
  pages: {
    stats: {
      title: 'Enfants, écoles et IA : les chiffres (2026)',
      desc: '24 statistiques vérifiées sur les enfants, les ados, l’école et l’IA : chatbots, compagnons IA, triche, deepfakes, fuites de données. Avec source et lien.',
      h1: 'Enfants, écoles et IA : les chiffres (2026).',
      lead: '24 chiffres sur la façon dont les enfants, les étudiants et les salariés utilisent l’IA, et sur ce qui tourne mal. Chaque chiffre renvoie à sa source d’origine et a été vérifié le jour même. Libre de citation.',
      blocks: [
        { h: 'Enfants et ados : chatbots et compagnons IA', stats: [
          st('64 %', 'des ados américains de 13 à 17 ans disent utiliser des chatbots IA.', 'pew1'),
          st('Environ 3 sur 10', 'ados américains utilisent des chatbots IA chaque jour, dont 16 % plusieurs fois par jour ou presque en continu.', 'pew1'),
          st('59 %', 'des ados américains utilisent ChatGPT, de loin le chatbot le plus utilisé par les ados.', 'pew1'),
          st('72 %', 'des ados américains de 13 à 17 ans ont déjà utilisé un compagnon IA. Plus de la moitié en utilisent au moins quelques fois par mois.', 'csm'),
          st('Environ 1 sur 3', 'ados américains trouvent les conversations avec un compagnon IA aussi satisfaisantes, voire plus, que celles avec de vrais amis.', 'csm'),
          st('Environ 1 sur 3', 'ados américains qui utilisent des compagnons IA ont préféré parler d’un sujet important ou grave avec un compagnon IA plutôt qu’avec une vraie personne.', 'csm'),
          st('12 %', 'des ados américains ont utilisé des chatbots pour obtenir un soutien émotionnel ou des conseils.', 'pew2'),
          st('63,8 %', 'des 16-24 ans de l’UE ont utilisé des outils d’IA générative en 2025, presque deux fois plus que l’ensemble des adultes de 16 à 74 ans (32,7 %).', 'eu1'),
        ] },
        { h: 'École : devoirs, études et triche', stats: [
          st('54 %', 'des ados américains ont utilisé des chatbots pour se faire aider dans leur travail scolaire.', 'pew2'),
          st('59 %', 'des ados américains pensent que les élèves de leur école trichent avec l’IA au moins assez souvent.', 'pew2'),
          st('26 %', 'des ados américains ont utilisé ChatGPT pour leurs devoirs en 2024, deux fois plus qu’en 2023 (13 %).', 'pew3'),
          st('39,3 %', 'des 16-24 ans de l’UE ont utilisé l’IA générative pour leurs études en 2025, contre 9,4 % de l’ensemble des adultes.', 'eu1'),
          st('94 %', 'des étudiants de licence à temps plein au Royaume-Uni utilisent l’IA générative pour les travaux notés.', 'hepi'),
        ] },
        { h: 'Deepfakes, faux nus et fausses voix', stats: [
          st('1 sur 8', 'jeunes de 13 à 20 ans connaît personnellement quelqu’un visé par des « deepfake nudes » (faux nus).', 'thorn'),
          st('1 sur 5', 'ados croyait qu’il était légal de créer de faux nus d’une autre personne, y compris d’un autre mineur.', 'thorn'),
          st('34 %', 'des jeunes victimes de faux nus en ont parlé à un parent, alors que 62 % des non-victimes disaient qu’elles le feraient.', 'thorn'),
          st('73 %', 'c’est le taux de fausses voix créées par IA correctement repérées par les auditeurs, lors d’un test avec 529 personnes en anglais et en mandarin.', 'plos'),
          st('3 440', 'vidéos d’abus sexuels sur enfants créées par IA ont été trouvées par l’Internet Watch Foundation en 2025, contre 13 en 2024.', 'iwf'),
        ] },
        { h: 'Travail : usage de l’IA et fuites de données', stats: [
          st('58 %', 'des salariés utilisent volontairement l’IA au travail de façon régulière (enquête auprès de 48 340 personnes dans 47 pays).', 'kpmg'),
          st('48 %', 'des salariés disent avoir mis des informations de l’entreprise, comme des données financières, commerciales ou clients, dans des outils d’IA publics.', 'kpmg'),
          st('20,0 %', 'des entreprises de l’UE de 10 salariés ou plus utilisaient l’IA en 2025, contre 13,5 % en 2024.', 'eu2'),
          st('13 %', 'des organisations ont signalé une violation de modèles ou d’applications d’IA. Parmi elles, 97 % n’avaient aucun contrôle d’accès pour l’IA.', 'ibm'),
          st('1 sur 5', 'organisations a signalé une violation due au « shadow AI » : des outils d’IA utilisés par le personnel sans autorisation. Celles qui en avaient beaucoup ont payé en moyenne 670 000 dollars de plus par violation.', 'ibm'),
          st('15 millions €', 'd’amende pour OpenAI infligée par l’autorité italienne de protection des données au sujet de ChatGPT, notamment pour un entraînement sur des données personnelles sans base légale adéquate.', 'gar'),
        ] },
        { h: 'À propos de ces chiffres', p: [
          'Nous avons ouvert chaque source et vérifié chaque chiffre le 22 novembre 2026. Les chiffres que nous n’avons pas pu vérifier ce jour-là ne figurent pas ici.',
          'Les études diffèrent par pays, tranche d’âge et méthode. Ne les additionnez pas et ne les comparez pas comme s’il s’agissait d’une seule enquête. La plupart des enquêtes sur les enfants citées ici viennent des États-Unis, du Royaume-Uni et de l’UE.',
        ] },
        { h: 'Ce que vous pouvez faire', list: [
          'Parents : <a href="/fr/parents/">Mindveto pour les parents</a> et <a href="/fr/blog/character-ai-est-il-sur-pour-les-enfants/">Character.AI est-il sûr pour les enfants ?</a>',
          'Écoles : <a href="/fr/ecoles/">Mindveto pour les écoles</a>, le <a href="/fr/bouton-examen/">bouton examen</a> et <a href="/fr/blog/ai-act-article-4-ecoles/">l’article 4 de l’AI Act pour les écoles</a>.',
          'Deepfakes et arnaques : le <a href="/fr/quiz-hameconnage-ia/">quiz hameçonnage IA</a>, <a href="/fr/verifier-un-lien/">Ce lien est-il sûr ?</a> et le <a href="/fr/bloquer-porno/">filtre familial gratuit</a>.',
          'Bureaux : le <a href="/fr/garde-collage/">garde-collage</a> et <a href="/fr/blog/chatgpt-donnees-clients-rgpd/">ChatGPT et les données clients sous le RGPD</a>.',
        ] },
      ],
      faq: [
        { q: 'Combien d’ados utilisent des chatbots IA ?', a: 'Aux États-Unis, 64 % des ados de 13 à 17 ans disent utiliser des chatbots IA, et environ trois sur dix les utilisent chaque jour (Pew Research Center, décembre 2025).' },
        { q: 'Les élèves trichent-ils avec l’IA ?', a: '59 % des ados américains pensent que les élèves de leur école trichent avec l’IA au moins assez souvent (Pew Research Center, 2026). Au Royaume-Uni, 94 % des étudiants de licence utilisent l’IA générative pour les travaux notés, ce qui n’est pas toujours de la triche (HEPI, 2026).' },
        { q: 'Puis-je utiliser ces chiffres ?', a: 'Oui. Citez-les avec un lien vers cette page et nommez la source d’origine. Chaque chiffre a son propre lien : ajoutez #s1 à #s24 à l’adresse de la page.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, « Enfants, écoles et IA : les chiffres (2026) », https://mindveto.app/fr/statistiques-ia/, dernière vérification le 22 novembre 2026. Si vous citez un seul chiffre, nommez aussi sa source d’origine, indiquée sous le chiffre.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT et données clients : ce que dit le RGPD (2026)',
      desc: 'Votre bureau peut-il coller des données clients dans ChatGPT ? Ce qu’OpenAI en fait, ce qu’attendent le RGPD et les autorités, et un plan en 5 étapes.',
      h1: 'ChatGPT et données clients : ce que le RGPD implique pour votre bureau.',
      lead: 'Réponse courte : ne collez pas de données clients dans un compte ChatGPT personnel. Selon le RGPD, votre bureau reste responsable de ces données, et avec Free, Plus et Pro les conversations peuvent servir à entraîner les modèles d’OpenAI, sauf si c’est désactivé. Si votre équipe a besoin d’IA, prenez une offre professionnelle avec un accord de traitement des données, fixez des règles claires et ajoutez un contrôle avant chaque collage.',
      blocks: [
        { h: 'Ce que devient ce que vous collez', list: [
          'ChatGPT Free, Plus et Pro : le réglage « Improve the model for everyone » est activé par défaut, donc les conversations peuvent servir à entraîner les modèles d’OpenAI. Chaque utilisateur peut le désactiver dans Settings, Data controls.',
          'Désactiver l’entraînement ne supprime pas les conversations enregistrées. Elles restent sur les serveurs d’OpenAI.',
          'Les discussions temporaires ne servent pas à l’entraînement, mais peuvent être conservées jusqu’à 30 jours pour des raisons de sécurité.',
          'ChatGPT Business, Enterprise, Edu et l’API : OpenAI dit ne pas entraîner ses modèles sur ces données professionnelles par défaut, et propose un accord de traitement des données (Data Processing Addendum) pour Business, Enterprise et l’API.',
        ] },
        { h: 'Ce que le RGPD attend de votre bureau', list: [
          'Votre bureau décide pourquoi et comment les données clients sont utilisées : il en est donc responsable.',
          'Un service qui traite des données personnelles pour vous doit avoir un accord écrit avec vous. Selon l’accord d’OpenAI, OpenAI agit alors comme sous-traitant ; pour les clients de l’EEE, le contrat est conclu avec OpenAI Ireland.',
          'Partagez le moins possible. La plupart des tâches, comme un brouillon, un résumé ou une traduction, marchent aussi bien sans noms, numéros de compte ou numéros d’identité.',
          'Si des données personnelles se retrouvent là où elles ne devraient pas, il peut s’agir d’une violation de données. L’autorité néerlandaise rappelle qu’une violation doit être notifiée dans les 72 heures après en avoir pris connaissance, et qu’une fuite via un chatbot doit dans de nombreux cas être notifiée.',
        ] },
        { h: 'Ça arrive déjà', list: [
          'En août 2024, l’autorité néerlandaise de protection des données a fait état de plusieurs notifications de violations de données causées par des chatbots IA. Dans un cas, un membre du personnel d’un cabinet de médecine générale avait saisi des données médicales de patients dans un chatbot. Dans un autre, un membre du personnel d’un opérateur télécom y avait mis un fichier d’adresses de clients.',
          'Dans le monde, 48 % des salariés disent avoir mis des informations de l’entreprise, comme des données financières, commerciales ou clients, dans des outils d’IA publics (University of Melbourne et KPMG, 2025).',
          'Une organisation sur cinq a signalé une violation due au « shadow AI », c’est-à-dire des outils d’IA utilisés par le personnel sans autorisation (IBM, 2025).',
          'En décembre 2024, l’autorité italienne de protection des données a infligé à OpenAI une amende de 15 millions d’euros au sujet de ChatGPT, notamment pour un entraînement sur des données personnelles sans base légale adéquate.',
        ], note: 'Plus de chiffres avec leurs sources : <a href="/fr/statistiques-ia/">Enfants, écoles et IA : les chiffres (2026)</a>.' },
        { h: 'Un plan en 5 étapes pour un petit bureau', steps: [
          'Décidez quel outil d’IA est autorisé, de préférence une offre professionnelle avec un accord de traitement des données, et arrêtez les comptes personnels pour le travail client. Écrivez-le avec notre <a href="/fr/modele-politique-ia/">modèle de politique IA</a> gratuit.',
          'Listez ce qui n’entre jamais dans un outil d’IA : noms de clients avec leurs données, numéros de compte et d’identité, dossiers médicaux et RH, contrats, mots de passe.',
          'Montrez à l’équipe comment retirer d’abord les noms et les numéros. La réponse est en général tout aussi utile.',
          'Ajoutez un contrôle au moment du collage. Le <a href="/fr/garde-collage/">garde-collage</a> de Mindveto avertit avant que des IBAN, numéros d’identité, listes d’e-mails ou textes marqués « confidentiel » n’entrent dans un chat IA, et peut bloquer les outils d’IA que votre bureau n’a pas approuvés.',
          'Convenez de ce qui se passe après une erreur : prévenir une personne désignée le jour même, noter ce qui a été collé et où, supprimer la conversation et vérifier s’il faut la notifier à l’autorité de protection des données.',
        ] },
        { h: 'Où Mindveto aide, et où il n’aide pas', list: [
          'Le garde-collage vérifie sur l’ordinateur lui-même. Le texte collé n’est jamais enregistré ni envoyé, pas même à nous.',
          'Il fonctionne dans le navigateur où l’extension est installée. Il ne contrôle pas les e-mails, les documents ni les applications de bureau.',
          'Mindveto ne rend pas à lui seul votre bureau conforme au RGPD. Les règles, l’accord avec votre fournisseur d’IA et la formation de l’équipe restent votre part.',
        ], note: 'Cet article est une information générale, pas un avis juridique. Consultez aussi les recommandations de votre autorité nationale de protection des données.' },
      ],
      faq: [
        { q: 'Peut-on utiliser ChatGPT au travail sous le RGPD ?', a: 'Ce n’est pas interdit en soi. Tout dépend des données utilisées et des conditions. Gardez les données personnelles hors des comptes personnels et, pour le travail client, utilisez une offre professionnelle avec un accord de traitement des données et des règles claires.' },
        { q: 'ChatGPT apprend-il de ce que nous collons ?', a: 'Avec Free, Plus et Pro, les conversations peuvent servir à l’entraînement sauf si « Improve the model for everyone » est désactivé. Avec Business, Enterprise, Edu et l’API, OpenAI dit ne pas entraîner ses modèles sur vos données par défaut.' },
        { q: 'Un membre de l’équipe a collé des données clients. Que faire ?', a: 'Notez ce qui a été collé, quand et où, puis supprimez la conversation. Vérifiez ensuite s’il s’agit d’une violation de données à notifier. Aux Pays-Bas, c’est dans les 72 heures après en avoir pris connaissance.' },
        { q: 'Mindveto voit-il ce que nous collons ?', a: 'Non. Le garde-collage vérifie sur l’ordinateur lui-même. Le texte collé n’est jamais enregistré ni envoyé.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};
