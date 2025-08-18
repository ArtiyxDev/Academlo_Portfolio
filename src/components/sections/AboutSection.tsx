import type { HtmlHTMLAttributes } from 'react';
import ScrollReveal from '../ScrollReveal';
import { TypeWritter } from '../Typeweitter';
import { BiCode, BiFile, BiTime } from 'react-icons/bi';
import toast from 'react-hot-toast';
import { useLanguage } from '../../i18n';

interface AboutSectionProps extends HtmlHTMLAttributes<'section'> {
   className?: string;
}

export default function AboutSection({
   className = '',
   id = 'about',
}: AboutSectionProps) {
   const { t } = useLanguage();
   return (
      <ScrollReveal delay={1}>
         <section
            id={id}
            className={'scroll-mt-8 px-8 pt-8 pb-6 text-center ' + className}
         >
            <ScrollReveal className="inline-block">
               <h2 className="bg-gradient-to-r from-purple-800 via-purple-600 via-30% to-purple-400 bg-clip-text text-5xl font-semibold text-transparent">
                  {t('about.title')}
               </h2>
            </ScrollReveal>
            <ScrollReveal>
               <p className="pt-3 text-lg text-gray-600 dark:text-gray-300">
                  {t('about.description.first')}
                  <TypeWritter
                     phrases={['Jhon', 'Artiyx']}
                     className="text-main font-semibold"
                     delayBetweenPhrases={7000}
                  />
                  {t('about.description.second')}
               </p>
            </ScrollReveal>
            <ScrollReveal className="flex w-full flex-col items-center justify-between gap-2 pt-8 text-white md:flex-row">
               <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 py-3 transition-shadow duration-300 hover:cursor-pointer hover:shadow-md dark:bg-purple-400 dark:text-purple-200 hover:dark:shadow-purple-300/20"
                  onClick={() => toast('Soon', { icon: <BiTime size={24} /> })}
               >
                  <BiFile size={24} /> {t('about.cv')}
               </button>
               <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-purple-300 bg-purple-300/60 py-3 text-purple-600 transition-shadow duration-300 hover:cursor-pointer hover:shadow-md dark:bg-purple-300/40 dark:text-purple-200 dark:hover:shadow-purple-300/20">
                  <BiCode size={24} /> {t('about.projects')}
               </button>
            </ScrollReveal>
         </section>
      </ScrollReveal>
   );
}
