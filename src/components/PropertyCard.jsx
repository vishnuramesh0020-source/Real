import React from 'react';

export default function PropertyCard({ image, title, location, price, beds, baths, area, status }) {
  return (
    <div className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800/80 transition-all duration-300">
      <div className="relative overflow-hidden h-64">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className={`absolute top-4 left-4 text-xs font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider shadow-md text-white ${status === 'For Sale' ? 'bg-emerald-600' : 'bg-amber-600'}`}>
          {status}
        </span>
      </div>
      
      <div className="p-6">
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">{price}</p>
        <h3 className="text-lg font-bold text-slate-800 dark:text-white line-clamp-1">{title}</h3>
        <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center mt-1">📍 {location}</p>
        
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          <div className="bg-slate-50 dark:bg-slate-900 py-2 rounded-lg"> {beds} Beds</div>
          <div className="bg-slate-50 dark:bg-slate-900 py-2 rounded-lg"> {baths} Baths</div>
          <div className="bg-slate-50 dark:bg-slate-900 py-2 rounded-lg"> {area} sqft</div>
        </div>

        <button className="w-full mt-6 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold py-3 rounded-xl transition-all group-hover:bg-blue-600 group-hover:text-white">
          View Details
        </button>
      </div>
    </div>
  );
}