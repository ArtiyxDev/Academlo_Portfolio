import { motion } from 'motion/react';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { BiMoon, BiSun } from 'react-icons/bi';

export default function ThemeToggle() {
   const [isAnimating, setIsAnimating] = useState(false);
   const { toggleTheme, theme } = useTheme();

   const handleToggle = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
      setIsAnimating(false);
      toggleTheme();
   };

   return (
      <motion.button
         onClick={handleToggle}
         className="flex h-5 w-5 cursor-pointer items-center justify-center text-black dark:text-white"
         whileTap={{
            scale: 0.05,
            rotate: 320,
            transition: { duration: 0.3 },
         }}
         disabled={isAnimating}
      >
         {theme === 'light' ? (
            <BiMoon className="h-full w-full" />
         ) : (
            <BiSun className="h-full w-full" />
         )}
      </motion.button>
   );
}
