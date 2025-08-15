import { useEffect, useState } from 'react';

export const useTheme = () => {
   const [theme, setTheme] = useState<'light' | 'dark'>(
      localStorage.theme ||
         (window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light')
   );

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
   };

   const setLight = () => {
      setTheme('light');
   };

   const setDark = () => {
      setTheme('dark');
   };

   const useSystemTheme = () => {
      localStorage.removeItem('theme');
      setTheme(
         window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
      );
   };

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.remove('light');
         document.documentElement.classList.add('dark');
         localStorage.theme = 'dark';
      } else {
         document.documentElement.classList.remove('dark');
         document.documentElement.classList.add('light');
         localStorage.theme = 'light';
      }
   }, [theme]);

   return { theme, toggleTheme, setLight, setDark, useSystemTheme };
};
