import React from 'react';
import SectionTitle from '../ui/SectionTitle.jsx';
import { education, experience } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative z-10 bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>
          Education & <span className="text-blue-400">Experience</span>
        </SectionTitle>
        
        <div className="space-y-12">
          {/* Education Section */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-900 text-lg font-medium text-gray-200">Education</span>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">{item.degree}</h3>
                <p className="text-blue-300 mb-2">{item.institution}</p>
                <p className="text-gray-200 mb-3">{item.period}</p>
                <ul className="text-gray-200 space-y-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  {item.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Experience Section */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-900 text-lg font-medium text-gray-200">Experience</span>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {experience.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">{item.position}</h3>
                <p className="text-blue-300 mb-2">{item.company}</p>
                <p className="text-gray-200 mb-3">{item.period}</p>
                <ul className="text-gray-200 space-y-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i}>• {responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;