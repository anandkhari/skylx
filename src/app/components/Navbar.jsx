import React from "react";

export default function Navbar() {
  // Updated links exactly as you requested
  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#0D1B4B]/90 backdrop-blur-md flex items-center justify-between px-6 md:px-12 border-b border-white/10">
      {/* 1. THE LOGO */}
      <a href="#" className="flex items-center">
        <img
          src="/logo.jpeg"
          alt="SKYLX Logo"
          className="h-12 w-auto object-contain"
        />
      </a>

      {/* 2. THE MENU LINKS */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/70 hover:text-white text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* 3. QUICK ACTION BUTTON */}
      <div className="flex items-center">
        <a
          href="#portal"
          className="text-xs text-white uppercase tracking-[0.1em] font-bold border border-[#1A6FD4] px-4 py-2 hover:bg-[#1A6FD4] rounded-lg transition-all duration-300"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
