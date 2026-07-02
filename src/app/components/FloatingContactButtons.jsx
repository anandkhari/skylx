'use client';

import { useEffect, useMemo, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const PHONE_NUMBER = '+91 70121 21843';
const WHATSAPP_NUMBER = '917012121843';

// Stable references outside component — never recreated on render
const actions = [
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: 'Chat on WhatsApp',
    icon: MessageCircle,
    backgroundClass: 'bg-[#25D366] hover:bg-[#1fb75a]',
    ringClass: 'focus-visible:ring-[#25D366]/35',
    external: true,
  },
  {
    href: `tel:${PHONE_NUMBER.replace(/[^+\d]/g, '')}`,
    label: 'Call Us',
    icon: Phone,
    backgroundClass: 'bg-[#0D1B4B] hover:bg-[#1A6FD4]',
    ringClass: 'focus-visible:ring-[#1A6FD4]/35',
    external: false,
  },
];

// Stable transition object — single allocation, stable ease array reference
const floatTransition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

export default function FloatingContactButtons() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElement = document.querySelector('footer');
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  // Stable animate object — only recreated when isFooterVisible changes
  const animateProps = useMemo(
    () => ({ opacity: 1, x: 0, y: isFooterVisible ? -96 : 0 }),
    [isFooterVisible]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 24, y: 24 }}
      animate={animateProps}
      transition={floatTransition}
      style={{ willChange: 'transform, opacity' }}
      className="pointer-events-none fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3 sm:right-5 sm:bottom-5 md:right-6 md:bottom-6"
      aria-label="Contact actions"
    >
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <div key={action.label} className="group relative pointer-events-auto">
            <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#D8E1F0] bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#0D1B4B] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 group-focus-within:-translate-x-1 group-focus-within:opacity-100">
              {action.label}
            </span>

            <a
              href={action.href}
              aria-label={action.label}
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{ willChange: 'transform' }}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_18px_38px_rgba(13,27,75,0.18)] transition-colors duration-300 hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-4 ${action.backgroundClass} ${action.ringClass} sm:h-13 sm:w-13`}
            >
              <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={2.2} />
            </a>
          </div>
        );
      })}
    </motion.div>
  );
}
