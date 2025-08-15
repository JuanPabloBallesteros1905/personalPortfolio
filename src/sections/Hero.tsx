import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

export const Hero: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />

    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }} />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center space-y-8">
        {/* Profile Image */}
        <motion.div
          className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
          {...fadeInUp}
        >
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
            <Code className="w-12 h-12 text-gray-700" />
          </div>
        </motion.div>


        <motion.div {...fadeInUp} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Juan Pablo 
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-Stack Mobile & Backend Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          Especializado en Flutter, React Native, React, FastApi, y tecnologías web modernas.
Crea aplicaciones móviles escalables y sistemas backend robustos.
          </p>
        </motion.div>

        {/* Tech highlights */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React Native</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Flutter</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React</span>
            
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Nest.js</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
          {/* <Button size="lg" className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </Button> */}
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeInUp} className="flex justify-center gap-6">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);