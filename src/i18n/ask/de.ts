import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Fragen an Schüler: zum eigenen Text',
      desc: 'Fügen Sie einen Schülertext ein und erhalten Sie fünf Fragen, die nur der echte Autor leicht beantwortet. Kein KI-Urteil: das Gespräch entscheidet. Gratis.',
      h1: 'Fragen an Schüler zu ihrem Text.',
      lead: 'Zweifeln Sie, ob jemand einen Text selbst geschrieben hat? Raten Sie nicht. Fügen Sie den Text hier ein und erhalten Sie fünf Fragen zu konkreten Entscheidungen darin. Wer ihn geschrieben hat, antwortet leicht. Wer nicht, tut sich schwer. Sie entscheiden nach einem kurzen Gespräch.',
      blocks: [
        { h: 'So funktioniert es', steps: [
          'Fordern Sie per E-Mail an hello@mindveto.app einen kostenlosen Code an. Er gilt für 5 Texte im Monat.',
          'Fügen Sie den Schülertext ein (300 bis 6.000 Zeichen) und wählen Sie die Sprache der Fragen.',
          'Warten Sie 2 bis 4 Minuten. Ein offenes KI-Modell auf dem eigenen Server von Mindveto schreibt fünf Fragen.',
          'Stellen Sie die Fragen in einem kurzen Gespräch und hören Sie zu, wie die Entscheidungen erklärt werden.',
        ]},
        { h: 'Wie die Fragen aussehen', list: [
          'Zu einem konkreten Beispiel, Wort oder einer Quelle im Text, mit kurzem Zitat.',
          'Was ein Satz bedeutet, in eigenen Worten.',
          'Was man ändern würde, und warum.',
        ]},
        { h: 'Ehrliche Grenzen', list: [
          'Die Fragen sind kein Test und kein Urteil. Nichts auf dieser Seite sagt, ob KI benutzt wurde.',
          'Ein offenes Modell stellt manchmal eine schwache oder seltsame Frage. Überspringen Sie sie.',
          'Wer einen Text gut studiert hat, kann antworten, ohne ihn geschrieben zu haben. Nutzen Sie die Fragen zusammen mit der Schreibspur und dem, was Sie über die Person wissen.',
          'Entfernen Sie Namen und andere persönliche Daten aus dem Text, bevor Sie ihn einfügen.',
        ], note: 'Das Gespräch entscheidet, nicht diese Seite.', human: true },
        { h: 'Datenschutz', p: [
          'Der Text geht nur an den eigenen Server von Mindveto ({region}), um die Fragen zu erstellen, und wird gleich danach gelöscht. Er wird nicht gespeichert, nicht protokolliert und nicht zum Training eines Modells verwendet. Kein externer KI-Dienst sieht ihn. Wir speichern nur Ihren Code, unlesbar gemacht, und wie viele Texte Sie diesen Monat genutzt haben.',
        ]},
      ],
      faq: [
        { q: 'Ist das ein KI-Detektor?', a: 'Nein. Es beurteilt den Text nicht. Es gibt Ihnen Fragen, damit Sie mit dem Schüler über Fakten sprechen.' },
        { q: 'Warum dauert es einige Minuten?', a: 'Das Modell läuft auf unserem eigenen Server ohne teure Hardware, damit Ihr Text nie zu einem externen KI-Dienst geht. Deshalb ist es langsamer.' },
        { q: 'Und wenn ich mehr als 5 Texte im Monat brauche?', a: 'Schreiben Sie an hello@mindveto.app. Schulen können einen größeren Plan bekommen.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Ihr Code', codeHelp: 'Noch kein Code? Fordern Sie einen kostenlosen Code an (5 Texte im Monat):', mailSub: 'Kostenloser Code für Fragen an Schüler',
    textL: 'Schülertext', langL: 'Sprache der Fragen', count: '{n} / {max} Zeichen',
    pv: 'Der Text wird nur an den eigenen Server von Mindveto gesendet, um die Fragen zu erstellen, und gleich danach gelöscht.',
    btn: 'Fragen erstellen', wait: 'Fragen werden erstellt… das dauert 2 bis 4 Minuten. Lassen Sie diese Seite offen.',
    resH: 'Fragen für das Gespräch', about: 'Zu:', used: '{used} von {limit} Texten diesen Monat genutzt.',
    copy: 'Fragen kopieren', copied: 'Kopiert.', note: 'Überspringen Sie eine Frage, die nicht passt. Das Gespräch entscheidet, nicht diese Seite.',
    eCode: 'Dieser Code ist ungültig. Prüfen Sie ihn oder schreiben Sie an hello@mindveto.app.', eShort: 'Der Text ist zu kurz: mindestens {min} Zeichen.',
    eLong: 'Der Text ist zu lang: höchstens {max} Zeichen.', eLimit: 'Sie haben alle {limit} Texte dieses Monats genutzt. Schreiben Sie an hello@mindveto.app für mehr.',
    eBusy: 'Der Server ist ausgelastet. Versuchen Sie es in ein paar Minuten erneut.', eTime: 'Das hat zu lange gedauert. Versuchen Sie es erneut oder mit einem kürzeren Text.',
    eNet: 'Der Server ist gerade nicht erreichbar. Versuchen Sie es später erneut.', eModel: 'Beim Erstellen der Fragen ist etwas schiefgegangen. Versuchen Sie es erneut.',
  },
};
