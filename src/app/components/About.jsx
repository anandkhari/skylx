'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// All static data outside component — one allocation at module load, never on re-render
const IMAGE_URL = 'https://images.pexels.com/photos/122164/pexels-photo-122164.jpeg';

const tabs = [
  { id: 'story', label: 'The Story' },
  { id: 'mission', label: 'Our Mission' },
  { id: 'vision', label: 'The Vision' },
];

const tabContent = {
  story: (
    <>
      <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">
        Connecting Producers with Global Markets
      </h3>
      <p className="text-gray-600 font-light mb-4 leading-relaxed">
        Skylx was founded on a single belief: that the gap between a dedicated local
        producer and a global market shouldn&apos;t exist. What separates them isn&apos;t
        quality — it&apos;s visibility, access, and a trusted bridge.
      </p>
      <p className="text-gray-600 font-light leading-relaxed">
        Every deal we make is built on transparency and legitimacy, with a
        structured and clear workflow that removes the uncertainty often associated
        with international trade. You always know who you&apos;re dealing with, what
        you&apos;re getting, and why you can trust it.
      </p>
    </>
  ),
  mission: (
    <>
      <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">Our Mission</h3>
      <div className="py-2">
        <p className="font-display text-gray-600 leading-relaxed">
          &quot;To be the trusted bridge between world-class suppliers and global
          businesses — connecting importers, distributors, and retailers across
          every market with quality-assured products that power sustainable growth
          and lasting success.&quot;
        </p>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mt-6">
        Our mission is to simplify international trade by connecting reliable
        suppliers with businesses worldwide through a foundation of trust,
        transparency, and operational excellence. We are committed to delivering
        quality-assured products, fostering long-term partnerships, and creating
        value for every stakeholder across the global supply chain.
      </p>
    </>
  ),
  vision: (
    <>
      <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">Our Vision</h3>
      <div className="py-2">
        <p className="font-display text-gray-600 leading-relaxed">
          &quot;To build a globally connected trade ecosystem where suppliers,
          importers, and distributors thrive through reliable partnerships,
          transparent processes, and sustainable growth.&quot;
        </p>
      </div>
      <p className="text-gray-600 font-light leading-relaxed mt-6">
        We envision a future where geographical boundaries no longer limit
        opportunity. By fostering trust, transparency, and long-term
        partnerships, we aim to create a seamless global marketplace that
        empowers businesses, strengthens supply chains, and drives sustainable
        growth for all stakeholders.
      </p>
    </>
  ),
};

// --- PREMIUM ANIMATION CONFIGURATION ---
// This cubic-bezier creates that heavy, cinematic glide
const premiumEase = [0.22, 1, 0.36, 1];

// The whole card (image + text) now moves as a single unit.
// Desktop slides in from the left; mobile slides up from below —
// a horizontal slide on a narrow viewport causes overflow/scroll jank.
const cardTransition = {
  duration: 1,
  ease: premiumEase,
};

const tabContentTransition = { duration: 0.3 };

// Matches Tailwind's `lg` breakpoint used by the grid below (lg:grid-cols-2)
const MOBILE_QUERY = '(max-width: 1023px)';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mql.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
}

export default function AboutPremium() {
  const [activeTab, setActiveTab] = useState('story');
  const isMobile = useIsMobile();

  const cardInitial = isMobile
    ? { opacity: 0, y: 60 }
    : { opacity: 0, x: -120 };

  const cardWhileInView = isMobile
    ? { opacity: 1, y: 0 }
    : { opacity: 1, x: 0 };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* SINGLE UNIT: image + text now animate together as one block */}
        <motion.div
          initial={cardInitial}
          whileInView={cardWhileInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={cardTransition}
          style={{ willChange: 'transform, opacity' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT: image */}
          <div className="relative w-full max-w-120 mx-auto h-112.5 rounded-lg shadow-2xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGE_URL})` }}
            />
            {/* Brand-blue tint so the photo matches the rest of the site's palette */}
            {/* <div className="absolute inset-0 bg-[#3e74b6] mix-blend-multiply opacity-40 pointer-events-none" /> */}
            <div className="absolute inset-0 bg-[#0D1B4B]/10 pointer-events-none" />
          </div>

          {/* RIGHT: content */}
          <div>
            <p className="text-[11px] tracking-[0.12em] text-[#1A6FD4] uppercase font-bold mb-6">
              01 — Identity &amp; Purpose
            </p>

            <div className="flex gap-6 mb-10 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${
                    activeTab === tab.id ? 'text-[#0D1B4B]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A6FD4] origin-left transition-transform duration-300 ${
                      activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="min-h-62.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={tabContentTransition}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="mt-8 text-xs text-[#0D1B4B] font-bold uppercase tracking-widest border-b border-[#0D1B4B] pb-1 hover:text-[#1A6FD4] hover:border-[#1A6FD4] transition-colors">
              Learn More →
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}