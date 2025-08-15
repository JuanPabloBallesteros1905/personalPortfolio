import React from 'react';
import { motion } from 'framer-motion';
import { MobileAppCard } from '../components/mobile/MobileAppCard';
import { staggerContainer, fadeInUp } from '../utils/animations';

const mobileProjects = [
  {
    title: 'Fraktur',
    description: 'Software de gestión de médicos y pacientes para optimizar cargas de trabajo y tiempos en la clinica del cliente',
    technologies: ['Flutter', 'Firebase'],
    images: ['https://i.ibb.co/s95kXsQ6/IMG-6022.png'],
    platform: 'hybrid' as const,
    status: 'completed' as const,
    links: {
      appStore: '#',
      playStore: '#',
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'CocinaIA',
    description: 'Genera ideas de recetas apartir de tus ingredientes favoritos o accede a recetas de todo el mundo desde tu app',
    technologies: ['Flutter', 'Supabase', 'DeepSeek'],
    images: ['https://i.ibb.co/QFkjTBC8/Screenshot-1753152474.jpg'],
    platform: 'hybrid' as const,
    status: 'completed' as const,
    links: {
      appStore: '#',
      playStore: '#',
      github: '#'
    }
  },
  {
    title: 'Deudors',
    description: 'Gestiona deudas de tus clientes, pagos y cobros, y haz que tus clientes puedan pagar de manera segura y eficiente',
    technologies: ['React Native', 'GraphQL', 'PostgreSQL', 'WebSocket'],
    images: ['https://private-user-images.githubusercontent.com/110272090/379516270-371ce651-4112-4ac9-92ca-33e31f17155f.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMxNDkxMzEsIm5iZiI6MTc1MzE0ODgzMSwicGF0aCI6Ii8xMTAyNzIwOTAvMzc5NTE2MjcwLTM3MWNlNjUxLTQxMTItNGFjOS05MmNhLTMzZTMxZjE3MTU1Zi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDcyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA3MjJUMDE0NzExWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjE1Y2Y1YTliYTZiZGEwNWM0ZjQ4YjZjMTAwODcwNmIwOTNkNTYxMGQyMGVlYmVmOWVkYzhmNWU4ODA1NjU5NyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.AFtQAGPbNSU3-SK7xocP7RjBlnUkmhJX8BKQMEKd6w0'],
    platform: 'hybrid' as const,
    status: 'in-progress' as const,
    links: {
      github: '#',
      demo: '#'
    }
  },
  ,
  {
    title: 'Catalogo Mobile',
    description: 'Healthcare app connecting patients with doctors, featuring appointment scheduling and health monitoring.',
    technologies: ['Flutter', 'AWS Lambda', 'DynamoDB', 'Twilio'],
    images: ['https://private-user-images.githubusercontent.com/110272090/379514113-a7405b0b-8b1b-48f3-8e59-e1841be615be.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMxNDkyMDMsIm5iZiI6MTc1MzE0ODkwMywicGF0aCI6Ii8xMTAyNzIwOTAvMzc5NTE0MTEzLWE3NDA1YjBiLThiMWItNDhmMy04ZTU5LWUxODQxYmU2MTViZS5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDcyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA3MjJUMDE0ODIzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NjhmODgxYjcwYjYyOTI5NDRjMzFkYmJkN2M3N2ZjNDRmMmM3YjRmNzZiMDMxN2VjODZiZTQ0MDEzMzJhZDIwOSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.lXw_41oFhwde8XZ0F1hY8G7lyqN5ZvlzFJy-afbAT_I'],
    platform: 'hybrid' as const,
    status: 'planning' as const,
    links: {
      github: '#'
    }
  },
  {
    title: 'Nedical Health' ,
    description: 'Gestiona Entrega de medicamentos de manera eficiente (App complemto de Fraktur)',
    technologies: ['Flutter', 'AWS Lambda', 'DynamoDB', 'Twilio'],
    images: ['https://i.ibb.co/RTJV7H5h/IMG-6024.png'],
    platform: 'hybrid' as const,
    status: 'planning' as const,
    links: {
      github: '#'
    }
  },

];

//https://i.ibb.co/RTJV7H5h/IMG-6024.png

export const MobileProjects: React.FC = () => {
  return (
    <section id="mobile-projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projectos Móviles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Casos de uso para soluciones mobiles
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mobileProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className={index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'}
            >
              <MobileAppCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};