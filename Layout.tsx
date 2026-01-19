
import React, { useState, useEffect } from 'react';
import { SLOGAN, BUSINESS_NAME } from './constants';

export const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <div className="flex items-center gap-3 md:gap-4 group cursor-pointer select-none">
    <div className="relative flex items-center justify-center shrink-0">
      <svg width="40" height="40" viewBox="0 0 100 100" className="md:w-12 md:h-12 transition-all duration-700 group-hover:rotate-[360deg]">
        <path d="M50 5 L95 27.5 V72.5 L50 95 L5 72.5 V27.5 Z" fill="none" stroke={light ? "white" : "#0f172a"} strokeWidth="1.5" strokeOpacity="0.15" />
        <g fill="none" stroke={light ? "white" : "#1e293b"} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 25 V75 M70 25 V75" /><path d="M30 50 H70" />
          <path d="M20 25 H80 M50 25 V50" stroke={light ? "#60a5fa" : "#2563eb"} strokeWidth="11" className="group-hover:stroke-blue-500 transition-colors" />
        </g>
        <circle cx="50" cy="50" r="4" fill={light ? "white" : "#0f172a"} />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`text-lg md:text-xl font-bold tracking-tight serif ${light ? 'text-white' : 'text-slate-900'}`}>TIM J. HARMAR</span>
      <span className={`text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.25em] font-extrabold uppercase ${light ? 'text-blue-400' : 'text-blue-700'}`}>{SLOGAN}</span>
    </div>
  </div>
);

export const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => { 
    document.body.style.overflow = open ? 'hidden' : 'unset'; 
  }, [open]);

  const navLinks = [
    { name: 'The Framework', href: '#about' },
    { name: 'Nexus Simulation', href: '#nexus-simulation' },
    { name: 'Strategic Pillars', href: '#services' },
    { name: 'Insights', href: '#insights' },
    { name: 'Engage', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || open ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
        <a href="#hero" onClick={() => setOpen(false)} className="relative z-[110]">
          <Logo />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-600 hover:text-blue-700 transition-all py-2 border-b-2 border-transparent hover:border-blue-600/20"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-blue-700 transition-all shadow-xl active:scale-95 text-[10px]">
            Inquiry Nexus
          </a>
        </div>

        {/* Hamburger Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2 z-[110] focus:outline-none touch-manipulation" 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ease-out ${open ? 'rotate-45 translate-y-2.2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-200 ${open ? 'translate-x-full opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ease-out ${open ? '-rotate-45 -translate-y-2.2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[105] ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-[100dvh] pt-32 pb-12 px-8 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setOpen(false)}
                className={`text-3xl xs:text-4xl font-bold serif italic text-slate-900 border-b border-slate-50 pb-6 transition-all duration-700 ${open ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto">
            <a 
              href="#contact" 
              onClick={() => setOpen(false)}
              className="block w-full py-6 bg-slate-950 text-white text-center rounded-3xl font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl active:scale-[0.97] transition-all"
            >
              Initiate Consultation
            </a>
            <div className="mt-10 flex items-center justify-center gap-6 text-slate-400">
               <span className="text-[10px] font-black uppercase tracking-widest text-center">Northern Ontario Base • Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 px-6 overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-full md:w-[85%] h-full opacity-[0.08] blur-3xl -z-10 pointer-events-none scale-110">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" alt="Northern Ontario Ambience" className="w-full h-full object-cover grayscale brightness-125" />
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-20 w-full">
      <div className="flex-1 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start mb-8 md:mb-10">
          <div className="flex items-center bg-blue-50/70 backdrop-blur-sm border border-blue-100 rounded-full px-5 md:px-6 py-2.5">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-3 shrink-0"></span>
            <span className="text-blue-900 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.3em]">Northern Ontario Based • Global Reach</span>
          </div>
        </div>
        <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-bold text-slate-900 leading-[0.9] mb-10 md:mb-12 serif tracking-tighter text-balance">
          Integrated Intelligence. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-blue-900 to-slate-800 italic block">Decisive Results.</span>
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl text-slate-500 leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto lg:mx-0 font-light tracking-tight text-balance">
          Interdisciplinary counsel at the convergence of <span className="text-slate-950 font-bold border-b-2 border-blue-600/20 pb-0.5">Law</span>, <span className="text-slate-950 font-bold border-b-2 border-blue-600/20 pb-0.5">Cybersecurity</span>, and <span className="text-slate-950 font-bold border-b-2 border-blue-600/20 pb-0.5">Capital</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <a href="#contact" className="px-10 md:px-14 py-6 md:py-7 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl flex items-center justify-center gap-5 group text-[10px] md:text-[11px] tracking-widest uppercase active:scale-[0.97]">
            Initiate Advisory <i className="fa-solid fa-arrow-right-long group-hover:translate-x-3 transition-transform text-blue-400"></i>
          </a>
          <a href="#nexus-simulation" className="px-10 md:px-14 py-6 md:py-7 bg-white text-slate-950 border-2 border-slate-100 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-5 text-[10px] md:text-[11px] tracking-widest uppercase active:scale-[0.97]">
            Nexus Simulation
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const Ticker: React.FC = () => {
  const items = [
    { text: "JD • MBA • LLM • M.ENG", icon: "fa-graduation-cap", color: "text-blue-400" },
    { text: "CAPP & CIPP/C CERTIFIED", icon: "fa-shield-halved", color: "text-slate-400" },
    { text: "Counsel in a leading Supreme Court of Canada case", icon: "fa-scale-balanced", color: "text-blue-400" },
    { text: "Appeared at All Levels of Court", icon: "fa-gavel", color: "text-slate-400" },
    { text: "Global Business Management Professor", icon: "fa-chalkboard-user", color: "text-blue-400" },
    { text: "AI Governance & Ethics Specialist", icon: "fa-microchip", color: "text-slate-400" },
  ];

  return (
    <div className="bg-slate-900 py-8 md:py-10 overflow-hidden relative border-b border-slate-800">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3].map((loop) => (
          <div key={loop} className="flex gap-12 md:gap-20 items-center px-6 md:px-10">
            {items.map((item, idx) => (
              <span key={idx} className={`${item.color} text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3 shrink-0`}>
                <i className={`fa-solid ${item.icon}`}></i> {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-33.33%); } 
        } 
        .animate-marquee { 
          animation: marquee 50s linear infinite; 
          width: fit-content;
        }
        @media (max-width: 768px) {
          .animate-marquee { animation: marquee 35s linear infinite; }
        }
      `}</style>
    </div>
  );
};

export const Footer: React.FC = () => (
  <footer className="py-16 md:py-24 border-t border-slate-100 px-6 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 text-center md:text-left">
      <Logo />
      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 leading-loose">
        © {new Date().getFullYear()} {BUSINESS_NAME}<br/>
        Northern Ontario Based • Barrister & Solicitor<br/>
        <span className="text-blue-600 font-bold opacity-60 mt-2 block tracking-[0.4em]">Veritas • Integritas • Consilium</span>
      </div>
    </div>
  </footer>
);

export const ScrollToTop: React.FC = () => {
  const [v, setV] = useState(false);
  useEffect(() => {
    const t = () => setV(window.scrollY > 500);
    window.addEventListener('scroll', t);
    return () => window.removeEventListener('scroll', t);
  }, []);
  if (!v) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-[90] w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center text-slate-900 border border-slate-200 hover:bg-blue-600 hover:text-white transition-all active:scale-[0.85]" aria-label="Scroll to top"><i className="fa-solid fa-arrow-up"></i></button>
  );
};
