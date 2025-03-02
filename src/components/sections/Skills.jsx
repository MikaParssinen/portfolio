import React from 'react';
import { Code, Brain, Terminal } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle.jsx';
import SkillCard from '../ui/SkillCard';
import { programmingSkills, mlSkills, toolsSkills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative z-10 bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>
          My <span className="text-blue-400">Skills</span>
        </SectionTitle>
        
        <div className="grid gap-10 md:grid-cols-3">
          {/* Programming Languages */}
          <SkillCard 
            title="Programming Languages" 
            icon={<Code className="text-blue-400 mr-2" size={24} />}
            skills={programmingSkills}
          />
          
          {/* Machine Learning */}
          <SkillCard 
            title="Machine Learning" 
            icon={<Brain className="text-blue-400 mr-2" size={24} />}
            skills={mlSkills}
          />
          
          {/* Tools & Frameworks */}
          <SkillCard 
            title="Tools & Frameworks" 
            icon={<Terminal className="text-blue-400 mr-2" size={24} />}
            skills={toolsSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;