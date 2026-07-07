import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-900">
        <div>
          <div className="font-black text-2xl tracking-wider text-blue-400 mb-4">VS Estates</div>
          <p className="text-sm text-slate-500 leading-relaxed">
             since 2012.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home Base</a></li>
            <li><a href="#properties" className="hover:text-blue-400 transition-colors">Sale & Rent</a></li>
            <li><a href="#featured" className="hover:text-blue-400 transition-colors">Masterpieces</a></li>
            <li><a href="#agents" className="hover:text-blue-400 transition-colors">Meet Our Agents</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Property Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="hover:text-blue-400 cursor-pointer">Luxury Villas</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Sky Penthouses</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Beach Houses</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer"> Apartments</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Get the latest property insights directly to your inbox.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-l-xl text-white focus:outline-none focus:border-blue-500 text-sm" />
            <button className="bg-blue-600 text-white px-4 rounded-r-xl font-bold hover:bg-blue-700 transition-colors text-sm">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} VS Estates Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}