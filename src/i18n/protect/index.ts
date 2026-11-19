import type { Lang } from '../routes';
import type { Protect } from './types';
import { P as en } from './en';
import { P as nl } from './nl';
import { P as fr } from './fr';
import { P as es } from './es';
import { P as de } from './de';
import { P as pt } from './pt';
import { P as it } from './it';
import { P as ar } from './ar';

export const PROTECT: Record<Lang, Protect> = { en, nl, fr, es, de, pt, it, ar };
