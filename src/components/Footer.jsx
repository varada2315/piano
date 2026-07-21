import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-piano-dark text-white pt-16 pb-8 px-6 mt-auto border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 font-sans">
        
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <span className="font-serif font-bold text-lg uppercase tracking-widest text-white block">
            Piano Profs
          </span>
          <p className="text-white/60 text-xs max-w-sm leading-relaxed font-light">
            An online conservatory dedicated to spreading the true essence and art of playing classical piano. Run by professional pianists for students of all ages.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-xs uppercase tracking-widest text-white">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-xs text-white/50 font-light">
            <li>
              <button 
                onClick={() => handleNavClick('home')} 
                className="hover:text-piano-slate transition-colors duration-150 focus:outline-none"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')} 
                className="hover:text-piano-slate transition-colors duration-150 focus:outline-none"
              >
                About Us
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleNavClick('gallery')} 
                className="hover:text-piano-slate transition-colors duration-150 focus:outline-none"
              >
                Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="hover:text-piano-slate transition-colors duration-150 focus:outline-none"
              >
                Pricing
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="hover:text-piano-slate transition-colors duration-150 focus:outline-none"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-xs uppercase tracking-widest text-white">
            Conservatory
          </h3>
          <ul className="space-y-3.5 text-xs text-white/50 font-light">
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-piano-slate" />
              <a href="mailto:thepianoprofs@gmail.com" className="hover:text-piano-slate transition-colors">
                thepianoprofs@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-piano-slate" />
              <a href="tel:+919999720213" className="hover:text-piano-slate transition-colors">
                +91 99997 20213
              </a>
            </li>
            <li className="text-[10px] text-white/30 pt-1 leading-relaxed">
              Serving music students in USA, Europe, Middle East, and Asia.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom info */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-white/35 font-light">
        <p>&copy; {new Date().getFullYear()} Piano Profs. All rights reserved.</p>
        <p className="uppercase tracking-widest text-white/20">Accredited Classical Instruction</p>
      </div>
    </footer>
  );
}
