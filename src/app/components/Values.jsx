'use client';

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Award, Handshake, Gauge } from "lucide-react";

// Static data and variants outside component — zero allocation cost on re-render
const pillars = [
  {
    icon: ShieldCheck,
    name: "Absolute Integrity",
    desc: "Global networks require systemic trust. We render operations transparently, verifying schedules and quality frameworks with constant clarity.",
  },
  {
    icon: Globe,
    name: "Global Connectedness",
    desc: "Logistical execution depends on network density. Skylx bridges separate localized markets into an immediately open supply interface.",
  },
  {
    icon: Award,
    name: "Quality Without Compromise",
    desc: "Defects introduce friction. Our rigorous validation framework checks raw components at the origin node to protect scaled distribution pipelines.",
  },
  {
    icon: Handshake,
    name: "Partnership Alignment",
    desc: "We systematically optimize for sustained partner lifecycles rather than isolated spot transactions, ensuring stable long-term operations.",
  },
  {
    icon: Gauge,
    name: "Systemic Reliability",
    desc: "Unpredictability degrades capital velocity. Working with Skylx yields controlled variables, reliable transit tracking, and absolute process execution.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ValuesPremium() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/24244234/pexels-photo-24244234.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4B]/90 via-[#0D1B4B]/75 to-[#1A6FD4]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="max-w-2xl mb-24"
        >
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#1A6FD4] font-bold mb-4">
            02 — Operational Metrics
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
            System Specifications
          </h2>
          <div className="w-16 h-[2px] bg-[#1A6FD4] mb-8" />
          <p className="text-[#D8E1F0] text-base leading-relaxed max-w-xl">
            Five structural values dictate every trade architecture iteration
            we scale. These are not beliefs; they are operational mechanics
            built directly into the Skylx framework.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="mb-6">
                  <Icon
                    size={64}
                    strokeWidth={1.5}
                    style={{ willChange: 'transform' }}
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-display text-2xl text-white mb-4 tracking-tight">
                  {pillar.name}
                </h3>

                {/* scaleX from 62.5% to 100% visually matches the old w-10 → w-16 */}
                <div className="w-16 h-[2px] bg-[#1A6FD4] mb-5 origin-left scale-x-[0.625] group-hover:scale-x-100 transition-transform duration-300" />

                <p className="text-[#D8E1F0] text-sm leading-relaxed max-w-sm">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
