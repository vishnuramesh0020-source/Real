import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import FeaturedCard from './components/FeaturedCard';
import AgentCard from './components/AgentCard';
import TestimonialCard from './components/TestimonialCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const properties = [
  { id: 1, title: 'VS Modern Luxury Villa', location: 'Yercaud Foot Hills, Salem', price: 'RS : 1 cr', beds: 4, baths: 5, area: '4,200', status: 'For Sale', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: ' VS Apartment', location: 'Yercaud Foot Hills, Salem', price: 'RS : 80 lacs', beds: 2, baths: 2, area: '1,150', status: 'For Rent', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'VS Beach House', location: 'ECR , Chennai ', price: 'RS : 2.5 cr', beds: 5, baths: 6, area: '5,800', status: 'For Sale', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
];

const featuredProperties = [
  { id: 1, title: 'VS Grand Estate', price: 'RS : 8.9 cr', desc: 'An architectural masterpiece featuring breathtaking panoramic city views, infinity pool, custom wine cellar, and state-of-the-art smart home integration system.', specs: '6 Beds • 8 Baths • 9,500 sq.ft.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' }
];

const agents = [
  { id: 1, name: 'Vishnu', role: 'Broker', exp: '8+ Yrs', image: new URL('./vishnu.jpg', import.meta.url).href },
  { id: 2, name: 'Velan', role: 'Agent', exp: '6+ Yrs', image: new URL('./velan.jpg', import.meta.url).href },
  { id: 3, name: 'PremKumar', role: 'Senior Consultant', exp: '10+ Yrs', image: new URL('./prem.jpg', import.meta.url).href }
];

const testimonials = [
  { id: 1, name: 'Roja', rating: 4.5, text: 'Finding our dream home with this team was effortless. Their dedication and transparent process turned what usually is a stressful event into a beautiful milestone.', property: 'VS Modern Luxury Villa' }
];

export default function App() {
const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 scroll-smooth">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
    {/* // <div className={`bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300 scroll-smooth ${darkMode ? 'dark' : ''}`}>
    // <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    // <Hero onSearchChange={setFilters} /> */}
      
      <section className="py-12 bg-blue-600 text-white dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-4xl font-extrabold">12K+</p><p className="text-blue-100 text-sm mt-1">Properties Listed</p></div>
          <div><p className="text-4xl font-extrabold">8K+</p><p className="text-blue-100 text-sm mt-1">Happy Clients</p></div>
          <div><p className="text-4xl font-extrabold">150+</p><p className="text-blue-100 text-sm mt-1">Expert Agents</p></div>
          <div><p className="text-4xl font-extrabold">25+</p><p className="text-blue-100 text-sm mt-1">Awards Won</p></div>
        </div>
      </section>


      <section id="properties" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Latest Properties for Sale & Rent</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Explore handpicked residential and commercial properties globally.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(p => <PropertyCard key={p.id} {...p} />)}
        </div>

      </section>


      <section id="featured" className="py-20 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Masterpieces</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Curated luxury and unmatched craftsmanship for elite living.</p>
          </div>
          {featuredProperties.map(fp => <FeaturedCard key={fp.id} {...fp} />)}
        </div>
      </section>


      <section id="agents" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Agents</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Senior consultants ready to guide you home.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map(agent => <AgentCard key={agent.id} {...agent} />)}
        </div>
      </section>


      <section className="py-20 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>


      <section id="contact" className="py-20 max-w-7xl mx-auto px-4">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}