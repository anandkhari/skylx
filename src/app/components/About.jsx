'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPremium({ isActive = false }) {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState('story');
  const isActiveRef = useRef(isActive);
  
  // This array manages the order of the stacked images (Front, Middle, Back)
  const [imageOrder, setImageOrder] = useState([0, 1, 2]);

  isActiveRef.current = isActive;

  // Placeholder images - replace these in your public folder
  const images = [
    'https://images.pexels.com/photos/6394689/pexels-photo-6394689.jpeg', 
    'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg', 
    'https://images.pexels.com/photos/14584457/pexels-photo-14584457.jpeg'  
  ];

  // --- CONTENT DATA ---
  const tabs = [
    { id: 'story', label: 'The Story' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'The Vision' }
  ];

  const content = {
    story: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5 }}>
        <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">Building Dreams, Delivering Quality.</h3>
        <p className="text-gray-600 font-light mb-4 leading-relaxed">
          Established in 2015, we have positioned ourselves as a premier execution force. Our foundation is built on deep expertise in Civil Engineering, Interior Fit-out, and MEP operations.
        </p>
        <p className="text-gray-600 font-light leading-relaxed">
          Driven by a leadership team with extensive experience managing complex developments for global Multinational Corporations, we do not just execute projects; we engineer tailored solutions focused on absolute customer satisfaction.
        </p>
      </motion.div>
    ),
    mission: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5 }}>
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
      </motion.div>
    ),
    vision: (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5 }}>
        <h3 className="font-display text-3xl text-[#0D1B4B] mb-6">The Ultimate Benchmark</h3>
        <div className="border-l-2 border-[#1A6FD4] pl-6 py-2">
          <p className="font-display italic text-xl text-[#0D1B4B]/90 leading-relaxed">
            "To be the most trusted and admired construction and maintenance partner in the region."
          </p>
        </div>
        <p className="text-gray-600 font-light leading-relaxed mt-6">
          We are building toward a future where our infrastructure sets the standard. By delivering exceptional quality and innovative solutions, we foster a thriving, inspiring environment that elevates both our clients and our workforce.
        </p>
      </motion.div>
    )
  };

  // --- INTERACTION LOGIC ---
  const handleNextImage = () => {
    setImageOrder((prev) => [prev[1], prev[2], prev[0]]);
  };

  // --- AUTO-PLAY LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isActiveRef.current) {
        return;
      }

      setImageOrder((prev) => [prev[1], prev[2], prev[0]]);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: SCROLL REVEAL (SLIDE FROM LEFT) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={isActive ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of it is in view
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] w-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] h-[450px]">
              {images.map((src, i) => {
                const position = imageOrder.indexOf(i);
                const isFront = position === 0;
                const isMiddle = position === 1;
                const isBack = position === 2;

                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden bg-white"
                    animate={{
                      zIndex: 3 - position,
                      scale: isFront ? 1 : isMiddle ? 0.95 : 0.9,
                      y: isFront ? 0 : isMiddle ? -20 : -40,
                      rotate: isFront ? 0 : isMiddle ? -3 : 3,
                      opacity: isFront ? 1 : isMiddle ? 0.8 : 0.5,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                  >
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                  </motion.div>
                );
              })}
            </div>

            <button 
              onClick={handleNextImage}
              className="absolute -bottom-6 z-10 w-14 h-14 bg-[#1A6FD4] text-white rounded-full flex items-center justify-center hover:bg-[#0D1B4B] transition-colors duration-300 shadow-xl"
              aria-label="Next Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 7 7 7-7"/><path d="M12 19V5"/>
              </svg>
            </button>
          </motion.div>

          {/* --- RIGHT SIDE: SCROLL REVEAL (FADE UP) --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={isActive ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} // 0.2s delay so it loads right after the images
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
                <motion.div key={activeTab}>
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
