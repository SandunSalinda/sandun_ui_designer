import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;