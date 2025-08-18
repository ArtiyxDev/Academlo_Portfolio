import { motion } from 'motion/react';
import { useLanguage } from '../i18n';
import type { Language } from '../types/i18n';
import ReactCountryFlag from 'react-country-flag';

const languageFlags: Record<Language, { code: string; label: string }> = {
   es: { code: 'ES', label: 'Español' },
   en: { code: 'GB', label: 'English' },
};

export default function LanguageSelector() {
   const { language, setLanguage } = useLanguage();

   const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'es' : 'en');
   };

   return (
      <motion.button
         onClick={toggleLanguage}
         className="flex cursor-pointer items-center gap-2 rounded p-2 transition-colors duration-300 hover:bg-purple-600/10 dark:text-white dark:hover:bg-purple-800/10"
         whileTap={{ scale: 0.95 }}
      >
         <ReactCountryFlag
            countryCode={languageFlags[language].code}
            svg
            style={{
               width: '1.2em',
               height: '1.2em',
            }}
            title={languageFlags[language].label}
         />
         <span className="text-sm font-medium">
            {languageFlags[language].label}
         </span>
      </motion.button>
   );
}
