import React from 'react';
import { X as Close } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg max-w-3xl w-full text-left relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <Close size={24} />
        </button>
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
            {project.fullReport.title}
          </h2>
          <p className="text-gray-400 mb-6">
            By {project.fullReport.authors} | {project.fullReport.date}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Abstract</h3>
            <p className="text-gray-200">{project.fullReport.abstract}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span key={index} className="text-sm bg-gray-700 text-blue-300 py-1 px-3 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Results & Findings</h3>
            <p className="text-gray-200">{project.fullReport.results}</p>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;