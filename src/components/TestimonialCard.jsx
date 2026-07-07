import React from 'react';

export default function TestimonialCard({ image, name, rating, text, property }) {
  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 dark:border-slate-800 relative">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{property}</p>
        </div>
      </div>
      <div className="mt-4 text-amber-500 tracking-wider">
        {'★'.repeat(rating)}
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300 italic leading-relaxed">
        "{text}"
      </p>
    </div>
  );
}