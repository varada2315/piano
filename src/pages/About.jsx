import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Shahzaad is a highly professional piano instructor. His way of teaching goes far beyond pressing the right keys — he teaches you to feel the music.",
    name: "A Piano Profs Student",
    role: "Western Classical, Grade 3"
  },
  {
    quote: "I started as a complete beginner at 40, convinced it was too late for me. Six months in, I'm reading staff notation and playing pieces I never dreamed I could.",
    name: "Adult Learner",
    role: "Beginner Course"
  },
  {
    quote: "The flexible scheduling made all the difference for my daughter. She never misses a class, and her Trinity exam preparation has been meticulous.",
    name: "Parent of a Student",
    role: "Trinity Grade Pathway"
  }
];

export default function About({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      
      {/* Page Header */}
      <section className="pt-20 pb-16 px-6 border-b border-neutral-200 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">About Us</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-piano-dark m-0 leading-tight">
            The people behind <span className="text-piano-slate italic font-normal">the piano</span>
          </h1>
          <p className="text-base md:text-lg text-piano-dark/60 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Piano Profs is a piano school run by professional pianists — founded on the belief that true artistry can't be taught from a textbook, only passed from musician to musician.
          </p>
        </div>
      </section>

      {/* Founder's Story & Team Profile Cards */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Story & Quote */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-piano-dark leading-tight">
                  Founded to teach the <span className="text-piano-slate italic font-normal">essence</span>, not just the notes
                </h2>
              </div>
              <p className="text-sm md:text-base text-piano-dark/80 font-normal leading-relaxed">
                Piano Profs was born from a simple observation: too many students at conventional institutions were learning to press keys without ever learning true knowledge and style. We exist to change that — to teach and spread the true essence and art of playing the piano across the world.
              </p>
              
              <blockquote className="mt-8 border-l-2 border-piano-slate pl-6 py-2 space-y-3">
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-piano-dark">
                  “I assure you that all our professionals will surpass the best in their art of playing the piano — and you too will become a PianoProf.”
                </p>
                <footer className="text-[11px] text-piano-dark/60 uppercase tracking-widest font-sans font-bold">
                  Shahzaad Ali Khan <span className="text-piano-slate font-light">— Founder & Principal Instructor</span>
                </footer>
              </blockquote>
            </div>

            {/* Right Column: Team Profile Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Card 1: Shahzaad Ali Khan */}
              <div className="bg-white p-8 border border-neutral-200 shadow-premium hover:border-piano-slate/40 transition-all duration-300">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0 shadow-inner-soft">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80" 
                      alt="Shahzaad Ali Khan" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-lg text-piano-dark leading-none">Shahzaad Ali Khan</h3>
                    <p className="text-[11px] text-piano-slate font-bold uppercase tracking-wider mt-2.5">Founder · Pianist, New Delhi</p>
                  </div>
                </div>
                <p className="text-sm text-piano-dark/75 leading-relaxed mt-5">
                  A performing pianist with over 8 years of teaching experience, Shahzaad has performed in shows across the country and taught at leading music institutions before founding Piano Profs.
                </p>
              </div>

              {/* Card 2: Nitin Bajaj */}
              <div className="bg-white p-8 border border-neutral-200 shadow-premium hover:border-piano-slate/40 transition-all duration-300 lg:ml-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0 shadow-inner-soft">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80" 
                      alt="Nitin Bajaj" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-lg text-piano-dark leading-none">Nitin Bajaj</h3>
                    <p className="text-[11px] text-piano-slate font-bold uppercase tracking-wider mt-2.5">Manager · Student Success</p>
                  </div>
                </div>
                <p className="text-sm text-piano-dark/75 leading-relaxed mt-5">
                  An independent music manager chosen by our faculty, Nitin runs the day-to-day so every query gets answered and every issue gets solved — “because we care.”
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Auto-Slider Section */}
      <section className="bg-piano-dark text-white py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(92,126,141,0.15),transparent_60%)]"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(92,126,141,0.15),transparent_60%)]"></div>
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-accent block">Student Voices</span>
          
          <div className="relative min-h-[220px] md:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 w-full"
              >
                <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-white/95">
                  “{testimonials[currentTestimonial].quote}”
                </p>
                <footer className="pt-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-piano-accent">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-[11px] text-white/50 font-light mt-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 pt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                  currentTestimonial === idx 
                    ? 'w-10 bg-piano-accent' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Closing Callout CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-piano-dark">Ready to play your first note?</h2>
          <p className="text-sm md:text-base text-piano-dark/70 leading-relaxed font-light">
            Book a free trial lesson with a professional pianist — no commitment, just music.
          </p>
          <div className="pt-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary px-8 py-4 text-xs tracking-widest"
            >
              Book a Free Trial
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
