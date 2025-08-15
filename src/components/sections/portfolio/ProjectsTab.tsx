import clsx from 'clsx';
import { projects } from '../../../data/projects';
import { IoArrowForwardOutline, IoOpenOutline } from 'react-icons/io5';
import ScrollReveal from '../../ScrollReveal';

interface ShowcaseTabsProps {
   className?: string;
}

export default function ProjectsTab({ className = '' }: ShowcaseTabsProps) {
   return (
      <ScrollReveal
         direction="right"
         className={clsx('grid grid-cols-1 gap-4 md:grid-cols-2' + className)}
      >
         {projects.map((project, index) => {
            return (
               <ScrollReveal
                  key={index}
                  className="flex flex-col gap-4 overflow-hidden rounded-lg border border-gray-400 bg-purple-50/80 px-3 py-3 dark:border-gray-600 dark:bg-slate-700"
               >
                  <img
                     src={`../src/assets/previews/projects/${project.poster}`}
                     alt={project.title}
                     className="w-full rounded-lg"
                  />
                  <p className="text-xl font-semibold dark:text-white">
                     {project.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                     {project.description}
                  </p>
                  <div className="flex shrink-0 justify-between px-0.5">
                     <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500"
                     >
                        Live Demo
                        <IoOpenOutline />
                     </a>
                     <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-300 px-2 py-1 hover:bg-gray-400 dark:border-slate-500 dark:bg-slate-800 dark:text-white hover:dark:bg-slate-600"
                     >
                        Details <IoArrowForwardOutline />
                     </a>
                  </div>
               </ScrollReveal>
            );
         })}
      </ScrollReveal>
   );
}
