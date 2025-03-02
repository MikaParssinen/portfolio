import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <img 
        src={project.imageSrc || project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
        <p className="text-gray-200 mb-4" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-700 text-blue-300 py-1 px-2 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }} 
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            View Details <ExternalLink size={16} className="ml-1" />
          </button>
          <a 
            href={project.githubRepo || "https://github.com/mikaparssinen"} 
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            Github <Github size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;