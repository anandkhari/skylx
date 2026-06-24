'use client';

import { motion } from 'framer-motion';

export default function SpicesCTA() {
  return (
    <section className="py-32 bg-[#0D1B4B]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-6">
            04 — Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-medium mb-6 leading-tight">
            Let's Talk About <br />
            <span className="text-[#87A878]">Your Requirement.</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#1A6FD4] mx-auto mb-8 opacity-60" />
          <p className="text-white/50 text-sm font-light leading-relaxed max-w-md mx-auto mb-10">
            Tell us the grade, quantity, and destination. We'll provide a detailed
            quotation with origin certification and export timeline within 48 hours.
          </p>
          <a
            href="/contact"
            className="inline-block text-xs text-white uppercase tracking-[0.15em] font-bold border border-[#1A6FD4] px-8 py-4 hover:bg-[#1A6FD4] rounded-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
