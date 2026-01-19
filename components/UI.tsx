import React, { useState, useEffect } from 'react';
import { SLOGAN } from '../constants';

export const Logo: React.FC<{ light?: boolean }> = ({ light }) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none">
      <div className="relative flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 100 100" className="transition-all duration-700 group-hover:rotate-[360deg]">
          <path d="M50 5 L95 27.5 V72.5 L50 95 L5 72.5 V27.5 Z" fill="none" stroke={light ? "white" : "#0f172a"} strokeWidth="1.5" strokeOpacity="0.15" />
          <g fill="none" stroke={light ? "white" : "#1e293b"} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
            <path d="M30 25 V75 M70 25 V75" />
            <path d="M30 50 H70" />
            <path d="M20 25 H80 M50 25 V50" stroke={light ? "#60a5fa" : "#2563eb"} strokeWidth="11" className="group-hover:stroke-blue-500 transition-colors duration-300" />
          </g>
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

export const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em]">
          <a href="#services" className="text-slate-700 hover:text-blue-700 transition-all">Areas</a>
          <a href="#about" className="text-slate-700 hover:text-blue-700 transition-all">Credentials</a>
          <a href="#insights" className="text-slate-700 hover:text-blue-700 transition-all">Policy</a>
          <a href="#contact" className="px-10 py-4 bg-slate-900 text-white rounded-xl hover:bg-blue-700 transition-all shadow-xl active:scale-95">Consultation</a>
        </div>
        <button className="lg:hidden text-slate-900 p-2 z-[110]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>
      <div className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 z-[105] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-full pt-32 px-8 space-y-8 text-center uppercase tracking-widest font-black text-sm">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Areas</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Credentials</a>
          <a href="#insights" onClick={() => setMobileMenuOpen(false)}>Policy</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-6 bg-slate-900 text-white rounded-2xl">Book Consultation</a>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-full md:w-[85%] h-full opacity-[0.1] blur-3xl -z-10 pointer-events-none scale-110">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" alt="Landscape" className="w-full h-full object-cover grayscale brightness-125" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-20 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-10">
            <div className="flex items-center bg-blue-50 border border-blue-100 rounded-full px-6 py-2.5">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-3"></span>
              <span className="text-blue-800 text-[10px] font-black uppercase tracking-[0.3em]">Northern Ontario Hub • Global Impact</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-slate-900 leading-[0.95] mb-12 serif tracking-tighter">
            Strategic <br className="hidden xs:block"/>
            Advisory. <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 italic block sm:inline-block">Synthesized.</span>
          </h1>
          <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed mb-16 max-w-2xl mx-auto lg:mx-0 font-light tracking-tight">
            Multi-dimensional advisory at the intersection of <span className="text-slate-950 font-bold">Business</span>, <span className="text-slate-950 font-bold">Law</span>, <span className="text-slate-950 font-bold">Privacy</span>, and <span className="text-slate-950 font-bold">Cybersecurity</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href="#contact" className="px-14 py-7 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl flex items-center justify-center gap-6 group text-[11px] tracking-widest uppercase active:scale-[0.97]">
              Initiate Consultation <i className="fa-solid fa-arrow-right-long group-hover:translate-x-3 transition-transform text-blue-400"></i>
            </a>
            <a href="#services" className="px-14 py-7 bg-white text-slate-950 border-2 border-slate-100 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-6 text-[11px] tracking-widest uppercase active:scale-[0.97]">
              Explore Pillars
            </a>
          </div>
        </div>
        <div className="flex-1 relative hidden lg:block">
          <div className="p-20 bg-white border border-slate-50 shadow-2xl rounded-[6rem]">
            <Logo />
            <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col gap-10">
              <div className="flex items-center gap-6 opacity-40">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">Policy Synthesis</span>
              </div>
              <div className="flex items-center gap-6 opacity-40">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">Integrated Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 z-[90] w-12 h-12 bg-white border border-slate-100 shadow-xl rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all active:scale-90">
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};