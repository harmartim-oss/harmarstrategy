
import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 relative pb-12 last:pb-0">
      {/* Decorative timeline line */}
      <div className="hidden md:block absolute left-[151px] top-4 bottom-0 w-0.5 bg-slate-100"></div>
      
      <div className="md:w-36 flex-shrink-0 pt-1">
        <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
          {experience.period}
        </span>
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
          <h3 className="text-2xl font-bold text-slate-900">{experience.role}</h3>
          <span className="hidden md:block text-slate-300 mx-2">/</span>
          <span className="text-xl font-medium text-blue-700 italic serif">{experience.company}</span>
        </div>
        
        <ul className="space-y-3">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-4 text-slate-600 leading-relaxed">
              <span className="text-blue-400 pt-1.5 text-[8px]">
                <i className="fa-solid fa-circle"></i>
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
