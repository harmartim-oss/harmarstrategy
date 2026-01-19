
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light }) => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 serif ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className="w-20 h-1.5 bg-blue-700 mx-auto mb-8 rounded-full"></div>
      <p className={`text-lg leading-relaxed ${light ? 'text-slate-400' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
