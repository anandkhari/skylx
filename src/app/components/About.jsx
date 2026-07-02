'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// All static data outside component — one allocation at module load, never on re-render
const IMAGE_URL = 'https://images.pexels.com/photos/3848793/pexels-photo-3848793.jpeg';

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

// Image gets a longer duration to establish the scene
const imageTransition = { 
  duration: 5, 
  ease: premiumEase 
};

// Text gets a delay so it follows the image, creating a staggered sequence
const textTransition = { 
  duration: 1.2, 
  ease: premiumEase, 
  delay: 0.4 
};

const tabContentTransition = { duration: 0.3 };

export default function AboutPremium() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 bg-white overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }} // Increased start distance for more impact
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
            transition={imageTransition}
            style={{ willChange: 'transform, opacity' }}
            className="w-full max-w-100 mx-auto h-112.5 rounded-lg shadow-2xl overflow-hidden"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGE_URL})` }}
            />
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }} // Increased drop distance to emphasize the slide up
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={textTransition} // Applies the 0.4s delay
            style={{ willChange: 'transform, opacity' }}
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}