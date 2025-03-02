import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll position
      setScrollPosition(window.scrollY);
      
      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      
      // Special case for bottom of page - highlight contact section
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrolledToBottom) {
        setActiveSection('contact');
        return;
      }
      
      // Normal section detection
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollPosition, activeSection };
};