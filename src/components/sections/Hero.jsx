import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-transparent relative z-10 pt-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
            <span className="block text-gray-200">Hi, I'm <span className="text-blue-400">Mika Pärssinen</span></span>
            <span className="block mt-2 text-gray-200">Machine Learning Enthusiast</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
            Computer Science student with a passion for Machine Learning, algorithms, and building innovative solutions.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-gray-200 transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium text-gray-200 transition duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
          <div className="mt-10">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce bg-gray-800 p-2 rounded-full"
            >
              <ChevronDown size={24} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;