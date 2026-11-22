import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

export const LK: Linkable = {
  ui: {
    checked: 'Last checked', cite: 'How to cite this page', src: 'Source',
    statsT: 'Children, schools and AI: the numbers', statsD: '24 checked figures with sources, free to quote.',
    gdprT: 'ChatGPT and customer data', gdprD: 'What the GDPR means for your office, and a 5-step plan.',
  },
  pages: {
    stats: {
      title: 'Children, Schools and AI: The Numbers (2026)',
      desc: '24 checked statistics on children, teens, schools and AI: chatbots, AI companions, cheating, deepfakes and data leaks. Each with source, year and link.',
      h1: 'Children, schools and AI: the numbers (2026).',
      lead: '24 figures on how children, students and staff use AI, and what goes wrong. Every number links to its original source and was checked on the day. Free to quote.',
      blocks: [
        { h: 'Children and teens: AI chatbots and AI companions', stats: [
          st('64%', 'of US teens aged 13 to 17 say they use AI chatbots.', 'pew1'),
          st('About 3 in 10', 'US teens use AI chatbots every day, including 16% who do so several times a day or almost constantly.', 'pew1'),
          st('59%', 'of US teens use ChatGPT, by far the most used chatbot among teens.', 'pew1'),
          st('72%', 'of US teens aged 13 to 17 have used AI companions at least once. Over half use them at least a few times a month.', 'csm'),
          st('About 1 in 3', 'US teens find conversations with AI companions as satisfying as, or more satisfying than, those with real-life friends.', 'csm'),
          st('About 1 in 3', 'US teens who use AI companions have chosen to discuss important or serious matters with an AI companion instead of a real person.', 'csm'),
          st('12%', 'of US teens have used chatbots to get emotional support or advice.', 'pew2'),
          st('63.8%', 'of people aged 16 to 24 in the EU used generative AI tools in 2025, almost twice the share of all adults aged 16 to 74 (32.7%).', 'eu1'),
        ] },
        { h: 'School: homework, studying and cheating', stats: [
          st('54%', 'of US teens have used chatbots to get help with schoolwork.', 'pew2'),
          st('59%', 'of US teens think students at their school use AI to cheat at least somewhat often.', 'pew2'),
          st('26%', 'of US teens used ChatGPT for schoolwork in 2024, double the 13% of 2023.', 'pew3'),
          st('39.3%', 'of 16- to 24-year-olds in the EU used generative AI for formal education in 2025, against 9.4% of all adults.', 'eu1'),
          st('94%', 'of full-time undergraduates in the UK use generative AI to support assessed work.', 'hepi'),
        ] },
        { h: 'Deepfakes, fake nudes and fake voices', stats: [
          st('1 in 8', 'young people aged 13 to 20 personally know someone who has been targeted by deepfake nudes.', 'thorn'),
          st('1 in 5', 'teens believed it was legal to create deepfake nudes of someone else, including another minor.', 'thorn'),
          st('34%', 'of young victims of deepfake nudes told a parent, although 62% of those who were not targeted said they would.', 'thorn'),
          st('73%', 'is how often listeners correctly spotted AI-made fake voices, in a test with 529 people in English and Mandarin.', 'plos'),
          st('3,440', 'AI-made videos of child sexual abuse were found by the Internet Watch Foundation in 2025, against 13 in 2024.', 'iwf'),
        ] },
        { h: 'Work: AI use and data leaks', stats: [
          st('58%', 'of employees intentionally use AI at work on a regular basis (survey of 48,340 people in 47 countries).', 'kpmg'),
          st('48%', 'of employees say they have uploaded company information, such as financial, sales or customer information, into public AI tools.', 'kpmg'),
          st('20.0%', 'of EU businesses with 10 or more employees used AI in 2025, up from 13.5% in 2024.', 'eu2'),
          st('13%', 'of organisations reported a breach of AI models or applications. Of those, 97% had no AI access controls in place.', 'ibm'),
          st('1 in 5', 'organisations reported a breach due to shadow AI: AI tools staff use without approval. Those with a lot of shadow AI paid on average USD 670,000 more per breach.', 'ibm'),
          st('€15 million', 'fine for OpenAI from Italy’s data protection authority over ChatGPT, among other things for training on personal data without a proper legal basis.', 'gar'),
        ] },
        { h: 'About these numbers', p: [
          'We opened every source and checked each figure on 22 November 2026. Figures we could not verify on the day are left out.',
          'The studies differ in country, age group and method. Do not add them up or compare them as if they were one survey. Most surveys of children here are from the United States, the United Kingdom and the EU.',
        ] },
        { h: 'What you can do', list: [
          'Parents: <a href="/parents/">Mindveto for parents</a> and <a href="/blog/is-character-ai-safe-for-kids/">Is Character.AI safe for kids?</a>',
          'Schools: <a href="/schools/">Mindveto for schools</a>, the <a href="/exam-button/">exam button</a> and <a href="/blog/ai-act-article-4-schools/">AI Act Article 4 for schools</a>.',
          'Deepfakes and scams: the <a href="/ai-phishing-quiz/">AI phishing quiz</a>, <a href="/link-check/">Is this link safe?</a> and the <a href="/block-porn/">free family filter</a>.',
          'Offices: the <a href="/paste-guard/">paste guard</a> and <a href="/blog/chatgpt-customer-data-gdpr/">ChatGPT and customer data under the GDPR</a>.',
        ] },
      ],
      faq: [
        { q: 'How many teens use AI chatbots?', a: 'In the United States, 64% of teens aged 13 to 17 say they use AI chatbots, and about three in ten use them every day (Pew Research Center, December 2025).' },
        { q: 'Do students use AI to cheat?', a: '59% of US teens think students at their school use AI to cheat at least somewhat often (Pew Research Center, 2026). In the UK, 94% of undergraduates use generative AI to support assessed work, which is not always cheating (HEPI, 2026).' },
        { q: 'Can I use these numbers?', a: 'Yes. Quote them with a link to this page and name the original source. Each figure has its own link: add #s1 to #s24 to the page address.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, “Children, schools and AI: the numbers (2026)”, https://mindveto.app/ai-statistics/, last checked 22 November 2026. When you quote one figure, please also name its original source, shown under the number.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT and Customer Data: What the GDPR Means (2026)',
      desc: 'Can your office paste customer data into ChatGPT? What OpenAI does with it, what the GDPR and regulators expect, and a 5-step plan for small offices.',
      h1: 'ChatGPT and customer data: what the GDPR means for your office.',
      lead: 'Short answer: do not paste customer data into a personal ChatGPT account. Your office stays responsible for that data under the GDPR, and on Free, Plus and Pro accounts chats can be used to train OpenAI’s models unless that is switched off. If your team needs AI, use a business plan with a data processing agreement, set clear rules, and add a check before anything is pasted.',
      blocks: [
        { h: 'What happens to what you paste', list: [
          'ChatGPT Free, Plus and Pro: the setting “Improve the model for everyone” is on by default, so chats can be used to train OpenAI’s models. Each user can switch it off under Settings, Data controls.',
          'Switching training off does not delete saved chats. They stay on OpenAI’s servers.',
          'Temporary chats are not used for training, but may be kept for up to 30 days for safety reasons.',
          'ChatGPT Business, Enterprise, Edu and the API: OpenAI says it does not train on this business data by default, and offers a Data Processing Addendum (DPA) for Business, Enterprise and the API.',
        ] },
        { h: 'What the GDPR expects from your office', list: [
          'Your office decides why and how client data is used, so it is responsible for that data.',
          'A service that handles personal data for you needs a written agreement with you. OpenAI’s DPA says OpenAI then acts as a data processor; for customers in the EEA the contract is with OpenAI Ireland.',
          'Share as little as needed. Most tasks, such as a draft, a summary or a translation, work just as well without names, account numbers or ID numbers.',
          'If personal data ends up where it should not, that can be a data breach. The Dutch regulator says a breach must be reported within 72 hours after you become aware of it, and that a leak through a chatbot must be reported in many cases.',
        ] },
        { h: 'It already happens', list: [
          'In August 2024 the Dutch Data Protection Authority reported several data breach notifications caused by AI chatbots. In one, an employee of a GP practice had entered patients’ medical data into a chatbot. In another, a telecom employee entered a file with customer addresses.',
          '48% of employees worldwide say they have uploaded company information, such as financial, sales or customer information, into public AI tools (University of Melbourne and KPMG, 2025).',
          'One in five organisations reported a breach due to shadow AI, meaning AI tools staff use without approval (IBM, 2025).',
          'In December 2024 Italy’s data protection authority fined OpenAI €15 million over ChatGPT, among other things for training on personal data without a proper legal basis.',
        ], note: 'More figures with sources: <a href="/ai-statistics/">Children, schools and AI: the numbers (2026)</a>.' },
        { h: 'A 5-step plan for a small office', steps: [
          'Decide which AI tool is allowed, preferably a business plan with a data processing agreement, and stop using personal accounts for client work. Write it down with our free <a href="/ai-policy-template/">AI policy template</a>.',
          'List what never goes into an AI tool: client names with their data, bank account and ID numbers, health and HR files, contracts, passwords.',
          'Show staff how to remove names and numbers first. The answer is usually just as useful.',
          'Add a check at the moment of pasting. The Mindveto <a href="/paste-guard/">paste guard</a> warns before IBANs, ID numbers, e-mail lists or text marked confidential go into an AI chat, and can block AI tools your office did not approve.',
          'Agree what happens after a mistake: tell a named person the same day, write down what was pasted and where, delete the chat, and check whether it must be reported to your data protection authority.',
        ] },
        { h: 'Where Mindveto helps, and where it does not', list: [
          'The paste guard checks on the computer itself. Pasted text is never stored or sent, also not to us.',
          'It works in the browser where the extension is installed. It does not check e-mail, documents or desktop apps.',
          'Mindveto does not make your office GDPR-compliant on its own. The rules, the agreement with your AI provider and the training of staff are your part.',
        ], note: 'This article is general information, not legal advice. Check the guidance of your national data protection authority.' },
      ],
      faq: [
        { q: 'Can we use ChatGPT at work under the GDPR?', a: 'It is not forbidden as such. What matters is which data goes in and on what terms. Keep personal data out of personal accounts, and for client work use a business plan with a data processing agreement and clear rules.' },
        { q: 'Does ChatGPT learn from what we paste?', a: 'On Free, Plus and Pro, chats can be used for training unless “Improve the model for everyone” is switched off. On Business, Enterprise, Edu and the API, OpenAI says it does not train on your data by default.' },
        { q: 'An employee pasted client data. What now?', a: 'Write down what was pasted, when and where, and delete the chat. Then check whether it is a data breach that must be reported. In the Netherlands that is within 72 hours after you become aware of it.' },
        { q: 'Does Mindveto see what we paste?', a: 'No. The paste guard checks on the computer itself. Pasted text is never stored or sent.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};
