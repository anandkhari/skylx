'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TeamPremium() {
  // --- TEAM DATA ---
  // Replace the placeholder images with your actual team member photos
  const team = [
    {
      name: 'Johnathan Hayes',
      role: 'Chief Executive Officer',
      image: '/team1.jpeg'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Operations Officer',
      image: '/team2.jpeg'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Global Logistics',
      image: '/team3.jpeg'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Partnerships',
      image: '/team4.jpeg'
    }
  ];

  return (
    <section className="py-32 bg-[#f5f7fb] border-b border-[#E8ECF2]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-20 text-center">
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-3">
            04 — Core Leadership
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6">
            Meet Our Team
          </h2>
          <div className="w-12 h-[1px] bg-[#1A6FD4] mx-auto mb-6 opacity-60" />
          <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our leadership team draws from decades of multinational supply chain experience, engineering the definitive infrastructure for global trade.
          </p>
        </div>

        {/* --- 2x2 TEAM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {team.map((member, index) => {
            const rowDelay = Math.floor(index / 2) * 0.2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: rowDelay }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular image */}
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>

                {/* Text */}
                <h3 className="font-display text-xl text-[#0D1B4B] mb-1 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A6FD4]">
                  {member.role}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}