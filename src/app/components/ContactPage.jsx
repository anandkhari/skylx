'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] pt-16 overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] tracking-[0.15em] text-sky-400 uppercase font-bold mb-4">
              05 — Get In Touch
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-tight mb-4">
              Let's Build <br />
              <span className="text-sky-400">Together.</span>
            </h1>
            <div className="w-12 h-px bg-sky-400 opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* ── DETAILS + FORM ── */}
      <section className="py-24 bg-white border-b border-[#E8ECF2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: contact details */}
            <motion.div {...fadeUp(0)}>
              <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-6">
                Contact Details
              </p>
              <h2 className="font-display text-3xl text-[#0D1B4B] font-medium mb-10">
                We're Ready When You Are.
              </h2>

              <div className="space-y-8">
                {[
                  {
                    label: 'Phone',
                    value: '+971 XX XXX XXXX',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                      </svg>
                    )
                  },
                  {
                    label: 'Email',
                    value: 'info@skylx.com',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    )
                  },
                  {
                    label: 'Address',
                    value: 'Office 000, Building Name,\nCity, Country',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    )
                  },
                  {
                    label: 'Working Hours',
                    value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM',
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    )
                  },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#E8ECF2] flex items-center justify-center text-[#1A6FD4] flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.12em] text-[#1A6FD4] uppercase font-bold mb-1">{label}</p>
                      <p className="text-sm text-[#0D1B4B] font-light leading-relaxed whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: contact form */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-6">
                Send a Message
              </p>
              <h2 className="font-display text-3xl text-[#0D1B4B] font-medium mb-10">
                Start the Conversation.
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Service Required</label>
                  <select className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200 bg-white">
                    <option value="">Select a service…</option>
                    <option>Civil Engineering</option>
                    <option>Interior Fit-out</option>
                    <option>MEP Operations</option>
                    <option>Design & Build</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D1B4B] text-white text-xs uppercase tracking-[0.12em] font-bold py-4 rounded-lg hover:bg-[#1A6FD4] transition-colors duration-300"
                >
                  Send Message →
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="h-[420px] border-b border-[#E8ECF2] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113599.54100778869!2d76.14084801620231!3d10.511545762119152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e1!3m2!1sen!2sin!4v1781257296138!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
