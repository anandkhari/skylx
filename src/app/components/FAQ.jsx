'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What services does Skylx provide?',
    a: 'We specialise in Civil Engineering, Interior Fit-out, and MEP (Mechanical, Electrical & Plumbing) operations. From ground-up construction to precision finishing, we handle the full project lifecycle.'
  },
  {
    q: 'How long has Skylx been operating?',
    a: 'Skylx was established in 2015. Over a decade we have built a reputation for delivering complex developments for global Multinational Corporations across the region.'
  },
  {
    q: 'Do you handle projects outside your home region?',
    a: 'Yes. Our leadership team has extensive cross-border experience and we actively manage projects for international clients. Contact us to discuss your specific location requirements.'
  },
  {
    q: 'How do I get a quote for my project?',
    a: 'Reach out through our Contact section or call us directly. We will schedule an initial consultation, assess the project scope, and provide a detailed proposal within a few business days.'
  },
  {
    q: 'What makes Skylx different from other contractors?',
    a: 'Our edge is our people. Senior engineers with MNC-level experience lead every project. We do not sub-delegate quality — we are hands-on from concept to handover, with zero compromise on timelines or finish.'
  },
  {
    q: 'Can Skylx manage both design and execution?',
    a: 'Absolutely. We offer integrated design-and-build solutions, which streamlines communication, reduces cost overruns, and keeps accountability in a single team.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="py-24 bg-white border-b border-[#E8ECF2]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-3">
            05 — FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6">
            Common Questions
          </h2>
          <div className="w-12 h-px bg-[#1A6FD4] mx-auto opacity-60" />
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#E8ECF2]">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`font-display text-lg transition-colors duration-300 ${open === i ? 'text-[#1A6FD4]' : 'text-[#0D1B4B] group-hover:text-[#1A6FD4]'}`}>
                  {item.q}
                </span>
                <span className={`ml-6 flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open === i ? 'border-[#1A6FD4] bg-[#1A6FD4] text-white' : 'border-[#E8ECF2] text-[#0D1B4B] group-hover:border-[#1A6FD4]'}`}>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className={`transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                  >
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-gray-500 font-light leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
