import type { Lang } from '../routes';
import type { Linkable } from './types';
import { LK as en } from './en';
import { LK as nl } from './nl';
import { LK as fr } from './fr';
import { LK as es } from './es';
import { LK as de } from './de';
import { LK as pt } from './pt';
import { LK as it } from './it';
import { LK as ar } from './ar';

export const LINKABLE: Record<Lang, Linkable> = { en, nl, fr, es, de, pt, it, ar };
