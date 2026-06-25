'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PepperExport() {
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
    <section className="py-32 bg-[#f5f7fb] overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">

        {/* Background Offset Rectangle */}
        <div className="absolute top-0 bottom-0 right-0 left-1/4 bg-white z-0 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-4/5 max-w-112.5 mx-auto lg:mr-auto lg:ml-0 shadow-2xl overflow-hidden bg-[#0D1B4B]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/pepper.jpg')",
                }}
              />
            </div>

            {/* Decorative Blue Line */}
            <div className="absolute -left-6 top-12 w-6 h-px bg-[#1A6FD4] hidden lg:block" />
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pl-12 order-1 lg:order-2"
          >
            <motion.p
              variants={itemVariants}
              className="text-[11px] tracking-[0.2em] uppercase text-[#1A6FD4] font-bold mb-4"
            >
              04 — Secondary Commodity
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6 leading-tight"
            >
              Skylx Premium Pepper
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-12 h-[2px] bg-[#1A6FD4] mb-8"
            />

            <motion.p
              variants={itemVariants}
              className="text-gray-600 font-light leading-relaxed mb-8 max-w-md"
            >
              GI-certified Malabar and Tellicherry black pepper sourced direct
              from the Western Ghats. Density-graded and piperine-verified to
              deliver consistent heat, aroma, and oil yield — from premium
              tabletop grinder grades down to high-yield industrial extraction stock.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="/pepper"
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

        </div>
      </div>
    </section>
  );
}
