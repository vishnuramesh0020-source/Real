import React from 'react';

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
      <div className="bg-white dark:bg-slate-950 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/80">
        <h3 className="text-2xl font-bold mb-6">Enquiry About Premium Luxury</h3>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
            <input type="text" className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 py-3" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email Address</label>
            <input type="email" className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 py-3" placeholder="Enter your email address" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Phone Number</label>
            <input type="tel" className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500 py-3" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Message</label>
            <textarea rows="4" className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white focus:border-blue-500 focus:ring-blue-500" placeholder="Describe what you are looking for..."></textarea>
          </div>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all">
            Submit
          </button>
        </form>
      </div>

    
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Corporate Office</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            5 Roads,Salem,<br />
            Tamil Nadu, India<br />
            636007
          </p>
          <div className="mt-6 space-y-2 font-medium">
            <p> Phone: <span className="text-blue-600 dark:text-blue-400">+91 427 265 1234</span></p>
            <p> Email: <span className="text-blue-600 dark:text-blue-400">Customer@VSestates.com</span></p>
          </div>
        </div>

      
        <div className="w-full h-72 rounded-2xl overflow-hidden relative bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative text-center z-10 px-4">
            <span className="text-3xl block mb-2">📍</span>
            <p className="font-bold text-slate-700 dark:text-slate-300">Google Map</p>
            <p className="text-xs text-slate-400 mt-1">5 Roads, Salem, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}