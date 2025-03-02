import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle.jsx';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-opacity-70 bg-gray-800 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>
          About <span className="text-blue-400">Me</span>
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/mika.png"
              alt="Mika Pärssinen"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Computer Science Student
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              As a Computer Science student at Mälardalen University, I am deeply passionate about learning and mastering new technologies.
              I have a strong foundation in programming and algorithms, and I'm particularly interested in Machine Learning and AI applications.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              My favorite course is applied machine learning, which focused on hands-on implementation
              from data preprocessing to deep learning. Through various projects, I've developed skills
              in supervised and unsupervised learning while emphasizing ethical AI development.
            </p>
            <p className="text-gray-200 mb-8 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              Outside of academics, I love playing soccer, enjoy building and upgrading computers, and have military experience that helped me develop strong leadership skills.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mikaparssinen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-200 transition duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mika-parssinen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-200 transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mika.77@live.se"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-200 transition duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;