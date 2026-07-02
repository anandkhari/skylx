'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Direct Farm Sourcing',
    description:
      'Procured directly from verified estates in the Cardamom Hills of Idukki and Wayanad, eliminating intermediary variance and tracing every lot to its origin.',
  },
  {
    number: '02',
    title: 'Lab-Certified Purity',
    description:
      'Each batch undergoes third-party laboratory testing for moisture content, essential oil percentage, and contaminant levels before export clearance is issued.',
  },
  {
    number: '03',
    title: 'Export Compliance',
    description:
      'Fully compliant with FSSAI, APEDA, and destination-country import standards — including EU, US FDA, and GCC regulations — with documentation provided per shipment.',
  },
  {
    number: '04',
    title: 'Cold-Chain Integrity',
    description:
      'Temperature-controlled storage and sealed packaging ensure maximum freshness and aroma retention from harvest through to final delivery at the destination port.',
  },
];

// custom(i) variant — delay computed inside Framer Motion, not via inline objects
const pillarVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function SpicesQuality() {
  return (
    <section className="py-32 bg-[#f5f7fb] border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="mb-16 text-center"
        >
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-4">
            03 — Our Standard
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6">
            Quality at Every Stage
          </h2>
          <div className="w-12 h-px bg-[#1A6FD4] mx-auto mb-6 opacity-60" />
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            Our export process is built on a four-pillar quality framework that
            eliminates variance and ensures every shipment meets the specification you ordered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={pillarVariants}
              style={{ willChange: 'transform, opacity' }}
              className="flex gap-8 bg-white p-8 border border-[#E8ECF2]"
            >
              <span className="font-display text-5xl text-[#87A878]/30 font-medium shrink-0 leading-none mt-1">
                {pillar.number}
              </span>
              <div>
                <h3 className="font-display text-xl text-[#0D1B4B] mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
