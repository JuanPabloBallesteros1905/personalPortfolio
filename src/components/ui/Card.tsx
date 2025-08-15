import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  gradient = false
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={clsx(
        'rounded-2xl backdrop-blur-sm border',
        {
          'bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700': !gradient,
          'bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 border-gray-200/50 dark:border-gray-700/50': gradient,
          'transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10': hover
        },
        className
      )}
    >
      {children}
    </motion.div>
  );
};