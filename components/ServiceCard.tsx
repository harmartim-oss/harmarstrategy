
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="w-14 h-14 bg-slate-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 text-2xl shadow-inner border border-slate-100">
        <i className={`fa-solid ${service.icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4 serif">{service.title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
