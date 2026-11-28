import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Ask the student: questions about their own text',
      desc: 'Paste a student text and get five questions only the real author can answer easily. No AI verdict: a short talk decides. Free for 5 texts a month.',
      h1: 'Ask the student: questions about their text.',
      lead: 'Not sure a student wrote a text themselves? Do not guess. Paste the text here and get five questions about concrete choices in it. Someone who wrote it answers easily. Someone who did not, struggles. You decide after a short talk.',
      blocks: [
        { h: 'How it works', steps: [
          'Ask for a free code by email at hello@mindveto.app. It gives you 5 texts a month.',
          'Paste the student text (300 to 6,000 characters) and choose the language of the questions.',
          'Wait 1 to 2 minutes. An open AI model on Mindveto’s own server writes five questions.',
          'Ask the questions in a short conversation, and listen to how the student explains their choices.',
        ]},
        { h: 'What the questions are like', list: [
          'About a concrete example, word or source in the text, with a short quote.',
          'What a sentence means, in the student’s own words.',
          'What they would change, and why.',
        ]},
        { h: 'Honest limits', list: [
          'The questions are not a test and not a verdict. Nothing on this page says whether AI was used.',
          'An open model sometimes makes a weak or odd question. Just skip it.',
          'A student who studied a text well can answer even if they did not write it. Use the questions together with the writing trace and what you know of the student.',
          'Remove names and other personal data from the text before you paste it.',
        ], note: 'The conversation decides, not this page.', human: true },
        { h: 'Privacy', p: [
          'The text goes only to Mindveto’s own server ({region}) to make the questions, and is deleted right after. It is not stored, not logged and not used to train any model. No other company sees it. We keep only your code, as an unreadable hash, and how many texts you used this month.',
        ]},
      ],
      faq: [
        { q: 'Is this an AI detector?', a: 'No. It does not judge the text. It gives you questions, so you can talk with the student about facts.' },
        { q: 'Why does it take a minute or two?', a: 'The model runs on our own server without expensive hardware, so your text never goes to another company. That makes it slower.' },
        { q: 'What if I need more than 5 texts a month?', a: 'Mail hello@mindveto.app. Schools can get a bigger plan.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Your code', codeHelp: 'No code yet? Ask for a free code (5 texts a month):', mailSub: 'Free code for Ask the student',
    textL: 'Student text', langL: 'Language of the questions', count: '{n} / {max} characters',
    pv: 'The text is sent only to Mindveto’s own server to make the questions, and is deleted right after.',
    btn: 'Make questions', wait: 'Making questions… this takes 1 to 2 minutes. Keep this page open.',
    resH: 'Questions for the conversation', about: 'About:', used: '{used} of {limit} texts used this month.',
    copy: 'Copy questions', copied: 'Copied.', note: 'Skip a question that does not fit. The conversation decides, not this page.',
    eCode: 'This code is not valid. Check it, or mail hello@mindveto.app.', eShort: 'The text is too short: at least {min} characters.',
    eLong: 'The text is too long: at most {max} characters.', eLimit: 'You used all {limit} texts for this month. Mail hello@mindveto.app for more.',
    eBusy: 'The server is busy. Try again in a few minutes.', eTime: 'This took too long. Try again, or try a shorter text.',
    eNet: 'The server cannot be reached right now. Try again later.', eModel: 'Something went wrong while making the questions. Try again.',
  },
};
