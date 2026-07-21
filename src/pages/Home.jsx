import React, { useRef } from 'react';
import { Music, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroPiano from '../components/HeroPiano';
import RecitalHall from '../components/RecitalHall';

export default function Home({ setActivePage }) {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 768 ? 480 : clientWidth * 0.85;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const curriculum = [
    {
      code: '01',
      title: 'Western Classical Piano',
      desc: 'From your first middle C to concert repertoire — technique, expression and artistry taught the way the masters intended.'
    },
    {
      code: '02',
      title: 'Music Theory',
      desc: 'Understand what you play. Harmony, scales, intervals and form — the grammar that turns players into musicians.'
    },
    {
      code: '03',
      title: 'Staff Notation',
      desc: 'Read and write music fluently. Sight-reading skills that unlock any score you\'ll ever want to play.'
    },
    {
      code: '04',
      title: 'Composition',
      desc: 'Find your own voice. Learn to shape melody, harmony and structure into music that is unmistakably yours.'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA]">
      
      {/* 1. HERO SECTION (Editorial Music Conservatory Grid) */}
      <section className="relative border-b border-neutral-200 py-16 px-6">
        
        {/* Large Background Serif Title */}
        <div className="absolute inset-x-0 top-6 text-center select-none pointer-events-none opacity-5 z-0">
          <span className="font-serif font-extrabold text-[120px] sm:text-[180px] md:text-[240px] tracking-[0.15em] text-piano-dark uppercase block leading-none">
            PIANO
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          
          {/* Left Column: School details & Actions */}
          <div className="lg:col-span-3 space-y-6 lg:border-r lg:border-neutral-200 lg:pr-8">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-piano-slate block">A piano school run by professional pianists</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black text-piano-dark leading-tight">The True Art of Playing the Piano</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-sm md:text-base text-piano-dark/80 leading-relaxed font-normal">
                Hello, we are Piano Profs, a piano school run by professional pianists. Piano Profs is a vision, a dream to spread the true essence and art of playing the piano across the world.
              </p>
              <p className="text-sm md:text-base text-piano-dark/80 leading-relaxed font-normal">
                Live, one-to-one online lessons in Western Classical piano, music theory, staff notation and composition — for every age, every level, anywhere in the world.
              </p>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 bg-piano-dark hover:bg-piano-slate text-white text-xs uppercase font-bold tracking-widest transition-colors shadow-sm"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="w-full py-4 border border-neutral-300 hover:border-piano-dark text-piano-dark text-xs uppercase font-bold tracking-widest transition-colors"
              >
                Explore Gallery
              </button>
            </div>
          </div>

          {/* Center Column: Grand Piano Image Overlap */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-8">
            <div className="w-full relative bg-white p-3 border border-neutral-200 shadow-premium">
              <div className="w-full aspect-[16/10] overflow-hidden">
                <img 
                  src="/hands-on-piano.png" 
                  alt="Professional hands playing grand piano keys" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Stats */}
          <div className="lg:col-span-3 space-y-8 lg:border-l lg:border-neutral-200 lg:pl-8 font-sans">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-piano-slate block">Years of Teaching</span>
              <p className="text-4xl font-serif font-black text-piano-dark">11+</p>
              <p className="text-xs md:text-sm text-piano-dark/60 leading-relaxed font-normal">Accredited private conservatory training experience.</p>
            </div>

            <div className="space-y-2 pt-4 border-t border-neutral-100">
              <span className="text-[11px] font-bold uppercase tracking-widest text-piano-slate block">Professional Pianists</span>
              <p className="text-4xl font-serif font-black text-piano-dark">100%</p>
              <p className="text-xs md:text-sm text-piano-dark/60 leading-relaxed font-normal">Learn directly from performing concert artists.</p>
            </div>

            <div className="space-y-2 pt-4 border-t border-neutral-100">
              <span className="text-[11px] font-bold uppercase tracking-widest text-piano-slate block">Grade Preparation</span>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-piano-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <p className="text-2xl font-serif font-black text-piano-dark leading-tight">Trinity</p>
              </div>
              <p className="text-xs md:text-sm text-piano-dark/60 leading-relaxed font-normal">Certification by Trinity College London.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PLAYABLE KEYBOARD (Premium Dark Studio Frame) */}
      <section className="py-20 px-6 bg-piano-dark text-white border-b border-neutral-800 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          <div className="space-y-2 mb-8">
            <span className="text-[10px] uppercase font-bold tracking-widest text-piano-accent block">Try It Now</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">Every journey starts with a single note</h2>
            <p className="text-xs text-white/70 max-w-xl mx-auto leading-relaxed font-light mt-2">
              Go on — play something. Click the keys, or use your computer keyboard.
            </p>
          </div>
          
          <HeroPiano setActivePage={setActivePage} />

          <p className="text-[10px] text-white/40 tracking-widest uppercase mt-8 font-sans">
            Imagine what you could play after your <span className="text-piano-accent underline cursor-pointer hover:text-white transition-colors" onClick={() => handleNavClick('contact')}>first real lesson</span>.
          </p>
        </div>
      </section>

      {/* 3. STUDENT RECITAL HALL (Vinyl Player console) */}
      <section className="py-24 px-6 relative border-b border-neutral-200 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Showcasing Our Work</span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-piano-dark">Student Recital Hall</h2>
            <p className="text-sm md:text-base text-piano-dark/65 max-w-lg mx-auto font-normal mt-2 leading-relaxed">
              Select and play arpeggiated tracks synthesized live in browser to hear our students' performance quality.
            </p>
          </div>
          <RecitalHall />
        </div>
      </section>

      {/* 4. CURRICULUM CATALOG GRID */}
      <section className="py-24 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-8">
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">What We Teach</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-piano-dark">Four disciplines. One complete musician.</h2>
            </div>
            <p className="text-sm md:text-base text-piano-dark/60 font-light max-w-sm mt-4 md:mt-0 leading-relaxed">
              A structured conservatory framework mapping technical skills, theory analysis, notation and compositions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {curriculum.map((c, idx) => (
              <div key={idx} className="p-6 md:p-8 space-y-4">
                <span className="text-[10px] font-bold text-piano-slate tracking-widest block uppercase">
                  {c.code}
                </span>
                <h3 className="font-serif font-bold text-lg text-piano-dark">
                  {c.title}
                </h3>
                <p className="text-xs text-piano-dark/65 font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLASSROOM LIFE PHOTO GRID (Matching Instagram block in Image 2) */}
      <section className="py-20 px-6 bg-[#FAFAFA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-piano-slate block font-sans">Social networks</span>
            <h2 className="text-3xl font-serif text-piano-dark">Classroom Life</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Student class */}
            <div className="bg-white p-3 border border-neutral-200 shadow-premium flex flex-col justify-between h-80">
              <div className="w-full h-44 overflow-hidden border border-neutral-100">
                <img 
                  src="/child-learning.png" 
                  alt="Young student online piano lessons video session" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="pt-4 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-serif font-bold text-piano-dark">Student Sessions</h4>
                  <p className="text-[10px] text-piano-dark/50 font-light">1-on-1 live screen view</p>
                </div>
                <button onClick={() => handleNavClick('about')} className="text-piano-slate hover:text-piano-dark font-bold text-[10px] uppercase tracking-wider">
                  Details
                </button>
              </div>
            </div>

            {/* Box 2: Sheet music */}
            <div className="bg-white p-3 border border-neutral-200 shadow-premium flex flex-col justify-between h-80">
              <div className="w-full h-44 overflow-hidden border border-neutral-100">
                <img 
                  src="/sheet-music.png" 
                  alt="Conservatory Sheet Music Pages" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="pt-4 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-serif font-bold text-piano-dark">Study Literature</h4>
                  <p className="text-[10px] text-piano-dark/50 font-light">Bach, Mozart & ABRSM books</p>
                </div>
                <button onClick={() => handleNavClick('courses')} className="text-piano-slate hover:text-piano-dark font-bold text-[10px] uppercase tracking-wider">
                  Catalog
                </button>
              </div>
            </div>

            {/* Box 3: Exam preparation */}
            <div className="bg-white p-3 border border-neutral-200 shadow-premium flex flex-col justify-between h-80">
              <div className="w-full h-44 bg-[#F2F4F5] flex items-center justify-center border border-neutral-100 select-none">
                <Music className="w-12 h-12 text-piano-slate/30" />
              </div>
              <div className="pt-4 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-serif font-bold text-piano-dark">Trinity Grade Exam Prep</h4>
                  <p className="text-[10px] text-piano-dark/50 font-light">Accredited exam prep checklists</p>
                </div>
                <button onClick={() => handleNavClick('contact')} className="text-piano-slate hover:text-piano-dark font-bold text-[10px] uppercase tracking-wider">
                  Contact
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5.5 STUDENT TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#FAFAFA] border-b border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Row: Title on Left, Navigation Arrows on Right */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-neutral-200 pb-8 gap-4">
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-piano-dark">What Our Students & Parents Say</h2>
            </div>
            
            {/* Scroll Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 border border-neutral-300 hover:border-piano-dark hover:bg-neutral-100 flex items-center justify-center text-piano-dark transition-all rounded-none focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 border border-neutral-300 hover:border-piano-dark hover:bg-neutral-100 flex items-center justify-center text-piano-dark transition-all rounded-none focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-none"
          >
            {[
              {
                name: "RITA ARORA",
                role: "Parent of Student",
                quote: "I was looking for piano classes for my daughter. She is a specially abled child. My daughter is very happy, she loves attending classes. Thank you Piano Profs for all the patience, care and support."
              },
              {
                name: "RISHI RANJAN",
                role: "Trinity Candidate Parent",
                quote: "My son got distinction in Trinity Grade 6 piano exam recently. I highly recommend Piano Profs."
              },
              {
                name: "RONIT ROY",
                role: "Parent of Student",
                quote: "Just like the name, these guys are professionals. Go for it guys, you aren’t going to find a place like this. My son is rocking."
              },
              {
                name: "VANSHIKA SINHA",
                role: "Multi-generational Learning",
                quote: "My son is 12 and learning from Piano Profs. He is making very good progress. My father is retired and he also joined and is happy. Never thought online classes could be this effective!"
              },
              {
                name: "ALISH KHAN",
                role: "Trinity Grade 5 Prep",
                quote: "I’ve been learning for 3 years from Shahzaad sir and am now preparing for the Grade 5 Trinity exam. His method of teaching is on another level, and he is a very kind and dedicated person."
              },
              {
                name: "NIDHI SANKLA",
                role: "Adult Learner",
                quote: "The teaching way is very friendly and interesting. It is very nice to attend these classes from the comfort of my house. Thanks!"
              }
            ].map((t, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 border border-neutral-200 shadow-premium hover:border-piano-slate/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-[85vw] sm:w-[420px] flex-shrink-0 snap-start"
              >
                <div className="space-y-4">
                  {/* Gold Stars */}
                  <div className="flex space-x-1 text-piano-gold text-xs">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-sm text-piano-dark/75 leading-relaxed italic font-light">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <h4 className="font-serif font-black text-sm text-piano-dark tracking-wide">{t.name}</h4>
                  <p className="text-[10px] text-piano-slate font-bold uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FOUNDER STATEMENT */}
      <section className="py-24 px-6 bg-white border-b border-neutral-200 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Founder Quote</span>
          <blockquote className="text-2xl md:text-3xl font-serif text-piano-dark leading-relaxed max-w-3xl mx-auto font-normal italic">
            “I assure you that all our professionals will surpass the best in their art of playing the piano — and you too will become a PianoProf.”
          </blockquote>
          <div className="space-y-1 pt-2">
            <h4 className="font-serif font-black text-base text-piano-dark uppercase tracking-wider">Shahzaad Ali Khan</h4>
            <p className="text-[10px] uppercase tracking-widest font-bold text-piano-slate">Founder & Principal Instructor</p>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM EMAIL SUBSCRIBE */}
      <section className="py-24 px-6 bg-piano-dark text-white text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-piano-slate font-bold block">Conservatory Enrollment</span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white">Ready to play your first note?</h2>
            <p className="text-white/70 text-sm md:text-base font-sans max-w-lg mx-auto font-normal leading-relaxed">
              Book a free trial lesson with a professional pianist — no commitment, just music.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto pt-2 gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-grow px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-white focus:ring-0 text-sm text-white rounded-none outline-none font-sans"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-white hover:bg-neutral-200 text-piano-dark font-sans font-bold text-xs uppercase tracking-widest transition-colors rounded-none"
            >
              Book a Free Trial
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
