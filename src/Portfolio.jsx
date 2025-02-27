import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, ExternalLink, Terminal, Code, Brain } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // ML Project data
  const projects = [
    {
      id: 1,
      title: "Image Classification with CNN",
      description: "Deep learning project using convolutional neural networks to classify images with high accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "Computer Vision"],
      image: "/api/placeholder/600/350"
    },
    {
      id: 2,
      title: "Natural Language Processing Tool",
      description: "Built a sentiment analysis tool that processes text data to determine emotional content.",
      tech: ["Python", "NLTK", "spaCy", "Transformers"],
      image: "/api/placeholder/600/350"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Created a dashboard that visualizes predictive models for business metrics forecasting.",
      tech: ["Python", "Scikit-learn", "Tableau", "Data Visualization"],
      image: "/api/placeholder/600/350"
    },
    {
      id: 4,
      title: "Reinforcement Learning Environment",
      description: "Developed a custom environment for training RL agents on complex decision-making tasks.",
      tech: ["Python", "PyTorch", "OpenAI Gym", "Reinforcement Learning"],
      image: "/api/placeholder/600/350"
    }
  ];

  // Skills data
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C++", "Java", "C", "SQL", "JavaScript"]
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Preprocessing", "Deep Learning"]
    },
    {
      category: "Tools & Frameworks",
      items: ["Git", "Visual Studio", "Tableau", "PowerBI", "Microsoft SQL Server"]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-blue-500 font-bold text-xl">Mika Pärssinen</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider ${
                      activeSection === section
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === section
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">Hi, I'm <span className="text-blue-500">Mika Pärssinen</span></span>
              <span className="block mt-2">Machine Learning Enthusiast</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
              Computer Science student with a passion for Machine Learning, algorithms, and building innovative solutions.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition duration-300 transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium text-white transition duration-300 transform hover:scale-105">
                View Projects
              </a>
            </div>
            <div className="mt-10">
              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce bg-gray-800 p-2 rounded-full"
              >
                <ChevronDown size={24} className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="/api/placeholder/600/600" 
                alt="Mika Pärssinen" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Computer Science Student</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a Computer Science student at Mälardalen University, I am deeply passionate about learning and mastering new technologies. 
                I have a strong foundation in programming and algorithms, and I'm particularly interested in Machine Learning and AI applications.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My favorite course is applied machine learning, which focused on hands-on implementation 
                from data preprocessing to deep learning. Through various projects, I've developed skills 
                in supervised and unsupervised learning while emphasizing ethical AI development.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Outside of academics, I've played football/soccer at an elite level (2017-2019), 
                enjoy building and upgrading computers, and have military experience that helped develop my leadership skills.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mikaparssinen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/mika-parssinen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:mika.77@live.se" 
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white transition duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {index === 0 && <Code className="text-blue-500 mr-2" size={24} />}
                  {index === 1 && <Brain className="text-blue-500 mr-2" size={24} />}
                  {index === 2 && <Terminal className="text-blue-500 mr-2" size={24} />}
                  <h3 className="text-xl font-semibold text-blue-400">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="relative">
                      <div className="text-gray-300 mb-1">{skill}</div>
                      <div className="h-2 w-full bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" 
                          style={{ width: `${85 - i * 5}%` }} 
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["C++", "Python", "Java", "Machine Learning", "Data Visualization", "SQL", "React", "JavaScript"].map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-800 text-center py-4 px-6 rounded-lg font-medium text-gray-300 border border-gray-700 transform transition-transform hover:scale-105 hover:bg-gray-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Machine Learning <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-700 text-blue-300 py-1 px-2 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="#" 
                      className="text-blue-500 hover:text-blue-400 flex items-center"
                    >
                      View Details <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-500 hover:text-blue-400 flex items-center"
                    >
                      Github <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Education & <span className="text-blue-500">Experience</span>
          </h2>
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-900 text-lg font-medium text-gray-300">Education</span>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">BS Computer Science</h3>
                <p className="text-blue-300 mb-2">Mälardalen University</p>
                <p className="text-gray-400 mb-3">Aug 2022 - June 2025</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Focus on applied machine learning and data processing</li>
                  <li>• Additional coursework in Calculus, Data Analytics with ML</li>
                  <li>• Projects in supervised and unsupervised learning</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">Exchange Studies in Computer Science</h3>
                <p className="text-blue-300 mb-2">University of Malaga</p>
                <p className="text-gray-400 mb-3">Feb 2024 - June 2024</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Introduction to Software Engineering</li>
                  <li>• System Programming</li>
                  <li>• Concurrent and Computer Technology</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-900 text-lg font-medium text-gray-300">Experience</span>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">Military Conscription</h3>
                <p className="text-blue-300 mb-2">Command and Control Regiment</p>
                <p className="text-gray-400 mb-3">Aug 2019 - May 2020</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Group leader in ground combat</li>
                  <li>• Technical courses in radio communication</li>
                  <li>• Developed leadership and teamwork skills</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-400">Shop Assistant / Cashier</h3>
                <p className="text-blue-300 mb-2">Hemköp Livs</p>
                <p className="text-gray-400 mb-3">Aug 2020 - June 2021</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Technical support for store equipment</li>
                  <li>• Managed inventory and reduced grocery waste</li>
                  <li>• Led and supervised interns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                I'm currently looking for new opportunities to apply my skills in Machine Learning and programming.
                Feel free to reach out if you'd like to collaborate or have any questions!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-3" size={20} />
                  <span className="text-gray-300">mika.77@live.se</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-blue-500 mr-3" size={20} />
                  <a href="https://linkedin.com/in/mika-parssinen" className="text-gray-300 hover:text-blue-400">
                    linkedin.com/in/mika-parssinen
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="text-blue-500 mr-3" size={20} />
                  <a href="https://github.com/mikaparssinen" className="text-gray-300 hover:text-blue-400">
                    github.com/mikaparssinen
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-medium transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400">© 2025 Mika Pärssinen. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/mikaparssinen" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mika-parssinen" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:mika.77@live.se" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
