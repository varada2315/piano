import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-6 py-5 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Wordmark Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none group"
        >
          <span className="font-serif font-bold text-xl uppercase tracking-widest text-piano-dark block leading-none">
            Piano Profs
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-piano-slate font-bold block mt-1.5">
            Conservatory of Music
          </span>
        </button>

        {/* Desktop Links (Editorial: uppercase text-xs) */}
        <div className="hidden md:flex items-center space-x-1 font-sans font-medium text-xs uppercase tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 transition-all duration-150 focus:outline-none ${
                activePage === item.id 
                  ? 'text-piano-slate font-semibold' 
                  : 'text-piano-dark/65 hover:text-piano-dark'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary"
          >
            Book Free Trial
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-piano-dark hover:text-piano-slate focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 flex flex-col space-y-2 px-2 pb-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 px-4 font-semibold text-xs uppercase tracking-widest ${
                activePage === item.id 
                  ? 'bg-piano-slateLight text-piano-slate' 
                  : 'text-piano-dark/70 hover:bg-neutral-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-center py-3 bg-piano-dark hover:bg-piano-slate text-white text-xs uppercase tracking-widest font-semibold transition-colors focus:outline-none"
          >
            Book Free Trial
          </button>
        </div>
      )}
    </nav>
  );
}
