import React from 'react';
import { BookOpen, Layers, Check, Award, Star } from 'lucide-react';

export default function Courses({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const disciplines = [
    {
      code: 'CL-01',
      title: 'Western Classical Piano',
      age: 'Ages 6+ & Adults',
      level: 'Beginner to Advanced',
      format: '1-on-1, Live Online',
      desc: 'Build coordinate finger movements, score-reading habits, and tone production. Study classical masters from Bach, Mozart, Beethoven, Chopin, to Debussy. We focus heavily on correct physical techniques (arm weight, relaxed wrists) to ensure healthy, lifelong playing.',
      points: ['Concert repertoire study', 'Hand/posture conditioning', 'Interpretation & Expression techniques']
    },
    {
      code: 'TH-02',
      title: 'Music Theory & Grammar',
      age: 'Ages 8+ & Adults',
      level: 'All levels',
      format: 'Integrated / Solo sessions',
      desc: 'Learn the grammar of music. We teach chord structures, scales, intervals, harmony, rhythm dictates, and structural forms. Knowing theory means you don\'t just memorize keys; you understand the blueprint of why the music sounds beautiful.',
      points: ['Chords, cadences, and keys', 'Musical structure analysis', 'Aural ear-training drills']
    },
    {
      code: 'SN-03',
      title: 'Staff Notation & Sight Reading',
      age: 'Ages 6+ & Adults',
      level: 'Beginner to Intermediate',
      format: '1-on-1, Live Online',
      desc: 'Read music notation fluently like reading a book. We break down the mysteries of the treble and bass clefs, ledger lines, complex key signatures, and time signatures. Gain the confidence to download a fresh piece of music and play it on the spot.',
      points: ['Treble & Bass clef mastery', 'Ledger lines and sight reading hacks', 'Rhythm sight-clapping exercises']
    },
    {
      code: 'CP-04',
      title: 'Composition & Creative Creation',
      age: 'Ages 10+ & Adults',
      level: 'Intermediate to Advanced',
      format: '1-on-1, Live Online',
      desc: 'Find your voice. Turn simple melodic motifs into complete structured pieces. Learn voice leading, chord voicing, thematic variation, and how to write down your own musical thoughts. Excellent for students looking to move past recreation into creation.',
      points: ['Melodic development', 'Harmonic accompaniment writing', 'Manuscript scoring skills']
    }
  ];

  const grades = [
    {
      phase: 'Initial & Prep Grades',
      desc: 'Building fundamental keyboard geography, initial finger strength, simple notation reading, and rhythm clapping.',
      focus: 'Hand relaxation, basic staff notation'
    },
    {
      phase: 'Grades 1 – 3 (Foundation)',
      desc: 'Studying simple classical pieces, primary major/minor scales, basic sight-reading, and elementary music theory.',
      focus: 'Independent hand coordination, basic articulation'
    },
    {
      phase: 'Grades 4 – 5 (Intermediate)',
      desc: 'Exploring romantic and baroque compositions, complex rhythms, basic key changes, voice leading, and full musical dynamics.',
      focus: 'Pedal usage, intermediate expression'
    },
    {
      phase: 'Grades 6 – 8 (Advanced)',
      desc: 'Approaching virtuosic recital pieces, complex classical/modern concertos, advanced structural theory, and stylistic nuances.',
      focus: 'Professional artistic phrasing, high-speed scales'
    }
  ];

  const pricing = [
    {
      title: 'Monthly Plan',
      price: '₹4,000',
      duration: '8 Classes',
      features: [
        '8 live 1-on-1 online classes',
        'Flexible scheduling',
        'Easy to reschedule (24h notice)',
        'Exam preparation inclusion',
        'Access to learning resources'
      ],
      popular: false,
      cta: 'Choose Monthly'
    },
    {
      title: 'Quarterly Plan',
      price: '₹11,000',
      duration: '24 Classes',
      save: 'Save ₹1,000',
      features: [
        '24 live 1-on-1 online classes',
        'Priority scheduling slots',
        'Easy to reschedule (24h notice)',
        'Trinity exam preparation',
        'Dedicated teacher chat support',
        'Student performance webinars'
      ],
      popular: true,
      cta: 'Choose Quarterly'
    },
    {
      title: 'Half-Yearly Plan',
      price: '₹20,000',
      duration: '48 Classes',
      save: 'Save ₹4,000',
      features: [
        '48 live 1-on-1 online classes',
        'Best value rate (₹416/class)',
        'Priority scheduling slots',
        'Easy to reschedule (24h notice)',
        'Trinity exam enrollment guidance',
        'Dedicated teacher chat support',
        'Student performance webinars'
      ],
      popular: false,
      cta: 'Choose Half-Yearly'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA]">
      
      {/* Header */}
      <section className="pt-16 pb-12 px-6 border-b border-neutral-200 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-piano-slate block">Curriculum & Tuition</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-piano-dark m-0 leading-tight">
            Our Courses & Tuition
          </h1>
          <p className="text-xs md:text-sm text-piano-dark/50 max-w-xl mx-auto mt-2 font-light leading-relaxed">
            Professional instruction customized for your age, skill level, and long-term musical goals.
          </p>
        </div>
      </section>

      {/* Catalog List - Inspired by Catalog in Image 2 */}
      <section className="py-20 px-6 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto space-y-12">
          {disciplines.map((d, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 bg-white border border-neutral-200 shadow-premium grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:border-piano-dark transition-all duration-300"
            >
              {/* Disciplines left details */}
              <div className="md:col-span-4 space-y-4">
                <span className="text-[10px] font-bold text-piano-slate tracking-widest block uppercase">
                  {d.code} / {d.age}
                </span>
                <h2 className="font-serif font-bold text-xl md:text-2xl text-piano-dark">{d.title}</h2>
                <div className="space-y-1.5 text-xs text-piano-dark/65 font-sans font-light">
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-piano-slate" />
                    <span>{d.level}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-piano-slate" />
                    <span>{d.format}</span>
                  </div>
                </div>
              </div>
              
              {/* Disciplines details */}
              <div className="md:col-span-8 space-y-6">
                <p className="text-xs md:text-sm text-piano-dark/75 leading-relaxed font-sans font-light">
                  {d.desc}
                </p>
                <div className="h-px bg-neutral-100 w-full" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-piano-dark/95">
                  {d.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center space-x-2.5">
                      <Check className="w-4 h-4 text-piano-slate flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trinity Grade Path Timeline */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-piano-slate block">Accredited Milestones</span>
            <h2 className="text-2xl md:text-3xl font-serif text-piano-dark">Trinity College London Grade Path</h2>
            <div className="w-10 h-0.5 bg-piano-slate mx-auto mt-3" />
          </div>

          <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200">
            {grades.map((g, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 md:items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Bullet */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-none bg-piano-dark border-2 border-white z-10" />

                {/* Left Card Placeholder */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:text-right" style={{ contentVisibility: 'auto' }}>
                  {idx % 2 === 0 ? (
                    <div className="space-y-1">
                      <span className="text-piano-slate font-serif font-bold text-xs tracking-wider block uppercase">
                        {g.phase}
                      </span>
                      <p className="text-[10px] text-piano-dark/50 uppercase font-bold">
                        Focus: {g.focus}
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 bg-[#FAFAFA] border border-neutral-200 rounded-none text-left shadow-sm">
                      <p className="text-xs text-piano-dark/70 leading-relaxed font-sans font-light">
                        {g.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Card Placeholder */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                  {idx % 2 === 1 ? (
                    <div className="space-y-1 md:text-left">
                      <span className="text-piano-slate font-serif font-bold text-xs tracking-wider block uppercase">
                        {g.phase}
                      </span>
                      <p className="text-[10px] text-piano-dark/50 uppercase font-bold">
                        Focus: {g.focus}
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 bg-[#FAFAFA] border border-neutral-200 rounded-none text-left shadow-sm">
                      <p className="text-xs text-piano-dark/70 leading-relaxed font-sans font-light">
                        {g.desc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition / Pricing */}
      <section className="py-24 px-6 bg-[#FAFAFA] border-b border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-piano-slate block">Simple Fees</span>
            <h2 className="text-3xl font-serif text-piano-dark">Tuition Plans</h2>
            <div className="w-10 h-0.5 bg-piano-slate mx-auto mt-3" />
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {pricing.map((p, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col justify-between p-8 rounded-none transition-all duration-300 ${
                  p.popular 
                    ? 'bg-white border-2 border-piano-dark shadow-premium scale-102 z-10 md:-translate-y-2' 
                    : 'bg-white border border-neutral-200 shadow-elevated'
                }`}
              >
                {/* Popular Badge */}
                {p.popular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-piano-slate text-white text-[9px] font-bold tracking-widest uppercase py-1 px-3 shadow-sm">
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Plan Info */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-lg text-piano-dark uppercase tracking-wide">{p.title}</h3>
                    <p className="text-[9px] text-piano-dark/40 uppercase tracking-widest font-bold">
                      {p.duration}
                    </p>
                  </div>
                  
                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-serif font-extrabold text-piano-dark">{p.price}</span>
                      <span className="text-[10px] text-piano-dark/50 ml-2 font-sans font-light uppercase tracking-widest">/ package</span>
                    </div>
                    {p.save && (
                      <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-piano-slate">
                        {p.save}
                      </span>
                    )}
                  </div>

                  <div className="w-full h-px bg-neutral-100" />

                  {/* Feature list */}
                  <ul className="space-y-3.5 text-xs text-piano-dark/65 leading-relaxed font-sans font-light">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-piano-slate flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="pt-8">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className={`w-full py-3 rounded-none font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-200 focus:outline-none ${
                      p.popular
                        ? 'bg-piano-slate hover:bg-piano-slateHover text-white shadow-sm'
                        : 'bg-piano-dark hover:bg-piano-slate text-white'
                    }`}
                  >
                    {p.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-piano-dark/45 font-sans mt-12 max-w-md mx-auto leading-relaxed">
            * Note: We do not believe in locking parents into long-term stress. You take a free 30-minute trial session first. Ongoing tuition is billed monthly/quarterly without rigid, irreversible contracts.
          </p>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 px-6 bg-piano-dark text-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider">Not sure where to begin?</h2>
          <p className="text-xs text-white/50 font-sans font-light leading-relaxed max-w-md mx-auto">
            Book a free 30-minute trial lesson. We will help identify your current skill tier and answer any questions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary"
            >
              Book a Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
