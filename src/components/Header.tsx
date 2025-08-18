'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './sections/ThemeToggle';
import HamburgerMenu from './HamburgerMenu';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../i18n';

interface HeaderProps {
   className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
   const { t } = useLanguage();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   const backdropBlur = Math.min(scrollY / 50, 10);

   return (
      <motion.header
         className={`sticky top-0 z-50 flex h-14 items-center justify-center px-4 transition-all duration-300 sm:h-16 sm:px-6 md:px-8 ${
            isMenuOpen
               ? 'border-purple-600 bg-purple-600'
               : 'border-purple-600/20 bg-purple-600/10 dark:border-purple-800/20 dark:bg-purple-800/10'
         } border-b backdrop-blur-sm ${className}`}
         style={{
            backdropFilter: `blur(${backdropBlur}px)`,
            WebkitBackdropFilter: `blur(${backdropBlur}px)`,
         }}
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
      >
         <div className="flex w-full max-w-6xl items-center justify-between">
            {/* Logo */}
            <motion.a
               href="/"
               className="z-10 flex items-center"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
            >
               <span
                  className={`text-2xl font-bold transition-colors duration-300 ${
                     isMenuOpen
                        ? 'text-purple-300'
                        : 'text-purple-600 dark:text-purple-300'
                  }`}
               >
                  {t('brand.name')}
               </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex">
               <ul className="flex items-center gap-8">
                  {[
                     [t('nav.home'), '/#'],
                     [t('nav.about'), '/#about'],
                     [t('nav.portfolio'), '/#portfolio'],
                     [t('nav.contact'), '/#contact'],
                  ].map(([label, href]) => (
                     <li key={label}>
                        <motion.a
                           href={href}
                           className="font-medium text-purple-600 transition-colors duration-300 hover:text-purple-700 dark:text-purple-300 dark:hover:text-white"
                           whileHover={{ y: -2 }}
                           whileTap={{ y: 0 }}
                        >
                           {label}
                        </motion.a>
                     </li>
                  ))}
               </ul>
            </nav>

            {/* Header Actions */}
            <div className="z-10 flex items-center gap-2">
               <LanguageSelector />
               {/* Theme Toggle */}
               <div className="flex items-center gap-1 rounded p-2 transition-colors duration-300 hover:bg-purple-600/10 dark:text-white dark:hover:bg-purple-800/10">
                  <ThemeToggle />
               </div>
               {/* Mobile Hamburger Menu */}
               <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
         </div>

         {/* Mobile Navigation */}
         <AnimatePresence>
            {isMenuOpen && (
               <motion.nav
                  className="absolute top-14 right-0 left-0 z-40 bg-purple-600 sm:hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
               >
                  <ul className="flex flex-col gap-6 p-6">
                     {[
                        [t('nav.home'), '/#'],
                        [t('nav.about'), '/#about'],
                        [t('nav.projects'), '/#projects'],
                        [t('nav.contact'), '/#contact'],
                     ].map(([label, href], index) => (
                        <motion.li
                           key={label}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                           <motion.a
                              href={href}
                              className="block py-2 text-xl font-medium text-white transition-colors duration-300 hover:text-purple-300"
                              onClick={closeMenu}
                              whileHover={{ x: 10 }}
                              whileTap={{ scale: 0.95 }}
                           >
                              {label}
                           </motion.a>
                        </motion.li>
                     ))}
                  </ul>
               </motion.nav>
            )}
         </AnimatePresence>
      </motion.header>
   );
}
