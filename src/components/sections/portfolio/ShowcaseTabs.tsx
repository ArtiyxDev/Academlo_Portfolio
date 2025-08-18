'use client';

import type React from 'react';

import {
   useState,
   useEffect,
   useRef,
   useCallback,
   type Dispatch,
   type SetStateAction,
   useMemo,
} from 'react';
import { motion } from 'motion/react';
import { BiCode, BiLayer } from 'react-icons/bi';
import { LiaAwardSolid } from 'react-icons/lia';
import clsx from 'clsx';
import { useLanguage } from '../../../i18n';

type ShowcaseOption = 'projects' | 'certificates' | 'tech';

interface Tab {
   id: ShowcaseOption;
   label: string;
   icon: React.ElementType;
   ariaLabel: string;
}

const getTabs = (t: (key: string) => string): Tab[] => [
   {
      id: 'projects',
      label: t('portfolio.tabs.projects'),
      icon: BiCode,
      ariaLabel: t('portfolio.tabs.projects.aria'),
   },
   {
      id: 'certificates',
      label: t('portfolio.tabs.certificates'),
      icon: LiaAwardSolid,
      ariaLabel: t('portfolio.tabs.certificates.aria'),
   },
   {
      id: 'tech',
      label: t('portfolio.tabs.techs'),
      icon: BiLayer,
      ariaLabel: t('portfolio.tabs.techs.aria'),
   },
];

interface IndicatorStyle {
   left: number;
   width: number;
}

interface ShowcaseTabsProps {
   activeTab: ShowcaseOption;
   setActiveTab: Dispatch<SetStateAction<ShowcaseOption>>;
   className?: string;
}

export default function ShowcaseTabs({
   activeTab,
   setActiveTab,
   className,
}: ShowcaseTabsProps) {
   const { t } = useLanguage();
   const tabs = useMemo(() => getTabs(t), [t]);
   const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
      left: 0,
      width: 0,
   });
   const [isInitialized, setIsInitialized] = useState(false);
   const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
   const containerRef = useRef<HTMLDivElement>(null);

   const updateIndicator = useCallback(() => {
      const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const activeTabElement = tabsRef.current[activeTabIndex];

      if (activeTabElement && containerRef.current) {
         const containerRect = containerRef.current.getBoundingClientRect();
         const tabRect = activeTabElement.getBoundingClientRect();

         setIndicatorStyle({
            left: tabRect.left - containerRect.left,
            width: tabRect.width,
         });

         if (!isInitialized) {
            setIsInitialized(true);
         }
      }
   }, [activeTab, isInitialized, tabs]);

   useEffect(() => {
      updateIndicator();
   }, [updateIndicator]);

   useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
         updateIndicator();
      });

      if (containerRef.current) {
         resizeObserver.observe(containerRef.current);
      }

      return () => {
         resizeObserver.disconnect();
      };
   }, [updateIndicator]);

   const handleTabClick = (tabId: ShowcaseOption) => {
      setActiveTab(tabId);
   };

   const handleKeyDown = (
      event: React.KeyboardEvent,
      tabId: ShowcaseOption
   ) => {
      if (event.key === 'Enter' || event.key === ' ') {
         event.preventDefault();
         handleTabClick(tabId);
      }
   };

   return (
      <div
         ref={containerRef}
         className={clsx(
            'relative flex w-full justify-around gap-2 rounded-xl border border-gray-300 bg-purple-50/20 p-2 backdrop-blur-sm dark:border-gray-600 dark:bg-slate-700',
            className
         )}
         role="tablist"
         aria-label={t('portfolio.tabs.nav.aria')}
      >
         {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
               <button
                  key={tab.id}
                  ref={(el) => {
                     tabsRef.current[index] = el;
                  }}
                  onClick={() => handleTabClick(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                  className={clsx(
                     'relative z-10 flex w-1/3 flex-col items-center justify-center gap-2 rounded-lg px-2 py-3 transition-all duration-300 ease-out hover:cursor-pointer',
                     'focus-visible:ring-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                     'hover:bg-purple-50/30',
                     isActive && 'text-primary'
                  )}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  aria-label={tab.ariaLabel}
                  tabIndex={isActive ? 0 : -1}
               >
                  <Icon
                     size={24}
                     className={clsx(
                        'transition-all duration-300 ease-out',
                        isActive
                           ? 'scale-110 rotate-3 text-purple-600 dark:text-purple-500'
                           : 'hover:text-foreground text-gray-800 dark:text-white'
                     )}
                  />
                  <span
                     className={clsx(
                        'ease-ou text-sm font-medium transition-colors duration-300',
                        isActive
                           ? 'text-purple-600 dark:text-purple-500'
                           : 'hover:text-foreground text-gray-600 dark:text-gray-300'
                     )}
                  >
                     {tab.label}
                  </span>
               </button>
            );
         })}

         {isInitialized && (
            <motion.div
               className="absolute top-2 bottom-2 z-0 rounded-lg border border-purple-50/80 bg-purple-900/10 dark:border-slate-600 dark:bg-slate-800"
               initial={false}
               animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
               }}
               transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 35,
                  mass: 0.8,
               }}
            />
         )}
      </div>
   );
}
