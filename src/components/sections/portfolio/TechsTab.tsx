import { techStack } from '../../../data/techs';
import ScrollReveal from '../../ScrollReveal';

interface ShowcaseTabsProps {
   className?: string;
}

export default function TechsTab({ className = '' }: ShowcaseTabsProps) {
   return (
      <ScrollReveal
         direction="left"
         className={
            'grid grid-cols-2 gap-5 overflow-hidden sm:grid-cols-3 md:grid-cols-4 ' +
            className
         }
      >
         {techStack.map((tech, index) => {
            return (
               <ScrollReveal
                  key={index}
                  className="flex w-auto flex-col items-center justify-center gap-1.5 rounded-xl bg-purple-50/90 py-6 dark:bg-slate-700"
               >
                  <tech.icon size={64} color={tech.color} />
                  <p className="text-xl font-semibold dark:text-white">
                     {tech.name}
                  </p>
               </ScrollReveal>
            );
         })}
         {}
      </ScrollReveal>
   );
}
