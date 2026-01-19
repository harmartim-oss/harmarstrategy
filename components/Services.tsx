import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-32 lg:py-40 bg-slate-950 text-white rounded-[2rem] md:rounded-[5rem] mx-2 md:mx-10 my-8 md:my-12 relative overflow-hidden reveal shadow-2xl">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mb-12 md:mb-24">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold serif mb-6 md:mb-10 leading-[1] tracking-tight">
            Structural <br/><span className="text-blue-500 italic">Pillars</span>.
          </h2>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light">
            Specialized advisory designed for organizations navigating the convergence of technology, law, and capital.
          </p>
        </div>

        {/* Grid with logic to span the last item if odd count */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:w-full [&>*:last-child:nth-child(odd)]:lg:w-[calc(50%-1.5rem)] [&>*:last-child:nth-child(odd)]:lg:mx-auto">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setActivePillar(idx)}
              onMouseLeave={() => setActivePillar(null)}
              className={`group relative bg-white/[0.03] backdrop-blur-md p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3.5rem] border border-white/5 transition-all duration-500 ease-out flex flex-col h-full hover:bg-white/[0.08] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 ${activePillar !== null && activePillar !== idx ? 'lg:opacity-40 lg:scale-[0.98] blur-[1px]' : 'opacity-100 scale-100 lg:hover:scale-[1.01]'}`}
            >
              <div className="absolute top-6 right-6 md:top-10 md:right-14 text-white/[0.03] text-5xl md:text-8xl font-bold serif group-hover:text-blue-500/[0.1] transition-all duration-700 pointer-events-none select-none">
                0{idx + 1}
              </div>

              <div className="reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl md:rounded-3xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-10 shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ring-1 ring-white/10">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 serif tracking-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 md:mb-10 flex-grow text-sm md:text-lg font-light">{service.description}</p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="text-sm lg:text-base flex gap-3 md:gap-4 text-slate-300 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="leading-relaxed opacity-90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-6 md:pt-10 border-t border-white/5">
                {service.tags.map(t => (
                  <span key={t} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] bg-white/5 px-2.5 py-1.5 md:px-4 md:py-2 rounded-full text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-600/10 transition-all hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;