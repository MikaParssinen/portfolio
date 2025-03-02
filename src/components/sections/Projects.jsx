import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import { mlProjects, mobileProjects, bashProjects, aiProjects } from '../../data/projects.js';

const Projects = ({ setSelectedProject }) => {
  const [activeProjectCategory, setActiveProjectCategory] = useState('machine-learning');

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 relative z-10 bg-opacity-70">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>
          My <span className="text-blue-400">Projects</span>
        </SectionTitle>
        
        {/* Project Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button 
            onClick={() => setActiveProjectCategory('machine-learning')} 
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeProjectCategory === 'machine-learning' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Machine Learning
          </button>
          <button 
            onClick={() => setActiveProjectCategory('ai')} 
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeProjectCategory === 'ai' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            AI Projects
          </button>
          <button 
            onClick={() => setActiveProjectCategory('mobile')} 
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeProjectCategory === 'mobile' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Mobile Apps
          </button>
          <button 
            onClick={() => setActiveProjectCategory('bash')} 
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              activeProjectCategory === 'bash' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Bash
          </button>
        </div>

        {/* Project Grid */}
        <div 
          key={activeProjectCategory} 
          className={`transition-all duration-300 ease-out ${
            (activeProjectCategory === 'bash' && bashProjects.length === 1) || 
            (activeProjectCategory === 'mobile' && mobileProjects.length === 1) || 
            (activeProjectCategory === 'machine-learning' && mlProjects.length === 1) 
              ? 'flex justify-center' 
              : 'grid md:grid-cols-2 gap-8'
          }`}
        >
          {/* Machine Learning Projects */}
          {activeProjectCategory === 'machine-learning' && 
            mlProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))
          }
          
          {/* AI Projects (Coming Soon) */}
          {activeProjectCategory === 'ai' && (
            <div className="col-span-2 flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-gray-900 rounded-xl p-8 shadow-xl text-center max-w-3xl">
                <h3 className="text-3xl font-bold text-blue-400 mb-4">AI Projects Coming Soon</h3>
                <p className="text-gray-200 text-xl mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  I'm currently working on several exciting AI projects that will be showcased here.
                </p>
                <p className="text-gray-300 mb-6">
                  These projects will demonstrate core AI techniques including search algorithms, 
                  constraint satisfaction problems, metaheuristics, adversarial search, and neural networks 
                  from my university coursework.
                </p>
                <p className="text-gray-400 italic">
                  Check back soon to see what I'm building!
                </p>
              </div>
            </div>
          )}
          
          {/* Mobile Projects */}
          {activeProjectCategory === 'mobile' && 
            mobileProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))
          }
          
          {/* Bash Projects */}
          {activeProjectCategory === 'bash' && 
            bashProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;