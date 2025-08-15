import { type IconType } from 'react-icons';
import {
   SiCss3,
   SiExpress,
   SiHtml5,
   SiJavascript,
   SiJsonwebtokens,
   SiMongodb,
   SiNestjs,
   SiNextdotjs,
   SiNodedotjs,
   SiPostgresql,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/si';

interface TechIcon {
   icon: IconType;
   name: string;
   size: number;
   color: string;
}

export const techStack: TechIcon[] = [
   // 🖌️ Frontend
   {
      icon: SiHtml5,
      name: 'HTML5',
      size: 32,
      color: '#e34c26',
   },
   {
      icon: SiCss3,
      name: 'CSS3',
      size: 32,
      color: '#1572b6',
   },
   {
      icon: SiJavascript,
      name: 'JavaScript',
      size: 32,
      color: '#f0db4f',
   },
   {
      icon: SiTypescript,
      name: 'TypeScript',
      size: 32,
      color: '#3178c6',
   },
   {
      icon: SiTailwindcss,
      name: 'TailwindCSS',
      size: 32,
      color: '#38bdf8',
   },
   {
      icon: SiNextdotjs,
      name: 'Next.js',
      size: 32,
      color: '#000000',
   },

   // ⚙️ Backend
   {
      icon: SiNodedotjs,
      name: 'Node.js',
      size: 32,
      color: '#68a063',
   },
   {
      icon: SiExpress,
      name: 'Express.js',
      size: 32,
      color: '#61dafb',
   },
   {
      icon: SiNestjs,
      name: 'Nest.js',
      size: 32,
      color: '#e0234e',
   },
   {
      icon: SiJsonwebtokens,
      name: 'JWT',
      size: 32,
      color: '#e34c26',
   },

   // 🗄️ Bases de Datos
   {
      icon: SiPostgresql,
      name: 'PostgreSQL',
      size: 32,
      color: '#336791',
   },
   {
      icon: SiMongodb,
      name: 'MongoDB',
      size: 32,
      color: '#47a24b',
   },
];
