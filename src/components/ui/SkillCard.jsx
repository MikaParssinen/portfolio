import React from 'react';

const SkillCard = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-900 text-blue-100 px-3 py-2 rounded-lg text-sm font-medium inline-block transform transition-transform hover:scale-110 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;