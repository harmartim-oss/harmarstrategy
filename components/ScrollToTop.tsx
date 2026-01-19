import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  if (!visible) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
    </button>
  );
};

export default ScrollToTop;