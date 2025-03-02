import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle.jsx';
import { useFormSubmit } from '../../hooks/useFormSubmit';

const Contact = ({ setShowThankYou }) => {
  const { formStatus, handleSubmit } = useFormSubmit(setShowThankYou);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 relative z-10 bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>
          Get In <span className="text-blue-400">Touch</span>
        </SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h3>
            <p className="text-gray-200 mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              I'm currently seeking opportunities where I can leverage my programming skills while continuously expanding my technical expertise.
              Feel free to reach out if you'd like to collaborate or have any questions!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={20} />
                <span className="text-gray-200">mika.77@live.se</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-blue-400 mr-3" size={20} />
                <a href="https://linkedin.com/in/mika-parssinen" className="text-gray-200 hover:text-blue-300">
                  linkedin.com/in/mika-parssinen
                </a>
              </div>
              <div className="flex items-center">
                <Github className="text-blue-400 mr-3" size={20} />
                <a href="https://github.com/mikaparssinen" className="text-gray-200 hover:text-blue-300">
                  github.com/mikaparssinen
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* Hidden field for the subject line */}
              <input type="hidden" name="_subject" value="New message from portfolio website!" />
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`w-full ${formStatus.submitting ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-700'} py-3 rounded-lg text-gray-200 font-medium transition duration-300`}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus.error && (
                <div className="text-red-400 text-sm mt-2">
                  {formStatus.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;