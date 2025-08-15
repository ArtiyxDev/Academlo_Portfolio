import { type IconType } from 'react-icons';
import { motion } from 'motion/react';

export interface AvatarIcon {
   Icon: IconType;
   size?: number;
   color?: string;
   hoverColor?: string;
}

interface AnimatedAvatarProps {
   src: string;
   alt?: string;
   avatarSize?: number;
   icons: AvatarIcon[];
   radius?: number;
   containerHeight?: number;
   animationDelay?: number;
   iconDelay?: number;
   className?: string;
}

export default function AnimatedAvatar({
   src,
   alt = 'Avatar',
   avatarSize = 320,
   icons,
   radius = 160,
   containerHeight = 384,
   animationDelay = 0.5,
   iconDelay = 0.1,
   className = '',
}: AnimatedAvatarProps) {
   return (
      <div
         className={`relative my-8 flex items-center justify-center ${className}`}
         style={{ height: containerHeight }}
      >
         <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
               duration: 1.2,
               ease: [0.25, 0.46, 0.45, 0.94],
               delay: animationDelay,
            }}
            className="z-10 rounded-full"
            style={{ height: avatarSize }}
         />

         <motion.div
            className="absolute rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
               duration: 1.5,
               delay: animationDelay + 0.3,
               ease: 'easeOut',
            }}
            style={{
               width: radius * 2.2,
               height: radius * 2.2,
            }}
         />

         {icons.map(
            ({ Icon, size = 32, color = '#8B5CF6', hoverColor }, index) => {
               const count = icons.length;
               const angle = Math.PI - (Math.PI / (count + 1)) * (index + 1);
               const x = radius * Math.cos(angle);
               const y = -radius * Math.sin(angle);

               return (
                  <motion.div
                     key={index}
                     className="absolute cursor-pointer"
                     style={{
                        top: '50%',
                        left: '50%',
                     }}
                     initial={{
                        x: '-50%',
                        y: '-50%',
                        scale: 0,
                        opacity: 0,
                        rotate: -360,
                     }}
                     animate={{
                        x: `calc(-50% + ${x}px)`,
                        y: `calc(-50% + ${y}px)`,
                        scale: 1,
                        opacity: 1,
                        rotate: 0,
                     }}
                     whileHover={{
                        scale: 1.3,
                        rotate: 15,
                        transition: { duration: 0.2 },
                     }}
                     whileTap={{ scale: 0.9 }}
                     transition={{
                        delay: animationDelay + 1 + index * iconDelay,
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                        mass: 0.8,
                     }}
                  >
                     <motion.div
                        className="rounded-full p-1.5"
                        whileHover={{
                           boxShadow: `0 0 20px ${hoverColor || color}40`,
                        }}
                        transition={{ duration: 0.3 }}
                     >
                        <Icon
                           size={size}
                           color={color}
                           className="transition-colors duration-300 dark:text-white"
                        />
                     </motion.div>
                  </motion.div>
               );
            }
         )}
      </div>
   );
}
