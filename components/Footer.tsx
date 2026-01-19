import React from 'react';
import Logo from './Logo';
import { BUSINESS_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-slate-100 px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        <Logo />
        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 text-left md:text-right leading-loose">
          © {new Date().getFullYear()} {BUSINESS_NAME}<br/>
          Barrister & Solicitor • Ontario, Canada<br/>
          <span className="text-blue-600/50">Veritas • Integritas • Consilium</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;