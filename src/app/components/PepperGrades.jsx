'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const pepperGrades = [
  {
    size: '4.75mm+',
    label: 'Tellicherry Garbled Special Extra Bold (TGSEB)',
    badge: 'Premium Bold',
    image: '/pepper1.webp',
    description:
      'The crown jewel of Malabar pepper. Hand-sorted at a bulk density of 570+ g/l for maximum maturity, complex fruitiness, and intense volatile oil presence.',
  },
  {
    size: '4.25mm',
    label: 'Tellicherry Garbled Extra Bold (TGEB)',
    badge: 'Extra Bold',
    image: '/pepper4.webp',
    description:
      'Highly uniform, deep black peppercorns offering a rich, aromatic punch. Highly favored globally for premium tabletop grinder retail.',
  },
  {
    size: '3.0–4.0mm',
    label: 'Malabar Garbled Grade 1 (MG-1)',
    badge: 'Export Standard',
    image: '/pepper3.webp',
    description:
      'The standard commercial benchmark for Kerala pepper. Fully dried and mechanically cleaned to deliver an exceptionally sharp, high-piperine heat profile.',
  },
];

// custom(i) variant — delay computed inside Framer Motion, not via inline objects on each render
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 },
  }),
};

export default function PepperGrades() {
  return (
    <section className="py-32 bg-white border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16">
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-4">
            03 — Pepper Specifications
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6 max-w-xl leading-tight">
            Black Gold Grade Categories
          </h2>
          <div className="w-12 h-px bg-[#1A6FD4] mb-6 opacity-60" />
          <p className="text-sm text-gray-500 max-w-xl font-light leading-relaxed">
            We source geographic-indicated Malabar and Tellicherry pepper direct from the Western Ghats.
            Verified via rigorous density metrics, moisture analysis, and high piperine index baselines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pepperGrades.map((grade, i) => (
            <motion.div
              key={grade.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              style={{ willChange: 'transform, opacity' }}
              className="group border border-[#E8ECF2] bg-[#f5f7fb] overflow-hidden hover:border-[#1A6FD4]/40 hover:bg-white transition-colors duration-300"
            >
              {/* Image — will-change pre-promotes so hover scale has no first-frame jank */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={grade.image}
                  alt={grade.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-3xl text-[#5C5552] font-medium leading-none tracking-tight">
                    {grade.size}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#1A6FD4] border border-[#1A6FD4]/30 px-2 py-1 shrink-0 ml-3">
                    {grade.badge}
                  </span>
                </div>

                {/* scaleX from 50% to 100% — visually matches old w-8 → w-16, stays compositor-only */}
                <div className="w-16 h-px bg-[#5C5552] mb-4 opacity-50 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />

                <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0D1B4B] mb-3 line-clamp-1">
                  {grade.label}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {grade.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
