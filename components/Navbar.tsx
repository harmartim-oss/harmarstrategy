import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em]">
          <a href="#services" className="text-slate-700 hover:text-blue-700 transition-all py-2">Services</a>
          <a href="#about" className="text-slate-700 hover:text-blue-700 transition-all py-2">Credentials</a>
          <a href="#insights" className="text-slate-700 hover:text-blue-700 transition-all py-2">Publications</a>
          <a href="#contact" className="text-slate-700 hover:text-blue-700 transition-all py-2">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2 z-[110] relative focus:outline-none touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${mobileMenuOpen ? 'opacity-0 -translate-x-full' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] z-[105] ${mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
        <div className="flex flex-col h-full pt-28 pb-12 px-8 overflow-y-auto">
          <div className="flex flex-col space-y-2 text-center">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 text-xl font-bold font-serif italic py-5 border-b border-slate-100 active:bg-slate-50 transition-colors">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 text-xl font-bold font-serif italic py-5 border-b border-slate-100 active:bg-slate-50 transition-colors">Credentials</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 text-xl font-bold font-serif italic py-5 border-b border-slate-100 active:bg-slate-50 transition-colors">Publications</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-900 text-xl font-bold font-serif italic py-5 border-b border-slate-100 active:bg-slate-50 transition-colors">Contact</a>
          </div>
          
          <div className="mt-auto text-center">
            <div className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-4">
              Sault Ste. Marie • Global Reach
            </div>
            <div className="flex justify-center gap-6 text-slate-300">
               <i className="fa-brands fa-linkedin text-2xl"></i>
               <i className="fa-solid fa-envelope text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;