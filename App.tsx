
import React, { useState, useEffect } from 'react';
import { Navbar, Hero, Ticker, Footer, ScrollToTop } from './Layout';
import { About, Services, Insights, Contact, Resources } from './Sections';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <ScrollToTop />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Insights />
        <Contact />
        <Resources />
      </main>

      <Footer />
    </div>
  );
};

export default App;
