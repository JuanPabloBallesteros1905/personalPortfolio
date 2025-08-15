import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import clsx from 'clsx';

interface TechStackItem {
  name: string;
  level: number;
  color: string;
  icon: string;
  category: 'backend' | 'database' | 'cloud' | 'tools';
}

const techStack: TechStackItem[] = [
  { name: 'Node.js', level: 90, color: 'bg-green-500', icon: '⚡', category: 'backend' },
  { name: 'Express.js', level: 85, color: 'bg-gray-600', icon: '🚀', category: 'backend' },
  { name: 'Python', level: 80, color: 'bg-blue-500', icon: '🐍', category: 'backend' },
  { name: 'MongoDB', level: 85, color: 'bg-green-600', icon: '🍃', category: 'database' },
  { name: 'PostgreSQL', level: 80, color: 'bg-blue-600', icon: '🐘', category: 'database' },
  { name: 'Redis', level: 75, color: 'bg-red-500', icon: '⚡', category: 'database' },
  { name: 'AWS', level: 75, color: 'bg-orange-500', icon: '☁️', category: 'cloud' },
  { name: 'Docker', level: 80, color: 'bg-blue-400', icon: '🐳', category: 'tools' },
  { name: 'GraphQL', level: 70, color: 'bg-pink-500', icon: '📊', category: 'backend' },
  { name: 'Firebase', level: 85, color: 'bg-yellow-500', icon: '🔥', category: 'cloud' }
];

const categories = [
  { key: 'backend', label: 'Backend', color: 'text-blue-600' },
  { key: 'database', label: 'Database', color: 'text-green-600' },
  { key: 'cloud', label: 'Cloud', color: 'text-purple-600' },
  { key: 'tools', label: 'DevOps', color: 'text-orange-600' }
];

export const TechStackDisplay: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredTech = selectedCategory === 'all' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={clsx(
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedCategory === 'all'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          )}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={clsx(
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedCategory === category.key
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{tech.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h4>
                  <Badge variant="secondary" size="sm">
                    {categories.find(c => c.key === tech.category)?.label}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  {/* <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {tech.level}%
                  </span> */}
                </div>
                {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={clsx(tech.color, 'h-2 rounded-full')}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div> */}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};