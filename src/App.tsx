import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { MobileProjects } from './sections/MobileProjects';
import { BackendSkills } from './sections/BackendSkills';
import { Contact } from './sections/Contact';
import { useTheme } from './hooks/useTheme';
import { worker } from './mocks/browser';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
  
    if (import.meta.env.DEV) {
      worker.start({
        onUnhandledRequest: 'bypass',
      });
    }
  }, []);

  return (
    <div className={`min-h-screen ${theme}`}>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <MobileProjects />
        <BackendSkills />
        <Contact />
      </main>
      <Footer />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === 'dark' ? '#374151' : '#ffffff',
            color: theme === 'dark' ? '#ffffff' : '#000000',
          },
        }}
      />
    </div>
  );
}

export default App;