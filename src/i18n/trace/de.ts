import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Schreibspur: sehen, wie ein Schülertext entstand',
      desc: 'Schüler schreiben im Browser und geben eine Spur ab, wie der Text wuchs: getippt, eingefügt, Zeit. Lehrkräfte sehen Fakten statt einer KI-Vermutung. Gratis.',
      h1: 'Schreibspur: wie ist dieser Text entstanden?',
      lead: 'KI-Detektoren raten und liegen oft falsch. Eine Schreibspur zeigt Fakten: wie lange jemand gearbeitet hat, was getippt und was eingefügt wurde. Die Schülerin oder der Schüler schreibt auf dieser Seite, lädt die Spur herunter und gibt sie ab. Alles bleibt auf dem Gerät.',
      blocks: [
        { h: 'So funktioniert es', steps: [
          'Die Schülerin oder der Schüler öffnet diese Seite und wählt „Ich schreibe (Schüler)“.',
          'Die Aufgabe wird im Textfeld geschrieben. Die Seite notiert auf dem eigenen Gerät, wann Text getippt, eingefügt oder gelöscht wird.',
          'Am Ende auf „Fertig: Spur herunterladen“ klicken und die Datei zusammen mit dem Text abgeben.',
          'Die Lehrkraft öffnet diese Seite, wählt „Ich bin Lehrkraft“ und öffnet die Datei.',
        ]},
        { h: 'Was die Lehrkraft sieht', list: [
          'Die Gesamtzeit und die tatsächliche Schreibzeit.',
          'Wie viel getippt und wie viel eingefügt wurde, jedes Einfügen einzeln.',
          'Wie oft die Seite verlassen wurde, und wie lange.',
          'Ein Diagramm des wachsenden Textes und eine Wiedergabe des Schreibens.',
        ]},
        { h: 'Ehrliche Grenzen', list: [
          'Eine Spur ist kein Beweis für KI-Nutzung, und diese Seite sagt nie „KI“. Sie zeigt, wie ein Text entstand. Das Gespräch mit dem Schüler entscheidet.',
          'Man kann einen KI-Text von Hand abtippen oder die Datei ändern. Eine Spur macht Schummeln aufwendiger, nicht unmöglich.',
          'Einfügen ist oft in Ordnung: ein Zitat, eigene Notizen, ein Satz aus einem Entwurf.',
          'Sie notiert nur, was auf dieser Seite geschrieben wird, nicht Arbeit an anderer Stelle.',
        ], note: 'Nutzen Sie sie zusammen mit einem kurzen Gespräch: Lassen Sie eine Entscheidung im Text erklären.', human: true },
        { h: 'Datenschutz', p: [
          'Kein Konto, keine Cookies, keine Tracker. Die Seite kann nichts senden: Text und Spur bleiben auf dem Gerät. Der Entwurf bleibt in diesem Browser gespeichert, damit beim Neuladen nichts verloren geht. Die Datei wird erst geteilt, wenn sie abgegeben wird.',
        ]},
      ],
      faq: [
        { q: 'Erkennt das ChatGPT?', a: 'Nein. Kein Werkzeug kann KI-Text zuverlässig von menschlichem Text unterscheiden, und Detektoren markieren oft Schüler, die in einer Zweitsprache schreiben. Eine Schreibspur zeigt, wie der Text entstand, damit Sie über Fakten sprechen.' },
        { q: 'Ist es kostenlos?', a: 'Ja. Es läuft im Browser und braucht kein Konto.' },
        { q: 'Sehen Schüler, was notiert wird?', a: 'Ja. Vor der Abgabe können sie ihre eigene Datei in der Lehrkraft-Ansicht öffnen und genau dasselbe sehen.' },
      ],
      related: ['ask', 'exam', 'schools'],
    },
  },
  ui: {
    nav: 'Schreibspur',
    group: 'Wer bist du?', modeS: 'Ich schreibe (Schüler)', modeT: 'Ich bin Lehrkraft: Spur öffnen',
    pv: 'Dein Schreiben wird nur auf diesem Gerät notiert: wann du tippst, einfügst oder löschst. Nichts wird gesendet.',
    nameL: 'Dein Name', taskL: 'Aufgabe', textL: 'Dein Text',
    info: '{n} Zeichen · {m} Min. · auf diesem Gerät gespeichert',
    done: 'Fertig: Spur herunterladen', newB: 'Neuen Text beginnen', confirmNew: 'Diesen Text und seine Spur von diesem Gerät löschen und neu beginnen?',
    hand: 'Gib die heruntergeladene Datei zusammen mit deinem Text ab, so wie deine Lehrkraft es möchte.',
    empty: 'Schreib zuerst etwas.',
    fileL: 'Spurdatei öffnen (.json)', pvT: 'Die Datei wird auf diesem Gerät geöffnet. Nichts wird gesendet.',
    bad: 'Diese Datei ist keine Mindveto-Schreibspur.',
    who: '{name} · {task}', started: 'Begonnen am {d}',
    sumH: 'Fakten', kTime: 'Gesamtzeit', kActive: 'Tatsächliche Schreibzeit', kChars: 'Zeichen im Endtext',
    kTyped: 'Getippt', kPasted: 'Eingefügt', kPastes: 'Anzahl Einfügungen', kAway: 'Seite verlassen', kDel: 'Gelöscht', kSpeed: 'Schreibtempo',
    min: '{n} Min.', chars: '{n} Zeichen', pace: '{n} Zeichen pro Schreibminute', away: '{n}-mal, insgesamt {m} Min.',
    sigH: 'Gesprächsanlass', sigNone: 'Nichts Auffälliges in dieser Spur.',
    sBig: 'Ein großes Stück wurde eingefügt: {n} Zeichen bei {t}.', sShare: '{p} % aller hinzugefügten Zeichen wurden eingefügt.',
    sPace: 'Viel Text für die Zeit: {n} Zeichen pro Schreibminute.', sAway: 'Die Seite wurde {n}-mal verlassen (insgesamt {m} Min.).',
    sWipe: 'Kurz vor einer großen Einfügung wurden {n} Zeichen des Textes gelöscht.', sAwayP: 'Die Seite wurde {s} Sekunden vor einer großen Einfügung wieder geöffnet.',
    sNoDel: 'Fast keine Korrekturen: {n} Zeichen gelöscht.',
    sigNote: 'Das sind Fakten darüber, wie der Text entstand, kein Beweis für KI-Nutzung. Lassen Sie sich den Text erklären.',
    pasteH: 'Einfügungen', pasteRow: '{t} · {n} Zeichen',
    chartH: 'Textlänge im Zeitverlauf', chartAlt: 'Diagramm der Textlänge über {m} Minuten. Einfügungen sind mit einem Punkt markiert.',
    replayH: 'Wiedergabe', replayL: 'Zeitpunkt im Schreiben', textH: 'Endtext', file: 'schreibspur',
  },
};
