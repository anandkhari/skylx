'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPremium() {
  const [activeTab, setActiveTab] = useState('story');

  const image = 'https://images.pexels.com/photos/3848793/pexels-photo-3848793.jpeg';

  const tabs = [
    { id: 'story', label: 'The Story' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'The Vision' }
  ];

  const content = {
  story: (
  <>
    <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">
      Connecting Producers with Global Markets
    </h3>

    <p className="text-gray-600 font-light mb-4 leading-relaxed">
      Skylx was founded on a single belief: that the gap between a dedicated local
      producer and a global market shouldn't exist. What separates them isn't
      quality — it's visibility, access, and a trusted bridge.
    </p>

    <p className="text-gray-600 font-light leading-relaxed">
      Every deal we make is built on transparency and legitimacy, with a
      structured and clear workflow that removes the uncertainty often associated
      with international trade. You always know who you're dealing with, what
      you're getting, and why you can trust it.
    </p>
  </>
),
   mission: (
  <>
    <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">
      Our Mission
    </h3>

    <div className="py-2">
      <p className="font-display text-gray-600 leading-relaxed">
        "To be the trusted bridge between world-class suppliers and global
        businesses — connecting importers, distributors, and retailers across
        every market with quality-assured products that power sustainable growth
        and lasting success."
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
    <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">
      Our Vision
    </h3>

    <div className="py-2">
      <p className="font-display text-gray-600 leading-relaxed">
        "To build a globally connected trade ecosystem where suppliers,
        importers, and distributors thrive through reliable partnerships,
        transparent processes, and sustainable growth."
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
)
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: single image, slide in from left on scroll */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[400px] mx-auto h-[450px] rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          </motion.div>

          {/* RIGHT: fade up on scroll */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="text-[11px] tracking-[0.12em] text-[#1A6FD4] uppercase font-bold mb-6">
              01 — Identity & Purpose
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
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A6FD4]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {content[activeTab]}
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
