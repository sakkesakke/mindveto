import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Questions à l’élève : sur son propre texte',
      desc: 'Collez le texte d’un élève : cinq questions auxquelles seul le vrai auteur répond facilement. Pas de verdict IA, une discussion décide. 5 textes gratuits.',
      h1: 'Questions à l’élève sur son texte.',
      lead: 'Vous doutez qu’un élève ait écrit son texte lui-même ? Ne devinez pas. Collez le texte ici et recevez cinq questions sur des choix concrets du texte. Qui l’a écrit répond facilement. Qui ne l’a pas écrit a du mal. Vous décidez après une courte discussion.',
      blocks: [
        { h: 'Comment ça marche', steps: [
          'Demandez un code gratuit par e-mail à hello@mindveto.app. Il donne droit à 5 textes par mois.',
          'Collez le texte de l’élève (300 à 6 000 caractères) et choisissez la langue des questions.',
          'Attendez 1 à 2 minutes. Un modèle d’IA ouvert sur le serveur de Mindveto écrit cinq questions.',
          'Posez les questions lors d’une courte discussion, et écoutez comment l’élève explique ses choix.',
        ]},
        { h: 'À quoi ressemblent les questions', list: [
          'Sur un exemple, un mot ou une source précis du texte, avec une courte citation.',
          'Ce que veut dire une phrase, avec les mots de l’élève.',
          'Ce que l’élève changerait, et pourquoi.',
        ]},
        { h: 'Limites honnêtes', list: [
          'Les questions ne sont ni un test ni un verdict. Rien sur cette page ne dit si l’IA a été utilisée.',
          'Un modèle ouvert fait parfois une question faible ou étrange. Passez-la.',
          'Un élève qui a bien étudié un texte peut répondre sans l’avoir écrit. Utilisez les questions avec la trace d’écriture et ce que vous savez de l’élève.',
          'Retirez les noms et autres données personnelles du texte avant de le coller.',
        ], note: 'C’est la discussion qui décide, pas cette page.', human: true },
        { h: 'Vie privée', p: [
          'Le texte va uniquement au serveur de Mindveto ({region}) pour créer les questions, puis il est effacé aussitôt. Il n’est ni conservé, ni journalisé, ni utilisé pour entraîner un modèle. Aucun service d’IA externe ne le voit. Nous gardons seulement votre code, rendu illisible, et le nombre de textes utilisés ce mois-ci.',
        ]},
      ],
      faq: [
        { q: 'Est-ce un détecteur d’IA ?', a: 'Non. Il ne juge pas le texte. Il vous donne des questions pour parler de faits avec l’élève.' },
        { q: 'Pourquoi cela prend-il une ou deux minutes ?', a: 'Le modèle tourne sur notre propre serveur sans matériel coûteux, pour que votre texte n’aille jamais vers un service d’IA externe. C’est donc plus lent.' },
        { q: 'Et si j’ai besoin de plus de 5 textes par mois ?', a: 'Écrivez à hello@mindveto.app. Les écoles peuvent obtenir une formule plus grande.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Votre code', codeHelp: 'Pas encore de code ? Demandez un code gratuit (5 textes par mois) :', mailSub: 'Code gratuit pour Questions à l’élève',
    textL: 'Texte de l’élève', langL: 'Langue des questions', count: '{n} / {max} caractères',
    pv: 'Le texte est envoyé uniquement au serveur de Mindveto pour créer les questions, puis effacé aussitôt.',
    btn: 'Créer les questions', wait: 'Création des questions… cela prend 1 à 2 minutes. Gardez cette page ouverte.',
    resH: 'Questions pour la discussion', about: 'Sur :', used: '{used} textes sur {limit} utilisés ce mois-ci.',
    copy: 'Copier les questions', copied: 'Copié.', note: 'Passez une question qui ne convient pas. C’est la discussion qui décide, pas cette page.',
    eCode: 'Ce code n’est pas valable. Vérifiez-le, ou écrivez à hello@mindveto.app.', eShort: 'Le texte est trop court : au moins {min} caractères.',
    eLong: 'Le texte est trop long : au maximum {max} caractères.', eLimit: 'Vous avez utilisé vos {limit} textes de ce mois. Écrivez à hello@mindveto.app pour en avoir plus.',
    eBusy: 'Le serveur est occupé. Réessayez dans quelques minutes.', eTime: 'Cela a pris trop de temps. Réessayez, ou avec un texte plus court.',
    eNet: 'Le serveur est injoignable pour le moment. Réessayez plus tard.', eModel: 'Un problème est survenu pendant la création des questions. Réessayez.',
  },
};
