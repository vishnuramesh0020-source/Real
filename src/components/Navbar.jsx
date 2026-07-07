import React, { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center font-black text-4xl tracking-wider text-blue-600 dark:text-blue-400">
            VS<span className="text-slate-800 dark:text-white text-xl">Estates</span>
          </div>
          

          <div className="hidden md:flex space-x-8 items-center font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
            <a href="#featured" className="hover:text-blue-600 transition-colors">Featured</a>
            <a href="#agents" className="hover:text-blue-600 transition-colors">Agents</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

          </div>


          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-xl">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-lg transition-all animate-fadeIn">
          <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium">Home</a>
          <a href="#properties" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium">Properties</a>
          <a href="#featured" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium">Featured</a>
          <a href="#agents" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium">Agents</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}