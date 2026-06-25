'use client';

import { motion } from 'framer-motion';

export default function PepperHero() {
  return (
    <section className="relative h-[80vh] pt-16 overflow-hidden flex items-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/pepper_hero.png')" }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.15em] text-[#5C5552] uppercase font-bold mb-6">
            01 — Premium Commodity
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-tight mb-6">
            Skylx Premium <br />
            <span className="text-[#C8B8A2]">Pepper.</span>
          </h1>
          <div className="w-12 h-px bg-[#1A6FD4] mb-6 opacity-60" />
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-md mb-10">
            GI-certified Malabar and Tellicherry black pepper sourced direct from the Western Ghats — density-graded, piperine-verified, and cleared to global export standards.
          </p>
          <a
            href="/contact"
            className="inline-block text-xs text-white uppercase tracking-[0.12em] font-bold border border-[#1A6FD4] px-6 py-3 hover:bg-[#1A6FD4] rounded-lg transition-all duration-300"
          >
            Request a Sample
          </a>
        </motion.div>
      </div>

    </section>
  );
}
