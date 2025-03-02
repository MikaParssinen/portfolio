import React, { useState, useEffect } from 'react';
import StarryBackground from './components/layout/StarryBackground.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Education from './components/sections/Education.jsx';
import Contact from './components/sections/Contact.jsx';
import ProjectModal from './components/ui/ProjectModal.jsx';
import ThankYouModal from './components/ui/ThankYouModal.jsx';
import { useScrollPosition } from './hooks/useScrollPosition';

const Portfolio = () => {
  // State management
  const [darkMode, setDarkMode] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition, activeSection } = useScrollPosition();

  // Check for thank-you hash in URL
  useEffect(() => {
    if (window.location.hash === '#thank-you') {
      setShowThankYou(true);
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);
  
  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedProject || showThankYou) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject, showThankYou]);

  // Handle navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <StarryBackground />
      
      {/* Overlay for better content visibility */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.2) 0%, rgba(17, 24, 39, 0.3) 50%, rgba(17, 24, 39, 0.4) 100%)',
        }}
      />
      
      <Header 
        activeSection={activeSection}
        scrollPosition={scrollPosition}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects setSelectedProject={setSelectedProject} />
      <Education />
      <Contact setShowThankYou={setShowThankYou} />
      
      <Footer />
      
      {/* Modals */}
      {showThankYou && (
        <ThankYouModal onClose={() => setShowThankYou(false)} />
      )}
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;