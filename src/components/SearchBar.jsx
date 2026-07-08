import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, propertyType, budget });
  };

  return (
    <form 
      onSubmit={handleSearchSubmit}
      className="mt-12 w-full max-w-4xl bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800 text-left grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Location</label>
        <select 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 py-1.5 focus:ring-0 focus:border-blue-500 font-medium text-slate-700 dark:text-slate-200"
        >
          <option value="">Select Location</option>
          <option value="Salem">Salem, TN</option>
          <option value="Chennai">Chennai, TN</option>
          <option value="Coimbatore">Coimbatore, TN</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Property Type</label>
        <select 
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 py-1.5 focus:ring-0 focus:border-blue-500 font-medium text-slate-700 dark:text-slate-200"
        >
          <option value="">Select Property Type</option>
          <option value="Villa">Luxury Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Beach House">Beach House</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Budget</label>
        <select 
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full bg-transparent border-0 border-b border-slate-200 dark:border-slate-700 py-1.5 focus:ring-0 focus:border-blue-500 font-medium text-slate-700 dark:text-slate-200"
        >
          <option value="">Select Budget</option>
          <option value="low">50 lacs - 1 cr</option>
          <option value="mid">1 - 5 cr</option>
          <option value="high">5 cr+</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md py-3 md:py-0"
      >
        <span>Search</span>
      </button>
    </form>
  );
}