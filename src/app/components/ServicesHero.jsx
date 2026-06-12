'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] pt-16 overflow-hidden flex items-center">

      {/* Background image — replace /about.jpg with your image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/20884699/pexels-photo-20884699.jpeg')" }}
      />

      {/* Gradient overlay: very dark on the left (text side), fades right */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/10" />

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.15em] text-sky-400 uppercase font-bold mb-6">
            02 — What We Do
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-tight mb-6">
            Built to <br />
            <span className="text-sky-400">Perform.</span>
          </h1>
          <div className="w-12 h-px bg-[#1A6FD4] mb-6 opacity-60" />
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-md mb-10">
            From civil engineering to interior fit-out and MEP, our services are engineered around precision, speed, and zero compromise on quality.
          </p>
          <a
            href="/#contact"
            className="inline-block text-xs text-white uppercase tracking-[0.12em] font-bold border border-[#1A6FD4] px-6 py-3 hover:bg-[#1A6FD4] rounded-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

    </section>
  );
}
