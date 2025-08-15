import { LanguageContext } from './context';
import { useLanguageProvider } from './hooks';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
   const value = useLanguageProvider();

   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
