import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4B] py-12 px-6 md:px-12 border-t border-[#1A6FD4]/20">
      <div className="max-w-6xl mx-auto">
        {/* --- BOTTOM HALF: STANDARD FOOTER --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & Brief */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-white text-2xl tracking-[0.15em] font-medium decoration-none block mb-4">
              SKY<span className="text-[#1A6FD4]">LX</span>
            </a>
            <p className="text-white/50 text-sm font-light max-w-sm leading-relaxed">
              Exporting excellence. We are the absolute infrastructure connecting verified local production to global distribution networks.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/50 hover:text-[#1A6FD4] text-sm transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Headquarters</h4>
            <ul className="space-y-3 text-white/50 text-sm font-light">
              <li>Global Logistics Hub</li>
              <li>support@skylx.com</li>
              <li>+1 (800) 555-0199</li>
            </ul>
          </div>

        </div>

        {/* --- COPYRIGHT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/30 text-[11px] uppercase tracking-wider mb-4 md:mb-0">
            © 2026 Skylx Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-white/30 text-[11px] uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
