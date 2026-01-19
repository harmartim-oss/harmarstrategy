import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing delay for UX then trigger mailto
    setTimeout(() => {
      const subject = encodeURIComponent(`Strategic Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Helper to get first name for personalization
  const getFirstName = () => formData.name.split(' ')[0] || 'Friend';

  return (
    <section id="contact" className="py-16 md:py-32 bg-slate-950 relative overflow-hidden reveal">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold serif mb-6 md:mb-8 text-white">Let's <br/><span className="text-blue-500 italic">Connect</span>.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 md:mb-12 font-light max-w-md mx-auto lg:mx-0">
              Discretion and precision are the hallmarks of my practice. Use the form below to outline your strategic requirements.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-slate-300 mb-6 group cursor-pointer hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 flex items-center justify-center text-blue-500 text-xl transition-all">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <span className="text-base md:text-lg font-mono break-all">{CONTACT_EMAIL}</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-2xl relative overflow-hidden transition-all duration-500 min-h-[500px] flex flex-col justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5 md:space-y-6 w-full">
                <div className="animate-[fade-in_0.5s_ease-out]">
                  <label htmlFor="name" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="animate-[fade-in_0.6s_ease-out]">
                  <label htmlFor="email" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" 
                    placeholder="Email Address" 
                  />
                </div>
                <div className="animate-[fade-in_0.7s_ease-out]">
                  <label htmlFor="message" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-base md:text-sm text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder-slate-600" 
                    placeholder="How can I help?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 tracking-[0.2em] text-[9px] md:text-[10px] uppercase flex items-center justify-center gap-4 group disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-wait animate-[fade-in_0.8s_ease-out]"
                >
                  {isSubmitting ? 'Processing...' : (
                    <>
                      Send Message <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 w-full animate-[fade-in_0.5s_ease-out]">
                <div className="w-24 h-24 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center text-4xl mb-8 shadow-[0_0_50px_rgba(74,222,128,0.2)] animate-bounce">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Message Prepared
                </h3>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md mx-auto font-light">
                  Thank you, <span className="text-blue-500 font-medium">{getFirstName()}</span>. Your email client has been opened with your draft.
                  <br/><br/>
                  Please click <strong className="text-white">Send</strong> in your email app to complete the request.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }} 
                  className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-rotate-left group-hover:-rotate-180 transition-transform duration-500"></i> New Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;