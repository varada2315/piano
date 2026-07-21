import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [prefilledPlan, setPrefilledPlan] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About setActivePage={setActivePage} />;
      case 'pricing':
        return <Pricing setActivePage={setActivePage} setPrefilledPlan={setPrefilledPlan} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact prefilledPlan={prefilledPlan} setPrefilledPlan={setPrefilledPlan} />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] flex flex-col font-sans select-text">
      {/* Header Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Branding & Info */}
      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919999720213?text=Hi!%20I'm%20interested%20in%20booking%20a%20free%20trial%20piano%20class."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src="/whatsapp.jpg" 
          alt="WhatsApp" 
          className="w-full h-full object-cover scale-[1.14] rounded-full"
        />
      </a>
    </div>
  );
}
