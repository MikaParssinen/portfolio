import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 
      className="text-3xl font-bold text-center mb-12 text-gray-200" 
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;