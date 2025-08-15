import { useInView, motion } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
   children: ReactNode;
   direction?: 'up' | 'down' | 'left' | 'right';
   delay?: number;
   duration?: number;
   distance?: number;
   className?: string;
   once?: boolean;
}

export default function ScrollReveal({
   children,
   direction = 'up',
   delay = 0,
   duration = 0.6,
   distance = 60,
   className = '',
   once = true,
}: ScrollRevealProps) {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once,
   });

   const directionOffset = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { y: 0, x: distance },
      right: { y: 0, x: -distance },
   };

   return (
      <motion.div
         ref={ref}
         initial={{
            opacity: 0,
            ...directionOffset[direction],
         }}
         animate={
            isInView
               ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                 }
               : {
                    opacity: 0,
                    ...directionOffset[direction],
                 }
         }
         transition={{
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
         }}
         className={className}
      >
         {children}
      </motion.div>
   );
}
