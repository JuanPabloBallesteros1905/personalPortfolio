import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Download } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import clsx from 'clsx';

interface MobileAppCardProps {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  platform: 'ios' | 'android' | 'hybrid';
  status: 'completed' | 'in-progress' | 'planning';
  links: {
    appStore?: string;
    playStore?: string;
    github?: string;
    demo?: string;
  };
}

export const MobileAppCard: React.FC<MobileAppCardProps> = ({
  title,
  description,
  technologies,
  images,
  platform,
  status,
  links
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const statusColors = {
    completed: 'success',
    'in-progress': 'warning',
    planning: 'secondary'
  } as const;

  const platformIcons = {
    ios: '🍎',
    android: '🤖',
    hybrid: '📱'
  };

  return (
    <Card className="p-6 group" hover gradient>
      <div className="grid md:grid-cols-2 gap-6">
        {/* App Preview */}
        <div className="relative">
          <div className="relative mx-auto w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">

       
            
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex items-center justify-center text-gray-400"
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
               
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Platform indicator */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-lg">
            {platformIcons[platform]}
          </div>
        </div>

        {/* App Details */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <Badge variant={statusColors[status]} className="mb-3">
                {status.replace('-', ' ')}
              </Badge>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            {/* {links.appStore && (
              <Button variant="primary" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                App Store
              </Button>
            )} */}
            {/* {links.playStore && (
              <Button variant="primary" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Play Store
              </Button>
            )} */}
            {/* {links.github && (
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                Code
              </Button>
            )} */}
            {links.demo && (
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};