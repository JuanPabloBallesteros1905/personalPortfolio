import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../ui/Card';
import clsx from 'clsx';

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  color: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@developer.com',
    href: 'mailto:hello@developer.com',
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'text-green-600 dark:text-green-400'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
    color: 'text-red-600 dark:text-red-400'
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
    color: 'text-purple-600 dark:text-purple-400'
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-sky-500 dark:hover:text-sky-400'
  }
];

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <Card className="p-6" gradient>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className={clsx(
                'w-10 h-10 rounded-lg flex items-center justify-center',
                'bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700',
                'transition-colors'
              )}>
                <method.icon className={clsx('w-5 h-5', method.color)} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {method.label}
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </Card>

      {/* Social Links */}
      <Card className="p-6" gradient>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Follow Me
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'w-12 h-12 rounded-lg flex items-center justify-center',
                'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
                'transition-all duration-200',
                social.color
              )}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </Card>

      {/* Availability */}
      <Card className="p-6" gradient>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Availability
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Available for new projects
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>• Mobile app development</p>
            <p>• Backend API development</p>
            <p>• Technical consulting</p>
            <p>• Code reviews</p>
          </div>
        </div>
      </Card>
    </div>
  );
};