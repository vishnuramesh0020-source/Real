import React from 'react';
import SearchBar from './SearchBar';

export default function Hero({ onSearch }) {
  return (
    <div className="relative h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')" }}>

      <div className="absolute inset-0 bg-slate-950/50 backdrop-brightness-75"></div>
      
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        
        <a href="#properties" className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5">
          Explore Properties
        </a>
        <SearchBar onSearch={onSearch} />
        
      </div>
    </div>
  );
}