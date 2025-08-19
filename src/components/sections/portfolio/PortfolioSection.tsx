import { useState, type HtmlHTMLAttributes } from 'react';
import PortfolioTopCard from '../../PortfolioTopCard';
import { BiCode } from 'react-icons/bi';
import { LiaCertificateSolid } from 'react-icons/lia';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import ScrollReveal from '../../ScrollReveal'; // Importa el nuevo componente
import ShowcaseTabs from './ShowcaseTabs';
import ProjectsTab from './ProjectsTab';
import CertificatesTab from './CertificatesTab';
import TechsTab from './TechsTab';
import { useLanguage } from '../../../i18n';

interface PortfolioSectionProps extends HtmlHTMLAttributes<'section'> {
   className?: string;
}

export default function PortfolioSection({
   className = '',
   id = 'projects',
}: PortfolioSectionProps) {
   const { t } = useLanguage();
   const [showCaseIndex, setShowCaseIndex] = useState<
      'projects' | 'certificates' | 'tech'
   >('projects');
   return (
      <section id={id} className={'scroll-mt-10 px-8 pt-8 pb-6 ' + className}>
         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-around">
            <ScrollReveal className="w-full">
               <PortfolioTopCard
                  icon={BiCode}
                  title={t('portfolio.card.project')}
                  description={t('portfolio.card.project.description')}
                  count={1}
               />
            </ScrollReveal>
            <ScrollReveal className="w-full">
               <PortfolioTopCard
                  icon={LiaCertificateSolid}
                  title={t('portfolio.card.certificate')}
                  description={t('portfolio.card.certificate.description')}
                  count={1}
               />
            </ScrollReveal>
            <ScrollReveal className="w-full">
               <PortfolioTopCard
                  icon={LuBriefcaseBusiness}
                  title={t('portfolio.card.jobexperience')}
                  description={t('portfolio.card.jobexperience.description')}
                  count={0}
               />
            </ScrollReveal>
         </div>
         <ScrollReveal className="pt-8 text-center">
            <p className="bg-gradient-to-r from-purple-800 via-purple-600 via-30% to-purple-400 bg-clip-text text-3xl font-semibold text-transparent">
               {t('portfolio.show')}
            </p>
            <p className="pt-4 text-gray-600 dark:text-gray-300">
               {t('portfolio.description')}
            </p>
         </ScrollReveal>
         <ScrollReveal className="pt-6">
            <ShowcaseTabs
               activeTab={showCaseIndex}
               setActiveTab={setShowCaseIndex}
            />
         </ScrollReveal>
         <ScrollReveal className="pt-6">
            {(() => {
               switch (showCaseIndex) {
                  case 'projects':
                     return <ProjectsTab />;
                  case 'certificates':
                     return <CertificatesTab />;
                  case 'tech':
                     return <TechsTab />;
                  default:
                     return <ProjectsTab />;
               }
            })()}
         </ScrollReveal>
      </section>
   );
}
