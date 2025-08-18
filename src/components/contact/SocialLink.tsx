import { type IconType } from 'react-icons';

interface SocialLinkProps {
   icon: IconType;
   name: string;
   username: string;
   bgColor: string;
   iconColor: string;
   className?: string;
}

export const SocialLink = ({
   icon: Icon,
   name,
   username,
   bgColor,
   iconColor,
   className = '',
}: SocialLinkProps) => {
   return (
      <div
         className={`flex w-full flex-wrap gap-2 rounded-lg bg-purple-200/30 p-2 sm:w-auto sm:grow dark:bg-slate-800/30 ${className}`}
      >
         <span className={`rounded-lg ${bgColor} p-3`}>
            <Icon size={32} className={iconColor} />
         </span>
         <span className="flex flex-col items-start justify-center">
            <p className="text-lg font-semibold dark:text-white">{name}</p>
            <p className="text-gray-600 dark:text-gray-300">{username}</p>
         </span>
      </div>
   );
};
