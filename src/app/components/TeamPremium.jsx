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
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Operations Officer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Global Logistics',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Partnerships',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800'
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
            // Determine if the member is in the left column (index 0 and 2) or right column (index 1 and 3)
            const isLeftColumn = index % 2 === 0;
            
            // Add a slight delay for the second row so they don't all load at the exact same millisecond
            const rowDelay = Math.floor(index / 2) * 0.2;

            return (
              <motion.div
                key={index}
                // DYNAMIC ANIMATION: Left slides from -60px, Right slides from +60px
                initial={{ opacity: 0, x: isLeftColumn ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1], // Cinematic glide
                  delay: rowDelay 
                }}
                className="group cursor-pointer"
              >
                {/* --- IMAGE CONTAINER --- */}
                {/* Notice the 0px border radius (sharp corners) to match your brand architecture */}
                <div className="relative w-full aspect-[4/5] rounded-lg mb-6 overflow-hidden bg-[#0D1B4B]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  {/* Subtle brand tint overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-[#0D1B4B]/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* --- TEXT CONTENT --- */}
                <div className="border-l-2 border-transparent group-hover:border-[#1A6FD4] pl-0 group-hover:pl-4 transition-all duration-500">
                  <h3 className="font-display text-2xl text-[#0D1B4B] mb-1 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A6FD4]">
                    {member.role}
                  </p>
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}