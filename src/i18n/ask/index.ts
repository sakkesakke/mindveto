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
export const ASK_REGION = 'REGION';
export const ASK_LANG_NAMES: [string, string][] = [['en', 'English'], ['nl', 'Nederlands'], ['fr', 'Français'], ['es', 'Español'], ['de', 'Deutsch'], ['pt', 'Português'], ['it', 'Italiano'], ['ar', 'العربية']];

const fill = <T>(v: T): T => JSON.parse(JSON.stringify(v).replaceAll('{region}', ASK_REGION));
export const ASK: Record<Lang, Ask> = fill({ en, nl, fr, es, de, pt, it, ar });
