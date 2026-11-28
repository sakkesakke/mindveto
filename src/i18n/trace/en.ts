import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Writing trace: see how a student text was made',
      desc: 'Students write in the browser and hand in a trace of how the text grew: typed, pasted, time spent. Teachers see facts, not an AI guess. Free, nothing sent.',
      h1: 'Writing trace: how was this text made?',
      lead: 'AI detectors guess, and they are often wrong. A writing trace shows facts instead: how long a student worked, what was typed and what was pasted. The student writes on this page, downloads the trace and hands it in. Everything stays on the device.',
      blocks: [
        { h: 'How it works', steps: [
          'The student opens this page and chooses “I am a student”.',
          'They write the assignment in the box. The page notes, on their own device, when text is typed, pasted or deleted.',
          'When they are done, they click “Finish and download trace” and hand in the file together with the text.',
          'The teacher opens this page, chooses “I am a teacher” and opens the file.',
        ]},
        { h: 'What the teacher sees', list: [
          'Total time and active writing time.',
          'How much was typed and how much was pasted, with every paste listed.',
          'How often the student left the page, and for how long.',
          'A chart of the text growing, and a replay of the writing.',
        ]},
        { h: 'Honest limits', list: [
          'A trace is not proof of AI use, and this page never says “AI”. It shows how a text was made. The conversation with the student decides.',
          'A student can retype an AI text by hand, or edit the file. A trace makes cheating more work, not impossible.',
          'Pasting is often fine: a quote, your own notes, a sentence from an earlier draft.',
          'It only records writing done on this page, not work done somewhere else.',
        ], note: 'Use it together with a short conversation: ask the student to explain one choice in their text.', human: true },
        { h: 'Privacy', p: [
          'No account, no cookies, no trackers. The page cannot send anything: the text and the trace stay on the device. The draft is kept in this browser, so a refresh does not lose work. The file is only shared when the student hands it in.',
        ]},
      ],
      faq: [
        { q: 'Does this detect ChatGPT?', a: 'No. No tool can reliably tell AI text from human text, and detectors often flag students who write in a second language. A writing trace shows how the text was made, so you can talk about facts.' },
        { q: 'Is it free?', a: 'Yes. It runs in the browser and needs no account.' },
        { q: 'Can students see what is recorded?', a: 'Yes. Before handing it in, they can open their own file in the teacher view and see exactly the same.' },
      ],
      related: ['exam', 'schools', 'paste'],
    },
  },
  ui: {
    nav: 'Writing trace',
    group: 'Who are you?', modeS: 'I am a student: write', modeT: 'I am a teacher: open a trace',
    pv: 'Your writing is recorded on this device only: when you type, paste or delete. Nothing is sent.',
    nameL: 'Your name', taskL: 'Assignment', textL: 'Your text',
    info: '{n} characters · {m} min · saved on this device',
    done: 'Finish and download trace', newB: 'Start a new text', confirmNew: 'Delete this text and its trace from this device and start again?',
    hand: 'Hand in the downloaded file together with your text, the way your teacher asks.',
    empty: 'Write something first.',
    fileL: 'Open a trace file (.json)', pvT: 'The file is opened on this device. Nothing is sent.',
    bad: 'This file is not a Mindveto writing trace.',
    who: '{name} · {task}', started: 'Started {d}',
    sumH: 'Facts', kTime: 'Total time', kActive: 'Active writing time', kChars: 'Characters in the final text',
    kTyped: 'Typed', kPasted: 'Pasted', kPastes: 'Number of pastes', kAway: 'Left the page', kDel: 'Deleted', kSpeed: 'Writing pace',
    min: '{n} min', chars: '{n} characters', pace: '{n} characters per active minute', away: '{n} times, {m} min in total',
    sigH: 'Worth a conversation', sigNone: 'Nothing unusual in this trace.',
    sBig: 'A large piece was pasted: {n} characters at {t}.', sShare: '{p}% of all added characters were pasted.',
    sPace: 'A lot of text for the time: {n} characters per active minute.', sAway: 'The page was left {n} times ({m} min in total).',
    sWipe: 'Just before a large paste, {n} characters of the text were deleted.', sAwayP: 'The student came back to the page {s} seconds before a large paste.',
    sNoDel: 'Almost no corrections: {n} characters deleted.',
    sigNote: 'These are facts about how the text was made, not proof of AI use. Ask the student to explain their text.',
    pasteH: 'Pastes', pasteRow: '{t} · {n} characters',
    chartH: 'Text length over time', chartAlt: 'Chart of the text length over {m} minutes. Pastes are marked with a dot.',
    replayH: 'Replay', replayL: 'Moment in the writing', textH: 'Final text', file: 'writing-trace',
  },
};
