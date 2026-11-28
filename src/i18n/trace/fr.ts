import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Trace d’écriture : voir comment un texte est né',
      desc: 'Les élèves écrivent dans le navigateur et rendent une trace de la façon dont le texte a grandi : tapé, collé, temps passé. Des faits, pas une devinette IA.',
      h1: 'Trace d’écriture : comment ce texte est-il né ?',
      lead: 'Les détecteurs d’IA devinent, et se trompent souvent. Une trace d’écriture montre des faits : combien de temps l’élève a travaillé, ce qui a été tapé et ce qui a été collé. L’élève écrit sur cette page, télécharge la trace et la rend. Tout reste sur l’appareil.',
      blocks: [
        { h: 'Comment ça marche', steps: [
          'L’élève ouvre cette page et choisit « Je suis élève ».',
          'Il écrit le devoir dans la zone de texte. La page note, sur son propre appareil, quand du texte est tapé, collé ou effacé.',
          'Une fois fini, il clique sur « Terminer et télécharger la trace » et rend le fichier avec le texte.',
          'L’enseignant ouvre cette page, choisit « Je suis enseignant » et ouvre le fichier.',
        ]},
        { h: 'Ce que voit l’enseignant', list: [
          'Le temps total et le temps d’écriture réel.',
          'Ce qui a été tapé et ce qui a été collé, avec chaque collage listé.',
          'Combien de fois l’élève a quitté la page, et pendant combien de temps.',
          'Un graphique du texte qui grandit, et une relecture de l’écriture.',
        ]},
        { h: 'Limites honnêtes', list: [
          'Une trace n’est pas une preuve d’usage de l’IA, et cette page ne dit jamais « IA ». Elle montre comment un texte est né. La discussion avec l’élève décide.',
          'Un élève peut recopier un texte d’IA à la main, ou modifier le fichier. Une trace rend la triche plus pénible, pas impossible.',
          'Coller est souvent normal : une citation, ses propres notes, une phrase d’un brouillon.',
          'Elle ne note que ce qui est écrit sur cette page, pas le travail fait ailleurs.',
        ], note: 'Utilisez-la avec une courte discussion : demandez à l’élève d’expliquer un choix dans son texte.', human: true },
        { h: 'Vie privée', p: [
          'Pas de compte, pas de cookies, pas de traceurs. La page ne peut rien envoyer : le texte et la trace restent sur l’appareil. Le brouillon est gardé dans ce navigateur, pour ne rien perdre en rechargeant. Le fichier n’est partagé que quand l’élève le rend.',
        ]},
      ],
      faq: [
        { q: 'Est-ce que cela détecte ChatGPT ?', a: 'Non. Aucun outil ne distingue de façon fiable un texte d’IA d’un texte humain, et les détecteurs signalent souvent les élèves qui écrivent dans une deuxième langue. Une trace montre comment le texte est né, pour parler de faits.' },
        { q: 'Est-ce gratuit ?', a: 'Oui. Cela fonctionne dans le navigateur, sans compte.' },
        { q: 'Les élèves voient-ils ce qui est noté ?', a: 'Oui. Avant de rendre, ils peuvent ouvrir leur propre fichier dans la vue enseignant et voir exactement la même chose.' },
      ],
      related: ['ask', 'exam', 'schools'],
    },
  },
  ui: {
    nav: 'Trace d’écriture',
    group: 'Qui êtes-vous ?', modeS: 'Je suis élève : écrire', modeT: 'Je suis enseignant : ouvrir une trace',
    pv: 'Ton écriture est notée sur cet appareil uniquement : quand tu tapes, colles ou effaces. Rien n’est envoyé.',
    nameL: 'Ton nom', taskL: 'Devoir', textL: 'Ton texte',
    info: '{n} caractères · {m} min · enregistré sur cet appareil',
    done: 'Terminer et télécharger la trace', newB: 'Commencer un nouveau texte', confirmNew: 'Effacer ce texte et sa trace de cet appareil et recommencer ?',
    hand: 'Rends le fichier téléchargé avec ton texte, comme le demande ton enseignant.',
    empty: 'Écris d’abord quelque chose.',
    fileL: 'Ouvrir un fichier de trace (.json)', pvT: 'Le fichier est ouvert sur cet appareil. Rien n’est envoyé.',
    bad: 'Ce fichier n’est pas une trace d’écriture Mindveto.',
    who: '{name} · {task}', started: 'Commencé le {d}',
    sumH: 'Faits', kTime: 'Temps total', kActive: 'Temps d’écriture réel', kChars: 'Caractères dans le texte final',
    kTyped: 'Tapé', kPasted: 'Collé', kPastes: 'Nombre de collages', kAway: 'Page quittée', kDel: 'Effacé', kSpeed: 'Rythme d’écriture',
    min: '{n} min', chars: '{n} caractères', pace: '{n} caractères par minute d’écriture', away: '{n} fois, {m} min au total',
    sigH: 'À discuter', sigNone: 'Rien d’inhabituel dans cette trace.',
    sBig: 'Un grand morceau a été collé : {n} caractères à {t}.', sShare: '{p} % de tous les caractères ajoutés ont été collés.',
    sPace: 'Beaucoup de texte pour le temps : {n} caractères par minute d’écriture.', sAway: 'La page a été quittée {n} fois ({m} min au total).',
    sWipe: 'Juste avant un grand collage, {n} caractères du texte ont été effacés.', sAwayP: 'L’élève est revenu sur la page {s} secondes avant un grand collage.',
    sNoDel: 'Presque aucune correction : {n} caractères effacés.',
    sigNote: 'Ce sont des faits sur la façon dont le texte est né, pas une preuve d’usage de l’IA. Demandez à l’élève d’expliquer son texte.',
    pasteH: 'Collages', pasteRow: '{t} · {n} caractères',
    chartH: 'Longueur du texte dans le temps', chartAlt: 'Graphique de la longueur du texte sur {m} minutes. Les collages sont marqués d’un point.',
    replayH: 'Relecture', replayL: 'Moment de l’écriture', textH: 'Texte final', file: 'trace-ecriture',
  },
};
