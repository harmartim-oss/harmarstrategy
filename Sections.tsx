
import React, { useState, useEffect, useRef } from 'react';
import { BIO_PARAGRAPHS, SERVICES, PUBLICATIONS, CONTACT_EMAIL, RESOURCES, BUSINESS_NAME } from './constants';
import { Publication, StrategicService } from './types';
import { GoogleGenAI } from "@google/genai";

// AI Feature Component: Mandate Calibration Engine
const MandateAssistant: React.FC = () => {
  const [input, setInput] = useState("");
  const [domain, setDomain] = useState("Corporate");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const domains = [
    { name: "Corporate", icon: "fa-building", color: "blue" },
    { name: "Privacy", icon: "fa-user-shield", color: "indigo" },
    { name: "Industrial", icon: "fa-industry", color: "slate" },
    { name: "Cyber", icon: "fa-microchip", color: "blue" },
  ];

  const calibrateMandate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        You are an AI Strategic Assistant for Tim J. Harmar, an interdisciplinary counsel based in Northern Ontario.
        Tim's credentials include: JD, dual LLM (Business/Finance), MBA (Finance), M.Eng (Cybersecurity Policy), CAPP certified, CIPP/C professional. 
        He acted as counsel in the leading Supreme Court of Canada case on anti-SLAPP legislation.
        
        The user has provided a challenge in the "${domain}" domain: "${input}"

        Your task:
        Create a "Strategic Briefing" analyzing how Tim's integrated framework (Law + Engineering + Finance) addresses this.
        
        STRUCTURE YOUR RESPONSE EXACTLY LIKE THIS (include the labels):
        EXECUTIVE SYNTHESIS: [A concise partner-level summary of the strategic approach]
        RISK CLUSTERS: [Identify 2-3 specific hidden structural risks found at the nexus of law and technology]
        ADVANTAGE MATRIX: [How Tim's integrated approach turns these risks into competitive upside]
        
        Tone: Sophisticated, objective, professional. Total max 140 words.
      `;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      const text = result.text || "";
      
      // Parse the structured response
      const parts = {
        synthesis: text.split('EXECUTIVE SYNTHESIS:')[1]?.split('RISK CLUSTERS:')[0]?.trim(),
        risks: text.split('RISK CLUSTERS:')[1]?.split('ADVANTAGE MATRIX:')[0]?.trim(),
        matrix: text.split('ADVANTAGE MATRIX:')[1]?.trim()
      };

      setResponse(parts);
    } catch (error) {
      console.error(error);
      setResponse({ synthesis: "The calibration engine is currently under maintenance. Please contact our office directly for a strategic consultation." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="nexus-simulation" className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-blue-500/20 shadow-2xl mt-12 md:mt-16 overflow-hidden relative scroll-mt-24">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[15rem] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
        <i className="fa-solid fa-dna"></i>
      </div>
      
      <div className="relative z-10">
        <header className="mb-8">
          <h4 className="text-blue-500 text-[9px] font-black uppercase tracking-[0.5em] mb-4">Mandate Calibration Engine v2.0</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 serif">Nexus Simulation</h3>
          <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed max-w-xl">
            Prime the simulation by selecting a strategic domain, then describe your organizational challenge to see the integrated framework in action.
          </p>
        </header>
        
        {/* Domain Selectors */}
        <div className="flex flex-wrap gap-2 mb-8">
          {domains.map((d) => (
            <button
              key={d.name}
              onClick={() => setDomain(d.name)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                domain === d.name 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/40 ring-2 ring-blue-400/20' 
                : 'bg-white/5 text-slate-500 hover:bg-white/10'
              }`}
            >
              <i className={`fa-solid ${d.icon} text-[12px]`}></i>
              {d.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative group">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Describe a ${domain.toLowerCase()} challenge...`}
              className="w-full bg-slate-950/70 border border-slate-800 rounded-2xl p-6 text-white text-sm outline-none focus:border-blue-500 transition-all resize-none h-32 md:h-44 font-light placeholder:text-slate-700"
            />
            <div className="absolute bottom-4 right-4 text-[8px] font-mono text-slate-800 pointer-events-none">NODE_READY // ENCRYPTION: AES-256</div>
          </div>
          
          <button 
            onClick={calibrateMandate}
            disabled={loading || !input.trim()}
            className="group bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] text-[10px] py-6 rounded-2xl transition-all shadow-xl active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation flex items-center justify-center gap-4 overflow-hidden relative"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                Processing Strategic Nexus...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                Generate Strategic Briefing
                <i className="fa-solid fa-bolt-lightning text-blue-200 group-hover:animate-bounce"></i>
              </span>
            )}
          </button>
        </div>

        {response && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-6 duration-1000">
            <div className="p-8 md:p-10 bg-white/[0.03] border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-[0.05] text-6xl">
                  <i className="fa-solid fa-file-shield"></i>
               </div>
               
               <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                       <i className="fa-solid fa-network-wired text-blue-500 text-sm"></i>
                    </div>
                    <div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 block">Briefing Status: Finalized</span>
                       <span className="text-[8px] font-mono text-slate-600">TIMESTAMP: {new Date().toLocaleTimeString()} // ID: NX-{Math.floor(Math.random()*9000)+1000}</span>
                    </div>
                  </div>
               </div>

               <div className="grid gap-10">
                  {response.synthesis && (
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Executive Synthesis
                      </h5>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light italic">{response.synthesis}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                     {response.risks && (
                       <div className="space-y-3">
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-red-500/70 flex items-center gap-3">
                           <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Risk Clusters
                         </h5>
                         <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">{response.risks}</p>
                       </div>
                     )}
                     {response.matrix && (
                       <div className="space-y-3">
                         <h5 className="text-[10px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-3">
                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Advantage Matrix
                         </h5>
                         <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">{response.matrix}</p>
                       </div>
                     )}
                  </div>
               </div>
               
               <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex gap-4">
                     {['Legality', 'Liquidity', 'Resilience'].map(stat => (
                       <div key={stat} className="flex flex-col gap-2">
                          <div className="h-1 w-20 bg-slate-800 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-500" style={{ width: `${60 + Math.random()*35}%` }}></div>
                          </div>
                          <span className="text-[7px] font-black uppercase tracking-widest text-slate-600">{stat} Optimized</span>
                       </div>
                     ))}
                  </div>
                  <a href="#contact" className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 hover:text-white transition-colors flex items-center gap-3 group">
                    Convert Briefing to Mandate 
                    <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
                  </a>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const pedigree = [
    { label: "Advocacy", items: ["Juris Doctor (JD)", "LLM Business Law", "LLM Banking & Finance", "Supreme Court Advocacy"] },
    { label: "Resilience", items: ["M.Eng Cybersecurity Policy", "CAPP Certified", "PACC Member", "Environmental Consultant"] },
    { label: "Economics", items: ["MBA Finance", "Honours BA (PoliSci/Psych)", "Justice System Admin (PGD)", "Global Mgmt Professor"] }
  ];

  return (
    <section id="about" className="py-24 md:py-48 px-6 reveal bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
          
          {/* Visual Matrix */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1">
            <h4 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.6em] mb-10 md:mb-12 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[1px] bg-blue-600"></span> Structural Architecture
            </h4>
            <div className="space-y-4 md:space-y-6">
              {pedigree.map((group, idx) => (
                <div key={idx} className="group p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-[2rem] md:rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                  <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 group-hover:text-blue-600 transition-colors">{group.label} Domain</h5>
                  <ul className="grid gap-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-800">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <MandateAssistant />
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-4xl xs:text-5xl md:text-7xl font-bold serif leading-[1.1] mb-10 md:mb-12 tracking-tighter text-slate-900">
              The Integrated <br/><span className="text-blue-600 italic">Framework</span>.
            </h2>
            <div className="space-y-8 md:space-y-10 text-slate-600 leading-relaxed font-light text-lg md:text-2xl text-left md:text-justify hyphens-auto">
              {BIO_PARAGRAPHS.map((p, i) => (
                <p key={i} className={i === 0 ? "text-slate-900 font-medium" : ""}>{p}</p>
              ))}
            </div>

            <div className="mt-12 md:mt-20 grid grid-cols-2 gap-4 md:gap-8">
               <div className="p-6 md:p-10 bg-slate-950 text-white rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 italic serif">Supreme Court</div>
                  <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Counsel in leading SCC case</div>
               </div>
               <div className="p-6 md:p-10 bg-blue-600 text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl">
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 italic serif">All Levels</div>
                  <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Court Appearances</div>
               </div>
            </div>

            <div className="mt-12 p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-10">
               <div className="shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center text-3xl text-slate-300 shadow-sm">
                     <i className="fa-solid fa-building-columns"></i>
                  </div>
               </div>
               <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Governance & Oversight Engagement</h4>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">Serving as a Director on several Boards, Tim provides strategic foresight on fiduciary responsibility and institutional ethics for regional and international mandates.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<StrategicService | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedPillar ? 'hidden' : 'unset';
  }, [selectedPillar]);

  return (
    <section id="services" className="py-24 bg-slate-950 text-white rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-10 my-10 md:my-12 reveal shadow-2xl overflow-hidden scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl xs:text-5xl md:text-8xl font-bold serif mb-6 md:mb-8 leading-tight">Structural <br/><span className="text-blue-500 italic">Pillars</span>.</h2>
          <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light max-w-2xl">Advisory architecture for organizations navigating the convergence of technology, law, and capital.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {SERVICES.map((s, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedPillar(s)}
              className="group bg-white/[0.03] p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 cursor-pointer flex flex-col min-h-[380px] md:min-h-[450px]"
            >
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform shadow-2xl shadow-blue-900/40 shrink-0"><i className={`fa-solid ${s.icon}`}></i></div>
                <div className="opacity-0 lg:group-hover:opacity-100 transition-opacity text-blue-400 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] pt-4">
                  Review Mandate <i className="fa-solid fa-chevron-right text-[8px]"></i>
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 serif leading-snug">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-10 font-light text-base md:text-lg">{s.description}</p>
              <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5 mt-auto">
                {s.tags.slice(0, 3).map((t: string) => (
                  <span key={t} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Overlay Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-[2000] flex items-end md:items-center justify-center p-0 md:p-4">
          <div className="absolute inset-0 bg-slate-950/98 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setSelectedPillar(null)}></div>
          
          <div className="relative w-full max-w-2xl h-[92dvh] md:h-[85vh] bg-white rounded-t-[2.5rem] md:rounded-[3rem] text-slate-900 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-500 border border-slate-200">
            
            <div className="p-8 md:p-14 overflow-y-auto scroll-smooth hide-scrollbar flex-grow pb-24 md:pb-14 text-balance">
              <div className="flex flex-col gap-10 md:gap-14">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xl">
                    <i className={`fa-solid ${selectedPillar.icon}`}></i>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold serif mb-4 text-slate-900 leading-tight">{selectedPillar.title}</h3>
                </div>

                <div className="relative p-8 md:p-12 bg-blue-50 rounded-[2rem] md:rounded-[2.5rem] border border-blue-100 italic">
                   <p className="text-lg md:text-2xl font-medium leading-relaxed text-blue-900">"{selectedPillar.expansiveDetails.philosophy}"</p>
                </div>

                <div className="grid gap-10">
                   <div className="space-y-4">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border-b border-slate-100 pb-2">Mandate Context</h5>
                      <p className="text-slate-600 text-base md:text-lg leading-relaxed">{selectedPillar.expansiveDetails.industrialContext}</p>
                   </div>
                   
                   <div className="space-y-6">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border-b border-slate-100 pb-2">Strategic Focus Areas</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedPillar.expansiveDetails.focusAreas.map((area, idx) => (
                          <div key={idx} className="flex gap-4 items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                            <span className="font-bold text-slate-800 text-[13px]">{area}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="space-y-8">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border-b border-slate-100 pb-2">Operational Methodology</h5>
                      <div className="space-y-6">
                        {selectedPillar.expansiveDetails.methodology.map((m, idx) => (
                          <div key={idx} className="flex gap-6 group">
                            <span className="text-blue-600 font-black italic text-2xl opacity-20 group-hover:opacity-100 transition-all shrink-0">0{idx + 1}</span>
                            <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">{m}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 border-t border-slate-100 flex gap-3 bg-white/90 backdrop-blur-md">
               <a href="#contact" onClick={() => setSelectedPillar(null)} className="flex-1 py-5 bg-slate-900 text-white text-center font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl active:bg-blue-600 active:scale-[0.97] transition-all">Engage Counsel</a>
               <button onClick={() => setSelectedPillar(null)} className="px-6 md:px-10 py-5 bg-slate-50 border border-slate-200 text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl active:bg-white active:text-slate-900 transition-all">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const Insights: React.FC = () => (
  <section id="insights" className="py-24 md:py-48 px-6 reveal scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl xs:text-5xl md:text-7xl font-bold serif mb-6 md:mb-8 text-slate-900 leading-tight">Thought <br className="xs:hidden"/><span className="text-blue-600 italic">Leadership</span>.</h2>
        <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">Academic contributions at the intersection of Law, Technology, and Finance.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
        {PUBLICATIONS.map((pub: Publication, i: number) => (
          <div key={i} className="group flex flex-col p-8 md:p-12 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">{pub.date}</span>
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{pub.outlet}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold serif mb-6 text-slate-900 leading-snug group-hover:text-blue-700 transition-colors relative z-10">{pub.title}</h3>
            <p className="text-slate-500 leading-relaxed flex-grow text-[15px] md:text-[16px] font-light mb-10 relative z-10">
              {pub.summary.split('KEY TAKEAWAY:')[0]}
            </p>
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-slate-900 font-black text-[9px] uppercase tracking-[0.2em] relative z-10 mt-auto touch-manipulation">
                <span className="border-b border-slate-200 pb-0.5 group-hover:border-blue-600 transition-all">Review Mandate</span>
                <i className="fa-solid fa-arrow-right-long text-blue-600"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Strategic Inquiry from ${fd.get('name')}`);
    const body = encodeURIComponent(`Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\nMessage: ${fd.get('message')}`);
    
    setTimeout(() => {
       window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}?body=${body}`;
       setLoading(false);
       setSent(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 reveal text-white text-center scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl xs:text-5xl md:text-7xl font-bold serif mb-10 leading-tight">Engage <span className="text-blue-500 italic">Counsel</span>.</h2>
        {!sent ? (
          <form onSubmit={submit} className="space-y-6 bg-white/[0.02] p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-left border border-white/5 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-2">Identify</label>
                 <input name="name" placeholder="Full Name / Institution" required className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-blue-500 focus:bg-slate-800 transition-all" />
              </div>
              <div className="space-y-2">
                 <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-2">Coordinate</label>
                 <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-blue-500 focus:bg-slate-800 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
               <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 ml-2">Strategic Mandate</label>
               <textarea name="message" placeholder="Outline objectives..." rows={4} required className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-blue-500 focus:bg-slate-800 transition-all resize-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-6 bg-blue-600 hover:bg-blue-500 font-bold rounded-2xl tracking-[0.3em] uppercase text-[10px] transition-all active:scale-[0.97] disabled:opacity-50">
              {loading ? "Preparing Nexus..." : "Transmit Inquiry"}
            </button>
          </form>
        ) : (
          <div className="p-12 md:p-16 bg-blue-600/5 rounded-[2.5rem] md:rounded-[4rem] text-blue-400 border border-blue-600/20 max-w-2xl mx-auto shadow-2xl">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center text-4xl md:text-5xl mb-8 md:mb-10 mx-auto shadow-xl">
               <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white serif">Transmission Prepared</h3>
            <p className="font-light text-base md:text-xl leading-relaxed mb-10 text-balance">Your email client has been opened with your inquiry draft. Please finalize the send process to transmit securely.</p>
            <button onClick={() => setSent(false)} className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-blue-400 transition-colors">Start New Inquiry</button>
          </div>
        )}
      </div>
    </section>
  );
};

export const Resources: React.FC = () => (
  <section id="resources" className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="shrink-0 text-center lg:text-left">
          <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 mb-4">Strategic Ecosystem</h4>
          <p className="text-sm text-slate-400 font-medium tracking-tight">Authoritative Professional Institutions</p>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-end gap-3 md:gap-4 w-full lg:w-auto">
          {RESOURCES.slice(0, 6).map((res, i) => (
            <a 
              key={i} 
              href={res.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 bg-white border border-slate-200 rounded-xl md:rounded-2xl hover:border-blue-400 transition-all text-left group"
            >
              <i className={`fa-solid ${res.icon} text-slate-300 group-hover:text-blue-600 transition-colors text-xs`}></i>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-900">{res.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
