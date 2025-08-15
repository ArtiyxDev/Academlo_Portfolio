import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Language, TranslationKey } from '../types/i18n';
import { LanguageContext } from './context';
import { en } from './translations/en';
import { es } from './translations/es';

const translations = {
   en,
   es,
};

export const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGE_STORAGE_KEY = 'app-language';

export function useLanguage() {
   const context = useContext(LanguageContext);

   if (context === undefined) {
      throw new Error('useLanguage must be used within a LanguageProvider');
   }

   return context;
}

export function useLanguageProvider() {
   const [language, setLanguageState] = useState<Language>(() => {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      return stored || DEFAULT_LANGUAGE;
   });
   const [isLoading, setIsLoading] = useState(true);

   // Update HTML lang attribute whenever language changes
   useEffect(() => {
      document.documentElement.lang = language;
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
   }, [language]);

   // Preload translations
   useEffect(() => {
      setIsLoading(false);
   }, []);

   const setLanguage = useCallback((newLanguage: Language) => {
      setLanguageState(newLanguage);
   }, []);

   const t = useCallback(
      (key: TranslationKey): string => {
         return (
            translations[language]?.[key] ||
            translations[DEFAULT_LANGUAGE][key] ||
            key
         );
      },
      [language]
   );

   return useMemo(
      () => ({
         language,
         setLanguage,
         t,
         isLoading,
      }),
      [language, setLanguage, t, isLoading]
   );
}
