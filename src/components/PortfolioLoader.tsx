import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/hooks';

interface PortfolioLoaderProps {
   onComplete?: () => void;
   duration?: number;
   showPercentage?: boolean;
   variant?: 'minimal' | 'detailed';
}

export default function PortfolioLoader({
   onComplete,
   duration = 3000,
   showPercentage = true,
   variant = 'minimal',
}: PortfolioLoaderProps) {
   const [progress, setProgress] = useState(0);
   const [currentMessage, setCurrentMessage] = useState(0);
   const { t } = useLanguage();

   const loadingMessages = [
      t('loader.initializing'),
      t('loader.projects'),
      t('loader.experience'),
      t('loader.ready'),
   ];

   useEffect(() => {
      const intervalTime = 50; // 50ms between updates
      const totalSteps = duration / intervalTime;
      const increment = 100 / totalSteps;

      const interval = setInterval(() => {
         setProgress((prev) => {
            if (prev >= 100) {
               clearInterval(interval);
               setTimeout(() => onComplete?.(), 500);
               return 100;
            }
            return Math.min(prev + increment, 100);
         });
      }, intervalTime);

      return () => clearInterval(interval);
   }, [duration, onComplete]);

   useEffect(() => {
      if (variant === 'detailed') {
         const messageIndex = Math.floor(
            (progress / 100) * loadingMessages.length
         );
         setCurrentMessage(Math.min(messageIndex, loadingMessages.length - 1));
      }
   }, [progress, variant, loadingMessages.length]);

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-stone-900 dark:text-white">
         <div className="space-y-6 text-center">
            <div className="relative mx-auto h-16 w-16">
               <div className="border-muted absolute inset-0 rounded-full border-2" />
               <div
                  className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-purple-600 shadow-lg"
                  style={{
                     animationDuration: '1s',
                     filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.3))',
                  }}
               />
               <div
                  className="absolute inset-2 animate-spin rounded-full border border-transparent border-t-purple-400 opacity-60"
                  style={{
                     animationDuration: '2s',
                     animationDirection: 'reverse',
                  }}
               />
            </div>

            <div className="mx-auto w-64">
               <div className="bg-muted h-1 overflow-hidden rounded-full shadow-inner">
                  <div
                     className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-sm transition-all duration-300 ease-out"
                     style={{
                        width: `${progress}%`,
                        boxShadow: '0 0 8px rgba(147, 51, 234, 0.4)',
                     }}
                  />
               </div>
            </div>

            <div className="space-y-1">
               <p className="text-muted-foreground text-sm">
                  {variant === 'detailed'
                     ? loadingMessages[currentMessage]
                     : t('loader.portfolio')}
               </p>
               {showPercentage && (
                  <p className="text-muted-foreground font-mono text-xs">
                     {Math.round(progress)}%
                  </p>
               )}
            </div>
         </div>
      </div>
   );
}
