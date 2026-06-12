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
        <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">Building Dreams, Delivering Quality.</h3>
        <p className="text-gray-600 font-light mb-4 leading-relaxed">
          Established in 2015, we have positioned ourselves as a premier execution force. Our foundation is built on deep expertise in Civil Engineering, Interior Fit-out, and MEP operations.
        </p>
        <p className="text-gray-600 font-light leading-relaxed">
          Driven by a leadership team with extensive experience managing complex developments for global Multinational Corporations, we do not just execute projects; we engineer tailored solutions focused on absolute customer satisfaction.
        </p>
      </>
    ),
    mission: (
      <>
        <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">The Five Pillars of Execution</h3>
        <ul className="space-y-4">
          {[
            { title: 'Deliver Excellence', desc: 'Striving for perfection through precision and innovation.' },
            { title: 'Prioritize Satisfaction', desc: 'Building lasting relationships via transparency and reliability.' },
            { title: 'Empower the Team', desc: 'Nurturing a rewarding environment for continuous growth.' },
            { title: 'Embrace Innovation', desc: 'Adopting cutting-edge tech and sustainable solutions.' },
            { title: 'Give Back', desc: 'Operating with absolute integrity and social responsibility.' }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#1A6FD4] mt-1">✦</span>
              <div>
                <strong className="text-[#0D1B4B] text-sm block">{item.title}</strong>
                <span className="text-gray-500 text-sm font-light">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
    vision: (
      <>
        <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">The Ultimate Benchmark</h3>
        <div className="border-l-2 border-[#1A6FD4] pl-6 py-2">
          <p className="font-display italic text-xl text-[#0D1B4B]/90 leading-relaxed">
            "To be the most trusted and admired construction and maintenance partner in the region."
          </p>
        </div>
        <p className="text-gray-600 font-light leading-relaxed mt-6">
          We are building toward a future where our infrastructure sets the standard. By delivering exceptional quality and innovative solutions, we foster a thriving, inspiring environment that elevates both our clients and our workforce.
        </p>
      </>
    )
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-[#E8ECF2]">
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
