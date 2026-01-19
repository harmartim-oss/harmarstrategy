import React from 'react';

const Ticker: React.FC = () => {
  const items = [
    { text: "JD • MBA • LLM • M.ENG", icon: "fa-graduation-cap", color: "text-blue-400" },
    { text: "CAPP CERTIFIED", icon: "fa-shield-halved", color: "text-slate-400" },
    { text: "Argued a Leading Case at the Supreme Court of Canada", icon: "fa-scale-balanced", color: "text-blue-400" },
    { text: "Cybersecurity and AI Expertise", icon: "fa-microchip", color: "text-slate-400" },
    { text: "Business Mentor", icon: "fa-users-gear", color: "text-blue-400" },
    { text: "Professor and Trainer", icon: "fa-chalkboard-user", color: "text-slate-400" },
    { text: "Experienced Board Member", icon: "fa-building-columns", color: "text-blue-400" },
    { text: "Startup and SME Business Specialist", icon: "fa-rocket", color: "text-slate-400" },
    { text: "Seasoned Municipal Counsel", icon: "fa-city", color: "text-blue-400" },
    { text: "Civil Litigator", icon: "fa-gavel", color: "text-slate-400" },
    { text: "Strategic Architect", icon: "fa-compass-drafting", color: "text-blue-400" },
    { text: "Privacy Governance Lead", icon: "fa-user-lock", color: "text-slate-400" },
  ];

  return (
    <div className="bg-slate-900 py-6 md:py-10 overflow-hidden relative border-b border-slate-800">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2].map((loop: number) => (
          <div key={loop} className="flex gap-10 md:gap-20 items-center px-4 md:px-10">
            {items.map((item, idx) => (
              <span key={idx} className={`${item.color} text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] flex items-center gap-2 md:gap-3`}>
                <i className={`fa-solid ${item.icon} text-sm`}></i> {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { 
          animation: marquee 80s linear infinite; 
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
