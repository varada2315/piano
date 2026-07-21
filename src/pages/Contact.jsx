import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, CheckCircle2, Plus, Minus } from 'lucide-react';

export default function Contact({ prefilledPlan, setPrefilledPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    role: 'child',
    phone: '',
    email: '',
    plan: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Sync prefilled plan if coming from Pricing page
  useEffect(() => {
    if (prefilledPlan) {
      setFormData(current => ({
        ...current,
        plan: prefilledPlan
      }));
    }
  }, [prefilledPlan]);

  // Reset plan when page unmounts
  useEffect(() => {
    return () => {
      if (setPrefilledPlan) setPrefilledPlan('');
    };
  }, [setPrefilledPlan]);

  const faqs = [
    {
      q: 'Do I need a piano at home immediately?',
      a: 'To begin, a basic 61-key electronic keyboard is perfectly fine for the first few months. As you progress, we recommend moving to an 88-key weighted digital piano or an acoustic upright piano to develop proper finger technique and musical touch.'
    },
    {
      q: 'At what age can my child start lessons?',
      a: 'We teach children starting from age 6. At this stage, their fingers have sufficient physical joint coordination, and their attention spans are ready for live, interactive, one-on-one sessions.'
    },
    {
      q: 'Do you teach adults as well?',
      a: 'Yes, absolutely! We have many adult students ranging from absolute beginners learning as a creative hobby to advanced players polishing complex classical compositions. Lessons are tailored to your pace and musical tastes.'
    },
    {
      q: 'What if we need to reschedule a lesson?',
      a: 'We understand that plans change. We have a simple 24-hour rescheduling policy. As long as you notify us at least 24 hours in advance, we will reschedule the class without any credit loss.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(current => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const toggleFaq = (index) => {
    setActiveFaq(current => current === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 border-b border-neutral-200 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] uppercase font-bold tracking-widest text-piano-slate block">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-piano-dark m-0 leading-tight">
            Book a Free Trial Lesson
          </h1>
          <p className="text-base md:text-lg text-piano-dark/65 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Start with a complimentary 30-minute trial session. Meet our pianists and play your very first chord.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-20 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details & Info */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-2xl text-piano-dark uppercase tracking-wide">Connect With Us</h2>
              <p className="text-xs text-piano-dark/65 font-sans leading-relaxed font-light">
                Have questions about curriculum, timing, or instrument requirements? Reach out directly, and our support team will reply within a few hours.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs text-piano-dark/80">
              <div className="flex items-center space-x-4 p-4 bg-white border border-neutral-200 shadow-elevated">
                <div className="w-9 h-9 bg-piano-slateLight flex items-center justify-center text-piano-slate flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-piano-slate tracking-widest mb-0.5">Email Address</p>
                  <a href="mailto:thepianoprofs@gmail.com" className="font-semibold hover:text-piano-slate transition-colors text-xs">
                    thepianoprofs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-neutral-200 shadow-elevated">
                <div className="w-9 h-9 bg-piano-slateLight flex items-center justify-center text-piano-slate flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-piano-slate tracking-widest mb-0.5">Call or WhatsApp</p>
                  <a href="tel:+919999720213" className="font-semibold hover:text-piano-slate transition-colors text-xs">
                    +91 99997 20213
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-neutral-200 shadow-elevated">
                <div className="w-9 h-9 bg-piano-slateLight flex items-center justify-center text-piano-slate flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-piano-slate tracking-widest mb-0.5">Teaching Hours</p>
                  <p className="font-semibold text-xs text-piano-dark">Mon – Sun: 8:00 AM – 9:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-neutral-100">
              <a href="https://facebook.com/pianoprofs" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-neutral-200 hover:border-piano-dark bg-white hover:bg-neutral-50 text-piano-dark font-sans font-semibold text-[10px] uppercase tracking-widest transition-colors">
                Facebook
              </a>
              <a href="https://instagram.com/pianoprofs" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-neutral-200 hover:border-piano-dark bg-white hover:bg-neutral-50 text-piano-dark font-sans font-semibold text-[10px] uppercase tracking-widest transition-colors">
                Instagram
              </a>
              <a href="https://youtube.com/mrshahzaadkhan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-neutral-200 hover:border-piano-dark bg-white hover:bg-neutral-50 text-piano-dark font-sans font-semibold text-[10px] uppercase tracking-widest transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Contact Form Wrapper */}
          <div className="md:col-span-7 bg-white p-6 md:p-8 border border-neutral-200 shadow-premium">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1">
                    <h3 className="font-serif font-bold text-xl text-piano-dark">Book Your Slot</h3>
                    <p className="text-xs text-piano-dark/45 font-light">Complete the form and we'll reach out to schedule.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full text-xs px-3.5 py-3 border border-neutral-300 focus:border-piano-dark focus:ring-0"
                      />
                    </div>

                    {/* Age / Choice */}
                    <div className="space-y-1">
                      <label htmlFor="age" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Student Age</label>
                      <input 
                        type="text" 
                        id="age" 
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 8 years (or 'Adult')"
                        className="w-full text-xs px-3.5 py-3 border border-neutral-300 focus:border-piano-dark focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 99997 20213"
                        className="w-full text-xs px-3.5 py-3 border border-neutral-300 focus:border-piano-dark focus:ring-0"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full text-xs px-3.5 py-3 border border-neutral-300 focus:border-piano-dark focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Interested Plan */}
                  <div className="space-y-1">
                    <label htmlFor="plan" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Interested Plan</label>
                    <select 
                      id="plan" 
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      required
                      className="w-full text-xs px-3.5 py-3 bg-white border border-neutral-300 focus:border-piano-dark focus:ring-0"
                    >
                      <option value="">Interested plan…</option>
                      <option value="Free Trial Lesson">Free Trial Lesson</option>
                      <option value="Group Class: Monthly — ₹3,000">Group Class: Monthly — ₹3,000</option>
                      <option value="Group Class: Quarterly — ₹8,000">Group Class: Quarterly — ₹8,000</option>
                      <option value="Group Class: Half-Yearly — ₹15,000">Group Class: Half-Yearly — ₹15,000</option>
                      <option value="One-on-One: Monthly — ₹5,000">One-on-One: Monthly — ₹5,000</option>
                      <option value="One-on-One: Quarterly — ₹13,500">One-on-One: Quarterly — ₹13,500</option>
                      <option value="One-on-One: Half-Yearly — ₹25,000">One-on-One: Half-Yearly — ₹25,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold text-piano-dark/80 tracking-widest block">Short Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your previous piano experience, if any..."
                      className="w-full text-xs px-3.5 py-3 border border-neutral-300 focus:border-piano-dark focus:ring-0"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-piano-dark hover:bg-piano-slate text-white font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none"
                    >
                      <span>Send Request</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="py-12 px-4 text-center space-y-5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-12 h-12 bg-piano-slateLight text-piano-slate flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-piano-dark">Request Received</h3>
                    <p className="text-xs text-piano-dark/70 leading-relaxed font-sans max-w-sm mx-auto font-light">
                      Thank you, <strong className="font-semibold text-piano-dark">{formData.name}</strong>. We have saved your interest in the <strong className="font-semibold text-piano-dark">{formData.plan}</strong> package. A professional piano instructor will connect with you via WhatsApp/Email shortly.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          age: '',
                          role: 'child',
                          phone: '',
                          email: '',
                          plan: '',
                          message: ''
                        });
                        if (setPrefilledPlan) setPrefilledPlan('');
                      }}
                      className="px-6 py-2.5 bg-piano-dark hover:bg-piano-slate text-white text-xs uppercase tracking-widest transition-colors"
                    >
                      Submit Another Booking
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Accordion FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-piano-slate block">Common Concerns</span>
            <h2 className="text-2xl md:text-3xl font-serif text-piano-dark">Frequently Asked Questions</h2>
            <div className="w-10 h-0.5 bg-piano-slate mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-neutral-200 rounded-none overflow-hidden shadow-elevated"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between font-serif font-bold text-sm md:text-base text-piano-dark hover:text-piano-slate transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-piano-slate flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-piano-slate flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs text-piano-dark/70 leading-relaxed font-sans font-light border-t border-neutral-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
