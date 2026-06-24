'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] pt-16 overflow-hidden flex items-center">

      {/* Background image — replace /about.jpg with your image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/34950770/pexels-photo-34950770.jpeg" }}
      />

      {/* Gradient overlay: very dark on the left (text side), fades right */}
   <div className="absolute inset-0 bg-linear-to-r from-[#1A6FD4]/20 via-[#1A6FD4]/40 to-[#1A6FD4]/10" />

      {/* Text content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
         
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight mb-6">
             Our Products &  <br />
            <span className="text-white">Export Services</span>
          </h1>
          <div className="w-12 h-px bg-[#1A6FD4] mb-6 opacity-60" />
          <p className="text-white text-sm font-light leading-relaxed max-w-md mb-10">
            From civil engineering to interior fit-out and MEP, our services are engineered around precision, speed, and zero compromise on quality.
          </p>
      
        </motion.div>
      </div>

    </section>
  );
}
