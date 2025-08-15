export type Language = 'es' | 'en';

export type TranslationKey = string;

export interface Translations {
   [key: TranslationKey]: string;
}

export interface LanguageContextType {
   language: Language;
   setLanguage: (lang: Language) => void;
   t: (key: TranslationKey) => string;
   isLoading: boolean;
}
