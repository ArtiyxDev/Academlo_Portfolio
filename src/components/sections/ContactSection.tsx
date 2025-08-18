import type { HtmlHTMLAttributes } from 'react';
import ScrollReveal from '../ScrollReveal';
import {
   BiShareAlt,
   BiLogoGithub,
   BiLogoInstagram,
   BiLogoLinkedin,
} from 'react-icons/bi';
import { ContactForm } from '../contact/ContactForm';
import { SocialLink } from '../contact/SocialLink';
import { useLanguage } from '../../i18n';

interface ContactSectionProps extends HtmlHTMLAttributes<'section'> {
   className?: string;
}

export default function ContactSection({
   className = '',
   id = 'contact',
}: ContactSectionProps) {
   const { t } = useLanguage();

   const socialLinks = [
      {
         icon: BiLogoLinkedin,
         name: t('contact.social.links.linkedin.name'),
         username: t('contact.social.links.linkedin.username'),
         bgColor: 'bg-blue-500/10',
         iconColor: 'text-blue-500',
      },
      {
         icon: BiLogoInstagram,
         name: t('contact.social.links.instagram.name'),
         username: t('contact.social.links.instagram.username'),
         bgColor: 'bg-pink-500/10',
         iconColor: 'text-pink-500',
      },
      {
         icon: BiLogoGithub,
         name: t('contact.social.links.github.name'),
         username: t('contact.social.links.github.username'),
         bgColor: 'bg-gray-900/10',
         iconColor: 'text-gray-900',
      },
   ];

   return (
      <section
         className={'scroll-mt-8 px-8 pt-8 pb-6 text-center ' + className}
         id={id}
      >
         <ScrollReveal>
            <h2 className="bg-gradient-to-r from-purple-800 via-purple-600 via-30% to-purple-400 bg-clip-text text-5xl font-semibold text-transparent">
               {t('contact.title')}
            </h2>
            <p className="pt-3 text-lg text-gray-600 dark:text-gray-300">
               {t('contact.subtitle')}
            </p>
         </ScrollReveal>

         <ScrollReveal className="mt-6 flex w-full flex-col items-center justify-between gap-2 rounded-xl border border-gray-300 bg-purple-50/90 px-3 py-2 dark:border-gray-600 dark:bg-slate-700">
            <p className="text-main w-full text-left text-3xl font-semibold">
               {t('contact.form.title')}
            </p>
            <p className="w-full text-left dark:text-gray-200">
               {t('contact.form.description')}
            </p>

            <ContactForm />

            <ScrollReveal className="flex w-full flex-col gap-3 pt-6">
               <span className="flex items-center justify-start gap-4">
                  <BiShareAlt size={42} className="text-cyan-500" />
                  <p className="text-xl font-semibold dark:text-white">
                     {t('contact.social.title')}
                  </p>
               </span>

               <div className="flex flex-col gap-2 sm:flex-row">
                  {socialLinks.map((link) => (
                     <SocialLink key={link.name} {...link} />
                  ))}
               </div>
            </ScrollReveal>
         </ScrollReveal>
      </section>
   );
}
