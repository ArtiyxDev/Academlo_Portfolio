import { createContext } from 'react';
import type { LanguageContextType } from '../types/i18n';

export const LanguageContext = createContext<LanguageContextType | undefined>(
   undefined
);
