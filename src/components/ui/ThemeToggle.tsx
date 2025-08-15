import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import clsx from 'clsx';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={clsx(
        'relative w-12 h-6 rounded-full p-1 transition-colors duration-200',
        'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
      )}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={clsx(
          'w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center',
          'transition-all duration-200'
        )}
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-gray-800" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};