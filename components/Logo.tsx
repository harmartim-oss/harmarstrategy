
import React from 'react';
import { SLOGAN } from '../constants.tsx';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none">
      <div className="relative flex items-center justify-center">
        {/* Intertwined T + H Monogram */}
        <svg width="48" height="48" viewBox="0 0 100 100" className="transition-all duration-700 group-hover:rotate-[360deg]">
          {/* Subtle Background Geometric Shape */}
          <path 
            d="M50 5 L95 27.5 V72.5 L50 95 L5 72.5 V27.5 Z" 
            fill="none" 
            stroke={light ? "white" : "#0f172a"} 
            strokeWidth="1.5" 
            strokeOpacity="0.15" 
          />
          
          {/* Intertwined T & H */}
          <g fill="none" stroke={light ? "white" : "#1e293b"} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
            {/* The 'H' structure */}
            <path d="M30 25 V75 M70 25 V75" />
            <path d="M30 50 H70" />
            {/* The 'T' component */}
            <path 
              d="M20 25 H80 M50 25 V50" 
              stroke={light ? "#60a5fa" : "#2563eb"} 
              strokeWidth="11" 
              className="group-hover:stroke-blue-500 transition-colors duration-300"
            />
          </g>
          
          {/* Precision Accent Dot */}
          <circle cx="50" cy="50" r="4" fill={light ? "white" : "#0f172a"} className="group-hover:fill-blue-600 transition-colors" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight serif transition-colors ${light ? 'text-white' : 'text-slate-900'}`}>
          TIM J. HARMAR
        </span>
        <span className={`text-[9px] tracking-[0.25em] font-extrabold uppercase ${light ? 'text-blue-400' : 'text-blue-700'}`}>
          {SLOGAN}
        </span>
      </div>
    </div>
  );
};

export default Logo;
