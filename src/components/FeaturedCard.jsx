import React from 'react';

export default function FeaturedCard({ image, title, price, desc, specs }) {
  return (
    <div className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800/80 flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 relative min-h-[350px]">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute top-6 left-6 bg-amber-500 text-slate-950 font-black tracking-widest uppercase text-xs px-4 py-2 rounded-md shadow-md">
          ★ PREMIUM FEATURED
        </span>
      </div>
      <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
        <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{price}</span>
        <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 text-slate-800 dark:text-white leading-tight">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed">{desc}</p>
        <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl font-semibold text-sm text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
          {specs}
        </div>
        <button className="mt-8 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg self-start transition-all">
          Contact Agent
        </button>
      </div>
    </div>
  );
}