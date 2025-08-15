import { motion } from 'motion/react';

interface HamburgerMenuProps {
   isOpen: boolean;
   toggleMenu: () => void;
   className?: string;
}

export default function HamburgerMenu({
   isOpen,
   toggleMenu,
   className = '',
}: HamburgerMenuProps) {
   return (
      <motion.button
         className={`flex h-8 w-8 flex-col items-center justify-center gap-1 p-1 sm:hidden ${className} cursor-pointer`}
         onClick={toggleMenu}
         aria-label="Toggle menu"
         aria-expanded={isOpen}
         whileTap={{ scale: 0.95 }}
      >
         <motion.span
            className={`h-0.5 w-5 transition-colors duration-300 ${
               isOpen ? 'bg-white' : 'bg-purple-600 dark:bg-purple-300'
            }`}
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
         />
         <motion.span
            className={`h-0.5 w-5 transition-colors duration-300 ${
               isOpen ? 'bg-white' : 'bg-purple-600 dark:bg-purple-300'
            }`}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
         />
         <motion.span
            className={`h-0.5 w-5 transition-colors duration-300 ${
               isOpen ? 'bg-white' : 'bg-purple-600 dark:bg-purple-300'
            }`}
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
         />
      </motion.button>
   );
}
