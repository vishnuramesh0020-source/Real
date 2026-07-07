import React from 'react';

export default function AgentCard({ image, name, role, exp }) {
  return (
    <div className="group bg-white dark:bg-slate-950 rounded-2xl p-4 shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 text-center">
      <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 group-hover:border-blue-500 transition-colors">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover block" 
        />
      </div>
      <h3 className="text-xl font-bold mt-4 text-slate-800 dark:text-white">{name}</h3>
      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{role}</p>
      <p className="text-xs text-slate-400 mt-1">Experience: {exp}</p>

      <div className="flex justify-center space-x-4 my-4 text-slate-400 dark:text-slate-500">
        <span className="hover:text-blue-500 cursor-pointer">🔗 LN</span>
        <span className="hover:text-blue-400 cursor-pointer">🐦 TW</span>
        <span className="hover:text-rose-500 cursor-pointer">📸 IG</span>
      </div>
      
      <button className="w-full bg-slate-50 hover:bg-blue-600 dark:bg-slate-900 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white font-semibold py-2.5 rounded-xl transition-all">
        For Enquiry
      </button>
    </div>
  );
}