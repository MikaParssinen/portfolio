import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = ({ activeSection, scrollPosition, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const minScroll = 0;
  const maxScroll = 200;
  const minOpacity = 0.9;
  const maxOpacity = 0.5;
  
  const calculateOpacity = () => {
    if (scrollPosition <= minScroll) return minOpacity;
    if (scrollPosition >= maxScroll) return maxOpacity;
    
    // Linear interpolation between min and max
    return minOpacity + ((scrollPosition - minScroll) / (maxScroll - minScroll)) * (maxOpacity - minOpacity);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="fixed w-full z-50 shadow-lg transition-colors duration-300" 
      style={{ 
        backgroundColor: `rgba(31, 41, 55, ${calculateOpacity()})`,
        backdropFilter: 'blur(5px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center text-blue-400 font-bold text-xl hover:text-blue-300 transition-colors focus:outline-none"
              >
                <div className="bg-gray-700 p-1.5 rounded-md mr-2 flex items-center justify-center">
                  <Brain size={18} className="text-blue-300" />
                </div>
                Mika Pärssinen
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
                    activeSection === section
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: `rgba(31, 41, 55, ${maxOpacity})` }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeSection === section
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;