import React from 'react';
import { motion } from 'framer-motion';
import { TechStackDisplay } from '../components/backend/TechStackDisplay';
import { EndpointDemo } from '../components/backend/EndpointDemo';
import { fadeInUp } from '../utils/animations';

export const BackendSkills: React.FC = () => {
  return (
    <section id="backend-skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Backend Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern backend technologies, API development, and database management
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technology Stack
            </h3>
            <TechStackDisplay />
          </motion.div>

          {/* API Demo */}
          {/* <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Live API Demo
            </h3>
            <EndpointDemo />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};