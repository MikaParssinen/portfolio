import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-70 border-t border-gray-800 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-gray-400">© 2025 Mika Pärssinen. All rights reserved.</span>
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/mikaparssinen" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/mika-parssinen" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:mika.77@live.se" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;