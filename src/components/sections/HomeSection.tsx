import {
   SiExpress,
   SiFigma,
   SiFramer,
   SiMongodb,
   SiNextdotjs,
   SiNodedotjs,
   SiPostgresql,
} from 'react-icons/si';
import { motion } from 'motion/react';
import IconCarousel from '../IconCarousel';
import { TypeWritter } from '../Typeweitter';
import type { HtmlHTMLAttributes } from 'react';
import AnimatedAvatar, { type AvatarIcon } from '../AnimatedAvatar';
import { useLanguage } from '../../i18n';

const getBioMessages = (t: (key: string) => string) => [
   t('home.bio.tech'),
   t('home.bio.creative'),
   t('home.bio.solver'),
   t('home.bio.team'),
];

const avatarIcons: AvatarIcon[] = [
   { Icon: SiExpress, size: 32, color: '#000000' },
   { Icon: SiFigma, size: 32, color: '#ff7043' },
   { Icon: SiFramer, size: 32, color: '#054eff' },
   { Icon: SiMongodb, size: 32, color: '#58aa50' },
   { Icon: SiNextdotjs, size: 32, color: '#050709' },
   { Icon: SiNodedotjs, size: 32, color: '#6abe51' },
   { Icon: SiPostgresql, size: 32, color: '#0277bd' },
];

interface HomeSectionProps extends HtmlHTMLAttributes<'section'> {
   className?: string;
}

export default function HomeSection({
   className = '',
   id = 'home',
}: HomeSectionProps) {
   const { t } = useLanguage();
   return (
      <motion.section
         id={id}
         initial={{
            x: '-100%',
            opacity: 0,
         }}
         animate={{
            x: 0,
            opacity: 1,
         }}
         transition={{
            duration: 1,
            delay: 0.5,
            ease: 'easeInOut',
         }}
         className={
            'flex flex-col px-8 pt-24 lg:w-5/6 lg:flex-row ' + className
         }
      >
         <div className="lg:w-1/2">
            <IconCarousel />
            <h1 className="pt-2 text-6xl font-semibold text-black dark:text-white">
               {t('home.role.first')}
            </h1>
            <p className="bg-gradient-to-r from-purple-800 via-purple-600 via-30% to-purple-400 bg-clip-text text-5xl font-semibold text-transparent">
               {t('home.role.second')}
            </p>
            <TypeWritter
               phrases={getBioMessages(t)}
               className="pt-3 text-xl font-semibold text-black dark:text-white"
            />
            <p className="pt-3 text-xl text-gray-600 dark:text-gray-300">
               {t('home.description')}
            </p>
         </div>
         <div className="relative my-8 flex h-96 items-center justify-center lg:w-1/2">
            <AnimatedAvatar
               src="https://i.postimg.cc/43bjLTNQ/avatar.png"
               icons={avatarIcons}
            />
         </div>
      </motion.section>
   );
}
