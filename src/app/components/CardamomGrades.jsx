
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const grades = [
  {
    size: '8mm+',
    label: 'Premium Select',
    badge: 'Top Grade',
    image: '/8mm.jpg',
    description:
      'The highest grade, hand-sorted for consistent large capsule size, intense aroma, and maximum essential oil content.',
  },
  {
    size: '8mm',
    label: 'Grade A',
    badge: 'Grade A',
    image: '/8mmbold.jpg',
    description:
      'Uniform capsules with a full flavour profile. Preferred for high-end culinary and pharmaceutical applications.',
  },
  {
    size: '7.5mm',
    label: 'Grade B+',
    badge: 'Grade B+',
    image: '/7.5mm.webp',
    description:
      'Well-rounded capsules with excellent aroma retention. Suitable for premium F&B and flavour extraction.',
  },
  {
    size: '7mm',
    label: 'Grade B',
    badge: 'Grade B',
    image: '/7mm.jpeg',
    description:
      'Consistent mid-range capsules with reliable oil yield. Widely exported for general culinary use.',
  },
  {
    size: '6–7mm',
    label: 'Standard Grade',
    badge: 'Standard',
    image: '/6-7mm.webp',
    description:
      'Standard commercial grade suitable for bulk export, blending, and food processing industries.',
  },
  {
    size: 'Below 6mm',
    label: 'Small Capsule',
    badge: 'Small',
    image: '/5mm.webp',
    description:
      'Smaller capsules with robust flavour, ideal for ground cardamom production and industrial extraction.',
  },
];

export default function CardamomGrades() {
  return (
    <section className="py-32 bg-white border-b border-[#E8ECF2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-16">
          <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-4">
            02 — Grade Specifications
          </p>

          <h2 className="font-display text-4xl sm:text-5xl text-[#0D1B4B] font-medium mb-6 max-w-xl leading-tight">
            Cardamom Grade Categories
          </h2>

          <div className="w-12 h-[1px] bg-[#1A6FD4] mb-6 opacity-60" />

          <p className="text-sm text-gray-500 max-w-xl font-light leading-relaxed">
            We supply green cardamom across all commercial size grades. Each lot is
            lab-verified for moisture content, essential oil percentage, and freedom
            from adulteration before shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grades.map((grade, i) => (
            <motion.div
              key={grade.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 3) * 0.1,
              }}
              className="group border border-[#E8ECF2] bg-[#f5f7fb] overflow-hidden hover:border-[#1A6FD4]/40 hover:bg-white transition-all duration-300"
            >
              {/* Grade Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={grade.image}
                  alt={grade.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-4xl text-[#87A878] font-medium leading-none">
                    {grade.size}
                  </span>

                  <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-[#1A6FD4] border border-[#1A6FD4]/30 px-2 py-1 shrink-0 ml-3">
                    {grade.badge}
                  </span>
                </div>

                <div className="w-8 h-[1px] bg-[#87A878] mb-4 opacity-70 group-hover:w-16 transition-all duration-500" />

                <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#0D1B4B] mb-3">
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

