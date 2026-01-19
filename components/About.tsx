import React from 'react';
import { BIO_PARAGRAPHS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 lg:py-40 px-6 reveal overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Synthesis Matrix */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <h4 className="text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-8 md:mb-10 flex items-center justify-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span> The Synthesis Advantage <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span>
          </h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-[1.1] mb-8 md:mb-10 tracking-tight text-slate-900">
            Interdisciplinary <br/><span className="italic text-slate-400">Logic</span>.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 md:mb-16 font-light">
            Modern challenges do not exist in silos. I provide a multidimensional advisory synthesis—integrating <strong>engineering precision</strong>, <strong>financial intelligence</strong>, and <strong>legal rigor</strong> to advance objectives in highly regulated landscapes.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 group-hover:bg-blue-600 transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <i className="fa-solid fa-brain-circuit text-blue-600 group-hover:text-white transition-colors text-lg md:text-xl"></i>
              </div>
              <h5 className="font-bold text-lg mb-3 md:mb-4 text-slate-900">Domain Convergence</h5>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Strategic solutions that satisfy the board, the regulators, and the engineers simultaneously.</p>
            </div>
            <div className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 group-hover:bg-blue-600 transition-colors duration-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <i className="fa-solid fa-location-crosshairs text-blue-600 group-hover:text-white transition-colors text-lg md:text-xl"></i>
              </div>
              <h5 className="font-bold text-lg mb-3 md:mb-4 text-slate-900">Precision Hub</h5>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Headquartered in Northern Ontario with the infrastructure to serve international digital and industrial interests.</p>
            </div>
          </div>
        </div>

        {/* Professional Biography - Centered Layout */}
        <div className="border-t border-slate-200 pt-16 md:pt-24">
           <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold serif text-slate-900 inline-flex items-center gap-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Professional Profile
                </h3>
              </div>
              
              <div className="space-y-8 text-slate-600 leading-relaxed font-light text-lg md:text-xl md:text-justify hyphens-auto">
                {BIO_PARAGRAPHS.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px] first-letter:serif" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;