import {
   BiLogoCss3,
   BiLogoHtml5,
   BiLogoJavascript,
   BiLogoTailwindCss,
   BiLogoTypescript,
} from 'react-icons/bi';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

const readyIcons = [
   <BiLogoHtml5 />,
   <BiLogoCss3 />,
   <BiLogoTailwindCss />,
   <BiLogoJavascript />,
   <BiLogoTypescript />,
];

const IconCarousel = () => {
   const { t } = useLanguage();
   return (
      <div className="shadow-expose-sm flex w-fit items-center gap-1.5 rounded-full border-2 border-purple-200 bg-purple-300/50 px-2 dark:bg-purple-300 dark:shadow-md dark:shadow-gray-700">
         <div className="text-md relative h-3 w-3 overflow-hidden">
            <motion.div
               className="absolute inset-0 flex flex-col"
               animate={{
                  y: ['0%', '-100%', '-200%', '-300%', '-400%', '-500%'],
               }}
               transition={{
                  duration: 8,
                  ease: 'easeIn',
                  repeat: Infinity,
               }}
            >
               {[...readyIcons, readyIcons[0]].map((icon, index) => (
                  <span
                     key={index}
                     className="flex h-full w-full items-center justify-center text-purple-700"
                  >
                     {icon}
                  </span>
               ))}
            </motion.div>
         </div>
         <span className="font-semibold text-purple-900">
            {t('brand.tagline')}
         </span>
      </div>
   );
};

export default IconCarousel;
