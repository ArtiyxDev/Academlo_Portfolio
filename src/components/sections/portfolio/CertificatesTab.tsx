import { certificates } from '../../../data/certificates';
import ScrollReveal from '../../ScrollReveal';

export default function CertificatesTab() {
   return (
      <ScrollReveal
         direction="down"
         className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
         {certificates.map((certificate, index) => {
            return (
               <a
                  key={index}
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 overflow-hidden rounded-lg border border-gray-400 bg-purple-50/80 px-3 py-3 dark:border-gray-600 dark:bg-slate-700"
               >
                  <img
                     src={`https://i.postimg.cc/fRMPVrv3/one.png`}
                     alt={`${certificate.name} certificate`}
                  />
               </a>
            );
         })}
      </ScrollReveal>
   );
}
