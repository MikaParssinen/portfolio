import { useState } from 'react';

export const useFormSubmit = (setShowThankYou) => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzdnrwy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Form submitted successfully
        setFormStatus({ submitting: false, success: true, error: null });
        setShowThankYou(true);
        form.reset(); // Reset form fields
      } else {
        // Form submission failed
        const data = await response.json();
        setFormStatus({ 
          submitting: false, 
          success: false, 
          error: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        success: false, 
        error: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return { formStatus, handleSubmit };
};