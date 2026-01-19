import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-full md:w-[85%] h-full opacity-[0.08] blur-3xl -z-10 pointer-events-none scale-125">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" alt="Northern Ontario Ambience" className="w-full h-full object-cover grayscale brightness-150" />
        </div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-50/30 rounded-full blur-[100px] -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-32 relative z-20 w-full">
        <div className="flex-[1.2] text-center lg:text-left pt-6 lg:pt-0">
          <div className="flex justify-center lg:justify-start mb-8 md:mb-12">
            <div className="flex items-center bg-blue-50/50 backdrop-blur-md border border-blue-100 rounded-full px-5 md:px-8 py-2 md:py-3">
              <span className="w-2 md:w-2.5 h-2 md:h-2.5 bg-blue-600 rounded-full animate-pulse mr-3 md:mr-4 shrink-0"></span>
              <span className="text-blue-900 text-[10px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] leading-none">Northern Ontario Hub • Global Advisory</span>
            </div>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold text-slate-950 leading-[1.1] sm:leading-[0.95] md:leading-[0.9] mb-8 md:mb-14 serif tracking-tighter">
            Strategic <br className="hidden xs:block"/>
            Advisory. <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-blue-900 to-blue-800 italic block sm:inline-block">Synthesized.</span>
          </h1>

          <p className="text-lg sm:text-2xl lg:text-4xl text-slate-500 leading-relaxed mb-10 md:mb-20 max-w-2xl mx-auto lg:mx-0 font-light tracking-tight text-balance">
            Interdisciplinary counsel at the intersection of <span className="text-slate-950 font-bold whitespace-nowrap border-b-2 border-blue-600/20">Business</span>, <span className="text-slate-950 font-bold whitespace-nowrap border-b-2 border-blue-600/20">Law</span>, <span className="text-slate-950 font-bold whitespace-nowrap border-b-2 border-blue-600/20">Privacy</span>, and <span className="text-slate-950 font-bold whitespace-nowrap border-b-2 border-blue-600/20">Cybersecurity</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center lg:justify-start">
            <a href="#services" className="w-full sm:w-auto px-8 md:px-16 py-5 md:py-8 bg-slate-950 text-white font-black rounded-3xl hover:bg-blue-700 transition-all shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:shadow-blue-600/40 flex items-center justify-center gap-6 md:gap-8 group text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase active:scale-[0.96] touch-manipulation">
              Explore Pillars <i className="fa-solid fa-arrow-down group-hover:translate-y-1 transition-transform text-blue-400"></i>
            </a>
          </div>
        </div>

        <div className="flex-1 relative hidden lg:block reveal">
          <div className="relative group">
            <div className="absolute -inset-24 bg-blue-100/30 rounded-full mix-blend-multiply opacity-50 blur-[150px] animate-pulse"></div>
            <div className="relative p-24 bg-white/60 backdrop-blur-3xl border border-white shadow-[0_80px_160px_-40px_rgba(0,0,0,0.12)] rounded-[7rem] transform group-hover:rotate-[-1deg] group-hover:scale-[1.02] transition-all duration-1000">
              <Logo />
              <div className="mt-20 pt-20 border-t border-slate-100 flex flex-col gap-12">
                <div className="flex items-center gap-8">
                  <div className="w-4 h-4 rounded-full bg-blue-600 shadow-xl shadow-blue-400"></div>
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-400">Multi-Domain Strategy</span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-400">Policy Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;