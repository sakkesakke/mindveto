// Plain-text summary of the site for AI assistants and answer engines (llmstxt.org format).
// Built from the same English content as the pages, so it cannot drift.
import { ROUTES, SITE, type PageKey } from '../i18n/routes';
import * as en from '../i18n/en';

const strip = (s: string) => s.replace(/<[^>]+>/g, '');
const line = (k: PageKey) => `- [${en.pages[k].title}](${SITE}/${ROUTES[k].en}): ${en.pages[k].desc}`;
const group = (h: string, keys: PageKey[]) => `## ${h}\n\n${keys.map(line).join('\n')}`;

export function GET() {
  const faqs = (['guide', 'help', 'parents', 'schools', 'offices'] as PageKey[])
    .flatMap((k) => en.pages[k].faq ?? [])
    .map((f) => `- ${f.q} ${strip(f.a)}`);
  const body = [
    '# Mindveto',
    `> ${en.home.lead} Free to use. Made by Amghar Said, an independent maker. Available worldwide. Formerly called Human Override.`,
    [
      'Key facts:',
      '- What it is: an AI blocker ("AI kill switch") for browsers, Android, Windows, Mac, Linux and whole networks.',
      '- What it blocks: ChatGPT, Gemini, Copilot, Claude, Character.AI and 150+ other AI services, from a public list that updates daily.',
      '- Privacy: all checks run on the device. No account, no cookies, no trackers. Nothing typed, pasted or visited is sent to Mindveto.',
      '- Extras: PIN lock, schedule (with built-in school holidays for Belgium, the Netherlands and France), exam button for teachers, paste guard for offices, approved-AI list.',
      '- Languages: English, Dutch (/nl/), French (/fr/). Contact: hello@mindveto.app',
    ].join('\n'),
    'Honest limits:\n' + en.home.limits.map((l) => `- ${l}`).join('\n'),
    group('Guides', ['guide', 'policy', 'help']),
    group('Who it is for', ['parents', 'schools', 'offices']),
    group('Products', ['browser', 'android', 'windows', 'maclinux', 'network', 'exam', 'paste']),
    group('Company', ['download', 'pricing', 'about', 'privacy', 'terms']),
    '## Common questions\n\n' + faqs.join('\n'),
  ].join('\n\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
