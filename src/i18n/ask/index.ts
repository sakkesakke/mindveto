import type { Lang } from '../routes';
import type { Ask } from './types';
import { AS as en } from './en';
import { AS as nl } from './nl';
import { AS as fr } from './fr';
import { AS as es } from './es';
import { AS as de } from './de';
import { AS as pt } from './pt';
import { AS as it } from './it';
import { AS as ar } from './ar';

// Where the API runs. The region appears in the privacy texts of this page and of the privacy policy.
export const ASK_API = 'https://api.mindveto.app';
export const ASK_REGION: Record<Lang, string> = {
  en: 'Oracle Cloud, Casablanca, Morocco, outside the EU',
  nl: 'Oracle Cloud, Casablanca, Marokko, buiten de EU',
  fr: 'Oracle Cloud, Casablanca, Maroc, hors de l’UE',
  es: 'Oracle Cloud, Casablanca, Marruecos, fuera de la UE',
  de: 'Oracle Cloud, Casablanca, Marokko, außerhalb der EU',
  pt: 'Oracle Cloud, Casablanca, Marrocos, fora da UE',
  it: 'Oracle Cloud, Casablanca, Marocco, fuori dall’UE',
  ar: 'Oracle Cloud، الدار البيضاء، المغرب، خارج الاتحاد الأوروبي',
};
export const ASK_LANG_NAMES: [string, string][] = [['en', 'English'], ['nl', 'Nederlands'], ['fr', 'Français'], ['es', 'Español'], ['de', 'Deutsch'], ['pt', 'Português'], ['it', 'Italiano'], ['ar', 'العربية']];

const fill = (v: Ask, lang: Lang): Ask => JSON.parse(JSON.stringify(v).replaceAll('{region}', ASK_REGION[lang]));
export const ASK: Record<Lang, Ask> = { en: fill(en, 'en'), nl: fill(nl, 'nl'), fr: fill(fr, 'fr'), es: fill(es, 'es'), de: fill(de, 'de'), pt: fill(pt, 'pt'), it: fill(it, 'it'), ar: fill(ar, 'ar') };
