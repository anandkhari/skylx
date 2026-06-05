'use client'; // Required for Framer Motion in Next.js

import React, { useCallback, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ isActive = false, onVideoReady }) {
  const hasReportedReady = useRef(false);

  const reportVideoReady = useCallback(() => {
    if (hasReportedReady.current) {
      return;
    }

    hasReportedReady.current = true;
    onVideoReady?.();
  }, [onVideoReady]);

  // --- ANIMATION VARIANTS ---
  // This orchestrates the sequence, telling children to load one after the other
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2 second delay between each element loading
        delayChildren: 0.3,   // Wait 0.3s before starting the sequence
      },
    },
  };

  // This defines how each individual text block slides up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth cinematic spring
    },
  };

  // Specific animation for the blue divider line growing outward
  const lineVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 0.8, 
      width: 48, // Equivalent to Tailwind's w-12
      transition: { duration: 1, ease: "easeInOut" } 
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onCanPlay={reportVideoReady}
        onLoadedData={reportVideoReady}
        onError={reportVideoReady}
      >
        <source src="https://www.pexels.com/download/video/35461249/" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay - Base static fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D1B4B]/70 via-[#0D1B4B]/55 to-[#0D1B4B]/80" />

      {/* Hero Content - Wrapped in Motion Container */}
      <motion.div 
        className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-16"
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        
        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl text-white font-normal leading-[1.1] mb-6"
        >
          Exporting Excellence.
        </motion.h1>

        {/* Animated Divider Line */}
        <motion.div 
          variants={lineVariants}
          className="h-[1px] bg-[#1A6FD4] mx-auto my-8" 
        />

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg text-white max-w-2xl mx-auto font-light tracking-wide mb-10"
        >
          Through Sky at the Speed of Light. We are the trusted bridge between
          world-class suppliers and global markets.
        </motion.p>

        {/* CTA Buttons Container */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          
          {/* Primary Button - Removed rounded edges for brand compliance */}
          <button className="group h-12 px-8 bg-[#1A6FD4] text-white text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#165db3] transition-all duration-300 flex items-center gap-3">
            Start Exporting
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Secondary Button - Removed rounded edges for brand compliance */}
          <button className="group h-12 px-8 bg-transparent text-white text-xs font-bold uppercase tracking-[0.12em] border border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
            View Logistics
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          
        </motion.div>
      </motion.div>
   
    </section>
  );
}
