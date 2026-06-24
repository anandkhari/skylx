'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What services does Skylx provide?',
    a: 'Skylx specializes in high-grade international agricultural export alongside our core construction operations. We bridge the gap between dedicated local producers and global markets, establishing a transparent, highly structured supply chain to verify, grade, and deliver premium raw commodities with zero variance in purity and freshness.'
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
    q: 'How does Skylx ensure product quality?',
    a: "At SKYLX EXPORTS, we understand that quality is one of the most important factors when choosing a supplier. That's why we partner with trusted manufacturers and suppliers, carefully inspect products before shipment, and ensure they meet the agreed specifications. Our focus is on delivering products that are reliable, consistent, and meet our customers' expectations every time."
  },
  {
    q: 'How do you source your products?',
    a: 'We source our products through a carefully vetted network of manufacturers and suppliers known for their quality, consistency, and ethical business practices. This allows us to provide our customers with dependable products, competitive value, and a reliable supply chain for international markets.'
  }
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
