import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ setActivePage, setPrefilledPlan }) {
  const handleSelectPlan = (planName) => {
    if (setPrefilledPlan) {
      setPrefilledPlan(planName);
    }
    if (setActivePage) {
      setActivePage('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const groupPlans = [
    {
      title: 'Monthly',
      oldPrice: '4,000',
      price: '3,000',
      period: '/ month',
      subtext: '8 live classes',
      rate: '₹375 per class',
      savings: null,
      features: [
        'Live group online lessons (max 4 students)',
        'Flexible scheduling',
        'Easy rescheduling',
        'All four disciplines included'
      ],
      prefill: 'Group Class: Monthly — ₹3,000'
    },
    {
      title: 'Quarterly',
      oldPrice: '11,000',
      price: '8,000',
      period: '/ 3 months',
      subtext: '24 live classes',
      rate: '₹333 per class',
      savings: 'Save ₹1,000',
      isPopular: true,
      features: [
        'Everything in Monthly',
        'Priority scheduling',
        'Structured grade-wise curriculum',
        'Progress reviews every month'
      ],
      prefill: 'Group Class: Quarterly — ₹8,000'
    },
    {
      title: 'Half-Yearly',
      oldPrice: '20,000',
      price: '15,000',
      period: '/ 6 months',
      subtext: '48 live classes',
      rate: '₹312.50 per class',
      savings: 'Save 1 month fee',
      features: [
        'Everything in Quarterly',
        'Best value per class',
        'Trinity exam preparation',
        'Performance opportunities'
      ],
      prefill: 'Group Class: Half-Yearly — ₹15,000'
    }
  ];

  const oneOnOnePlans = [
    {
      title: 'Monthly',
      oldPrice: '4,000',
      price: '5,000',
      period: '/ month',
      subtext: '8 live classes',
      rate: '₹625 per class',
      savings: null,
      features: [
        'Live 1-to-1 online lessons',
        'Flexible scheduling',
        'Easy rescheduling',
        'All four disciplines included'
      ],
      prefill: 'One-on-One: Monthly — ₹5,000'
    },
    {
      title: 'Quarterly',
      oldPrice: '11,000',
      price: '13,500',
      period: '/ 3 months',
      subtext: '24 live classes',
      rate: '₹562.50 per class',
      savings: 'Save ₹1,500',
      isPopular: true,
      features: [
        'Everything in Monthly',
        'Priority scheduling',
        'Structured grade-wise curriculum',
        'Progress reviews every month'
      ],
      prefill: 'One-on-One: Quarterly — ₹13,500'
    },
    {
      title: 'Half-Yearly',
      oldPrice: '20,000',
      price: '25,000',
      period: '/ 6 months',
      subtext: '48 live classes',
      rate: '₹520.80 per class',
      savings: 'Save ₹5,000 (1 month free)',
      features: [
        'Everything in Quarterly',
        'Best value per class',
        'Trinity exam preparation',
        'Performance opportunities'
      ],
      prefill: 'One-on-One: Half-Yearly — ₹25,000'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="pt-20 pb-16 px-6 border-b border-neutral-200 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Tuition & Fees</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-piano-dark m-0 leading-tight">
            Invest in something that <span className="text-piano-slate italic font-normal">lasts</span>
          </h1>
          <p className="text-base md:text-lg text-piano-dark/60 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Transparent plans, no hidden fees. All plans include 1-to-1 attention or small classes to ensure the true essence of piano playing is successfully passed on.
          </p>
        </div>
      </section>

      {/* 1. Group Coaching Section */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Option A</span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-piano-dark">
              Group class not exceeding 4 students
            </h2>
            <div className="w-16 h-0.5 bg-piano-slate mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {groupPlans.map((plan, idx) => {
              const isDark = plan.isPopular;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col justify-between p-8 border border-neutral-200 shadow-premium transition-all duration-300 relative ${
                    isDark 
                      ? 'bg-piano-dark text-white scale-100 md:scale-105 border-piano-dark z-10 shadow-elevated' 
                      : 'bg-white text-piano-dark'
                  }`}
                >
                  {isDark && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-piano-slate text-white text-[9px] uppercase tracking-widest font-bold px-3.5 py-1">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className={`text-[11px] uppercase font-bold tracking-wider ${isDark ? 'text-piano-accent' : 'text-piano-slate'}`}>
                        {plan.title}
                      </span>
                      <div className="flex items-baseline mt-3">
                        <span className="text-2xl font-serif font-bold mr-1">₹</span>
                        
                        {/* Old price crossed out */}
                        {plan.oldPrice && (
                          <span className={`text-2xl font-serif line-through mr-2 font-light ${isDark ? 'text-white/40' : 'text-piano-dark/30'}`}>
                            {plan.oldPrice}
                          </span>
                        )}

                        <span className="text-6xl font-serif font-black tracking-tight">{plan.price}</span>
                        <span className={`text-sm ml-2 font-sans font-light ${isDark ? 'text-white/60' : 'text-piano-dark/60'}`}>
                          {plan.period}
                        </span>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2 items-center">
                        <span className={`text-[11px] font-sans font-bold px-2 py-0.5 border ${
                          isDark 
                            ? 'bg-white/10 border-white/20 text-white' 
                            : 'bg-neutral-100 border-neutral-200 text-piano-dark/80'
                        }`}>
                          {plan.subtext}
                        </span>
                        <span className={`text-[11px] font-sans font-light ${isDark ? 'text-white/50' : 'text-piano-dark/50'}`}>
                          {plan.rate}
                        </span>
                      </div>

                      {plan.savings && (
                        <p className="text-[11px] font-sans font-bold text-piano-accent mt-3">
                          {plan.savings}
                        </p>
                      )}
                    </div>

                    <hr className={`border-t ${isDark ? 'border-white/10' : 'border-neutral-100'}`} />

                    <ul className="space-y-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-sm font-sans font-light">
                          <Check className={`w-4.5 h-4.5 mt-0.5 flex-shrink-0 ${isDark ? 'text-piano-accent' : 'text-piano-slate'}`} />
                          <span className={isDark ? 'text-white/80' : 'text-piano-dark/80'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleSelectPlan(plan.prefill)}
                      className={`w-full py-4.5 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 ${
                        isDark 
                          ? 'bg-white text-piano-dark hover:bg-neutral-100 shadow-sm' 
                          : 'bg-piano-dark text-white hover:bg-piano-slate'
                      }`}
                    >
                      Choose {plan.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. One-on-One Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Option B</span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-piano-dark">
              One-on-One Class
            </h2>
            <div className="w-16 h-0.5 bg-piano-slate mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
            {oneOnOnePlans.map((plan, idx) => {
              const isDark = plan.isPopular;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col justify-between p-8 border border-neutral-200 shadow-premium transition-all duration-300 relative ${
                    isDark 
                      ? 'bg-piano-dark text-white scale-100 md:scale-105 border-piano-dark z-10 shadow-elevated' 
                      : 'bg-[#FAFAFA] text-piano-dark'
                  }`}
                >
                  {isDark && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-piano-slate text-white text-[9px] uppercase tracking-widest font-bold px-3.5 py-1">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className={`text-[11px] uppercase font-bold tracking-wider ${isDark ? 'text-piano-accent' : 'text-piano-slate'}`}>
                        {plan.title}
                      </span>
                      <div className="flex items-baseline mt-3">
                        <span className="text-2xl font-serif font-bold mr-1">₹</span>
                        
                        {/* Old price crossed out */}
                        {plan.oldPrice && (
                          <span className={`text-2xl font-serif line-through mr-2 font-light ${isDark ? 'text-white/40' : 'text-piano-dark/30'}`}>
                            {plan.oldPrice}
                          </span>
                        )}

                        <span className="text-6xl font-serif font-black tracking-tight">{plan.price}</span>
                        <span className={`text-sm ml-2 font-sans font-light ${isDark ? 'text-white/60' : 'text-piano-dark/60'}`}>
                          {plan.period}
                        </span>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2 items-center">
                        <span className={`text-[11px] font-sans font-bold px-2 py-0.5 border ${
                          isDark 
                            ? 'bg-white/10 border-white/20 text-white' 
                            : 'bg-neutral-100 border-neutral-200 text-piano-dark/80'
                        }`}>
                          {plan.subtext}
                        </span>
                        <span className={`text-[11px] font-sans font-light ${isDark ? 'text-white/50' : 'text-piano-dark/50'}`}>
                          {plan.rate}
                        </span>
                      </div>

                      {plan.savings && (
                        <p className="text-[11px] font-sans font-bold text-piano-accent mt-3">
                          {plan.savings}
                        </p>
                      )}
                    </div>

                    <hr className={`border-t ${isDark ? 'border-white/10' : 'border-neutral-100'}`} />

                    <ul className="space-y-4">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-sm font-sans font-light">
                          <Check className={`w-4.5 h-4.5 mt-0.5 flex-shrink-0 ${isDark ? 'text-piano-accent' : 'text-piano-slate'}`} />
                          <span className={isDark ? 'text-white/80' : 'text-piano-dark/80'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleSelectPlan(plan.prefill)}
                      className={`w-full py-4.5 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 ${
                        isDark 
                          ? 'bg-white text-piano-dark hover:bg-neutral-100 shadow-sm' 
                          : 'bg-piano-dark text-white hover:bg-piano-slate'
                      }`}
                    >
                      Choose {plan.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trial Promo Callout */}
      <section className="bg-piano-dark text-white py-12 px-6 text-center border-t border-white/10">
        <p className="text-sm font-sans font-light tracking-wide text-white/70">
          Not sure yet? <button onClick={() => handleSelectPlan('Free Trial Lesson')} className="underline hover:text-white font-semibold transition-colors">Book a free trial lesson</button> — no commitment, just music.
        </p>
      </section>

    </div>
  );
}
