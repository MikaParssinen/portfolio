import React from 'react';

const ThankYouModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md text-center">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Thank You!</h3>
        <p className="text-gray-200 mb-6">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;