import React from 'react';
import { PUBLICATIONS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-16 md:py-32 lg:py-40 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif mb-6 md:mb-8 tracking-tight text-slate-900">Thought Leadership.</h2>
            <p className="text-slate-500 text-xl md:text-2xl font-light">Academic contributions at the intersection of municipal law, technology, and finance.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PUBLICATIONS.map((pub, i) => (
            <div key={i} className="h-full">
              {pub.link ? (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-blue-100">
                  <span className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 md:mb-8 block">{pub.date} • {pub.outlet}</span>
                  <h3 className="text-lg md:text-xl font-bold serif mb-4 md:mb-6 leading-tight text-slate-900 group-hover:text-blue-700 transition-colors">{pub.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 md:mb-8 font-medium flex-grow">{pub.summary}</p>
                  <div className="flex items-center gap-3 text-blue-600 pt-6 md:pt-8 border-t border-slate-50 mt-auto">
                    <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                    <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </a>
              ) : (
                <div className="h-full flex flex-col p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] md:rounded-[3rem]">
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 md:mb-8 block">{pub.date} • {pub.outlet}</span>
                  <h3 className="text-lg md:text-xl font-bold serif mb-4 md:mb-6 leading-tight text-slate-900">{pub.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{pub.summary}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;