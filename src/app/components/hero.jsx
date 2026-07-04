'use client';

import React, { useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Defined outside — stable object references, never recreated on render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// scaleX instead of width — stays on Composite layer, never triggers Layout pipeline
const lineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 0.8,
    scaleX: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function Hero({ isActive = false, onVideoReady }) {
  const hasReportedReady = useRef(false);

  const reportVideoReady = useCallback(() => {
    if (hasReportedReady.current) return;
    hasReportedReady.current = true;
    onVideoReady?.();
  }, [onVideoReady]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background Video — preload=metadata avoids buffering the full file before animations start */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onCanPlay={reportVideoReady}
        onLoadedData={reportVideoReady}
        onError={reportVideoReady}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D1B4B]/70 via-[#0D1B4B]/55 to-[#0D1B4B]/80" />

      {/* Hero Content — will-change pre-promotes to GPU before the first animation frame */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-16"
        style={{ willChange: 'opacity, transform' }}
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >

         <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl text-white font-normal leading-[1.1] mb-6"
        >
          Skylx
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl  text-white font-normal leading-[1.1] mb-6"
        >
          Exporting Excellence.
        </motion.h1>

        {/* origin-center: scaleX grows from the midpoint, matching the visual of the old width:0→48 */}
        <motion.div
          variants={lineVariants}
          className="h-[1px] w-12 bg-[#1A6FD4] mx-auto my-8 origin-center"
        />

        {/* <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-white max-w-2xl mx-auto font-light tracking-wide mb-10"
        >
          Through Sky at the Speed of Light. We are the trusted bridge between
          world-class suppliers and global markets.
        </motion.p> */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group h-12 px-8 bg-[#1A6FD4] text-white text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#165db3] transition-colors duration-300 flex items-center gap-3"
          >
            Contact Us
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="group h-12 px-8 bg-transparent text-white text-xs font-bold uppercase tracking-[0.12em] border border-white/30 hover:bg-white/10 transition-colors duration-300 flex items-center gap-3"
          >
            Explore Our Services
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
