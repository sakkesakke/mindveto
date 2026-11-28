import type { Lang } from '../routes';
import type { Trace } from './types';
import { TR as en } from './en';
import { TR as nl } from './nl';
import { TR as fr } from './fr';
import { TR as es } from './es';
import { TR as de } from './de';
import { TR as pt } from './pt';
import { TR as it } from './it';
import { TR as ar } from './ar';

export const TRACE: Record<Lang, Trace> = { en, nl, fr, es, de, pt, it, ar };
