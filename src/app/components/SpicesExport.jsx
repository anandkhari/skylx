'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SpicesExport() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-32 bg-white overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        
        {/* Background Offset Rectangle */}
        <div className="absolute top-0 bottom-0 left-0 right-1/4 bg-[#f5f7fb] z-0 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT SIDE - CONTENT */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pr-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-[11px] tracking-[0.2em] uppercase text-[#1A6FD4] font-bold mb-4"
            >
              03 — Primary Commodity
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6 leading-tight"
            >
              Skylx Premium Spices
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-12 h-[2px] bg-[#1A6FD4] mb-8"
            />

            <motion.p
              variants={itemVariants}
              className="text-gray-600 font-light leading-relaxed mb-8 max-w-md"
            >
              Sourced directly from the most potent agricultural regions.
              We verify, grade, and export raw spices with zero variance
              in purity, freshness, and essential oil content. Our
              infrastructure ensures these premium commodities retain
              maximum integrity from origin to global destination.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/spices"
                className="group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.15em] uppercase text-[#0D1B4B] pb-2 border-b-2 border-gray-200 hover:border-[#1A6FD4] transition-all duration-300"
              >
                View Commodity
                <ArrowRight
                  size={16}
                  className="text-[#1A6FD4] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative w-full aspect-4/5 max-w-112.5 mx-auto lg:ml-auto lg:mr-0 shadow-2xl overflow-hidden bg-[#0D1B4B]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg')",
                }}
              />
            </div>

            {/* Decorative Blue Line */}
            <div className="absolute -right-6 top-12 w-6 h-px bg-[#1A6FD4] hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}