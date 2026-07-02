'use client';

import React from "react";
import { motion } from "framer-motion";

// --- PREMIUM CONFIGURATION ---
const premiumEase = [0.22, 1, 0.36, 1];

const team = [
  { name: "Sithanshu Bhaskaran", role: "Strategy Partner", image: "/team1.jpeg" },
  { name: "Shyam Sundar M",      role: "Operations Partner", image: "/team2.jpeg" },
  { name: "Chand B Vyshak",      role: "Growth Partner",    image: "/team3.jpeg" },
  { name: "Arun K N",            role: "Vision Partner",    image: "/team4.jpeg" },
];

// Animation variant: Even indices (0, 2) enter from left, Odd (1, 3) from right
const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Slide in from sides
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.6, // Slow, premium duration
      ease: premiumEase,
    },
  },
};

// Container staggers children based on their row/index
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // 200ms pause between each card
      delayChildren: 0.3,   // Initial wait before the first card moves
    },
  },
};

export default function TeamPremium() {
  return (
    <section className="py-32 bg-[#f5f7fb] border-b border-[#E8ECF2] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-3">
            04 — Core Leadership
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6">
            Meet Our Team
          </h2>
          <div className="w-12 h-[1px] bg-[#1A6FD4] mx-auto mb-6 opacity-60" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              variants={cardVariants}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url(${member.image})`, willChange: 'transform' }}
                />
              </div>
              <h3 className="font-display text-xl text-[#0D1B4B] mb-1 tracking-wide">
                {member.name}
              </h3>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#1A6FD4]">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}