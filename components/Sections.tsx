import React, { useState } from 'react';
import { BIO_PARAGRAPHS, SERVICES, PUBLICATIONS, CONTACT_EMAIL } from '../constants';

export const About: React.FC = () => (
  <section id="about" className="py-32 px-6 reveal bg-slate-50/50">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-28">
        <h4 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.5em] mb-10 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-blue-600"></span> The Synthesis Advantage <span className="w-12 h-[1px] bg-blue-600"></span>
        </h4>
        <h2 className="text-4xl md:text-7xl font-bold serif leading-tight mb-10 text-slate-900">Interdisciplinary <span className="italic text-slate-400">Logic</span>.</h2>
        <div className="space-y-8 text-slate-600 leading-relaxed font-light text-xl text-justify">
          {BIO_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  </section>
);

export const Services: React.FC = () => (
  <section id="services" className="py-32 bg-slate-950 text-white rounded-[4rem] mx-6 my-12 reveal shadow-2xl overflow-hidden">
    <div className="max-w-7xl mx-auto px-10">
      <h2 className="text-5xl md:text-8xl font-bold serif mb-24 leading-tight">Structural <br/><span className="text-blue-500 italic">Pillars</span>.</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <div key={i} className="group bg-white/5 p-12 rounded-[3rem] border border-white/5 hover:bg-white/10 transition-all">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8"><i className={`fa-solid ${s.icon}`}></i></div>
            <h3 className="text-3xl font-bold mb-6 serif">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">{s.description}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full text-slate-400">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Insights: React.FC = () => (
  <section id="insights" className="py-32 px-6 reveal">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold serif mb-20 text-slate-900">Thought Leadership.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PUBLICATIONS.map((pub, i) => (
          <div key={i} className="flex flex-col p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-8 block">{pub.date}</span>
            <h3 className="text-xl font-bold serif mb-6 text-slate-900">{pub.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed flex-grow">{pub.summary}</p>
            {pub.link && <a href={pub.link} target="_blank" className="mt-8 text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-3">Read More <i className="fa-solid fa-arrow-right"></i></a>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const submit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Inquiry&body=Name: ${fd.get('name')}%0D%0AEmail: ${fd.get('email')}%0D%0A%0D%0AMessage: ${fd.get('message')}`;
    setSent(true);
  };
  return (
    <section id="contact" className="py-32 bg-slate-950 reveal text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold serif mb-10">Let's <span className="text-blue-500 italic">Connect</span>.</h2>
        {!sent ? (
          <form onSubmit={submit} className="space-y-6 bg-white/5 p-12 rounded-[3rem] text-left">
            <input name="name" placeholder="Name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500" />
            <input name="email" type="email" placeholder="Email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500" />
            <textarea name="message" placeholder="Message" rows={4} required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500" />
            <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl tracking-widest uppercase text-xs">Send Message</button>
          </form>
        ) : (
          <div className="p-12 bg-green-500/10 rounded-[3rem] text-green-400">
            <i className="fa-solid fa-check-circle text-6xl mb-6"></i>
            <h3 className="text-2xl font-bold mb-4">Message Prepared</h3>
            <p>Please check your email client to send the message.</p>
          </div>
        )}
      </div>
    </section>
  );
};