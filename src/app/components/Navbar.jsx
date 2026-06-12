'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home',     href: '/'         },
    { label: 'About',    href: '/#about'   },
    { label: 'Services', href: '/services' },
    { label: 'Contact',  href: '/contact'  },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white/95 backdrop-blur-md flex items-center justify-between px-6 md:px-12 border-b border-[#E8ECF2]">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.jpeg" alt="SKYLX Logo" className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#0D1B4B] hover:text-[#1A6FD4] text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="text-xs text-[#1A6FD4] uppercase tracking-widest font-bold border border-[#1A6FD4] px-4 py-2 hover:bg-[#1A6FD4] hover:text-white rounded-lg transition-all duration-300"
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0D1B4B] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D1B4B] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0D1B4B] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#E8ECF2] shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#0D1B4B] hover:text-[#1A6FD4] text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-xs text-center text-[#1A6FD4] uppercase tracking-widest font-bold border border-[#1A6FD4] px-4 py-3 hover:bg-[#1A6FD4] hover:text-white rounded-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
