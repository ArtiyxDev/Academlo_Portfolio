import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterProps {
   phrases: string[];
   typeSpeed?: number;
   deleteSpeed?: number;
   delayBetweenPhrases?: number;
   className?: string;
}

export function TypeWritter({
   phrases,
   typeSpeed = 100,
   deleteSpeed = 50,
   delayBetweenPhrases = 1500,
   className = '',
}: TypewriterProps) {
   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
   const [currentText, setCurrentText] = useState('');
   const [isDeleting, setIsDeleting] = useState(false);
   const [isWaiting, setIsWaiting] = useState(false);

   useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isWaiting) {
         const waitTimer = setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
         }, delayBetweenPhrases);

         return () => clearTimeout(waitTimer);
      }

      const timer = setTimeout(
         () => {
            if (!isDeleting) {
               if (currentText.length < currentPhrase.length) {
                  setCurrentText(
                     currentPhrase.slice(0, currentText.length + 1)
                  );
               } else {
                  setIsWaiting(true);
               }
            } else {
               if (currentText.length > 0) {
                  setCurrentText(currentText.slice(0, -1));
               } else {
                  setIsDeleting(false);
                  setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
               }
            }
         },
         isDeleting ? deleteSpeed : typeSpeed
      );

      return () => clearTimeout(timer);
   }, [
      isDeleting,
      isWaiting,
      currentPhraseIndex,
      phrases,
      typeSpeed,
      deleteSpeed,
      delayBetweenPhrases,
      currentText,
   ]);

   return (
      <span className={`inline-block ${className}`}>
         {currentText}
         <motion.span
            animate={{ opacity: [1, 0], scaleY: [1, 0.9] }}
            transition={{
               duration: 0.4,
               repeat: Infinity,
               repeatType: 'reverse',
               ease: 'easeInOut',
            }}
            className="ml-1 inline-block h-[1em] w-0.5 bg-purple-800 align-middle"
         />
      </span>
   );
}
