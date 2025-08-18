import type { IconType } from 'react-icons';
import { BiNavigation } from 'react-icons/bi';

interface PortfolioTopCardProps {
   className?: string;
   icon: IconType;
   title: string;
   count: number;
   description: string;
}

export default function PortfolioTopCard({
   className = '',
   icon,
   title,
   count,
   description,
}: PortfolioTopCardProps) {
   return (
      <div
         className={
            'flex flex-col rounded-xl border border-gray-300 bg-purple-50 p-6 shadow-sm dark:border-gray-600 dark:bg-slate-700 ' +
            className
         }
      >
         <div className="flex items-center justify-between text-gray-800 dark:text-white">
            <span className="rounded-full bg-gray-200 p-2 dark:bg-gray-500">
               {icon({ size: 48 })}
            </span>
            <span className="text-3xl font-semibold">{count}</span>
         </div>
         <div className="pt-3">
            <p className="font-semibold dark:text-white">{title}</p>
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
               <p className="text-xs">{description}</p>
               <BiNavigation size={18} className="hover:cursor-pointer" />
            </div>
         </div>
      </div>
   );
}
