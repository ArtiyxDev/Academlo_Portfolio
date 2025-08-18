import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../i18n/hooks';
import { BiMoon, BiSun } from 'react-icons/bi';

export default function ThemeToggle() {
   const [isAnimating, setIsAnimating] = useState(false);
   const { toggleTheme, theme } = useTheme();
   const { t } = useLanguage();

   const handleToggle = () => {
      setIsAnimating(true);
      toggleTheme();
   };

   // Cleanup animation state after animation completes
   useEffect(() => {
      if (isAnimating) {
         const timeoutId = setTimeout(() => {
            setIsAnimating(false);
         }, 500);

         return () => clearTimeout(timeoutId);
      }
   }, [isAnimating]);

   const currentThemeLabel =
      theme === 'light' ? t('theme.dark') : t('theme.light');

   return (
      <motion.button
         onClick={handleToggle}
         className="flex h-5 w-5 cursor-pointer items-center justify-center text-black dark:text-white"
         whileTap={{
            scale: 0.95,
            rotate: 180,
            transition: { duration: 0.3 },
         }}
         disabled={isAnimating}
         aria-label={currentThemeLabel}
         title={currentThemeLabel}
      >
         {theme === 'light' ? (
            <BiMoon className="h-full w-full" />
         ) : (
            <BiSun className="h-full w-full" />
         )}
      </motion.button>
   );
}
