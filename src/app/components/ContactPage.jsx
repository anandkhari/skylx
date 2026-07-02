'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Static variant objects outside component — no new objects on every render
const heroAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransitions = [
  { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
];

const viewport = { once: true, amount: 0.15 };

const toastVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.96 },
};

const contactItems = [
  {
    label: 'Phone',
    value: '+91 70121 21843',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'skylxexports@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Ward 17, Building No. 357, Karolkuniyil,\nUlliyeri, Kozhikode, Kerala – 673620',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Working Hours',
    value: 'Monday to Sunday: 10:00 AM – 7:00 PM',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const EMPTY_FIELDS = { name: '', email: '', phone: '', enquiry: '', message: '' };

export default function ContactPage() {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xlgyodjy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          enquiry: fields.enquiry,
          message: fields.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFields(EMPTY_FIELDS);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4500);
  };

  return (
    <>
      {/* Toast notification */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-lg shadow-2xl text-sm font-medium max-w-sm ${
              status === 'success' ? 'bg-[#0D1B4B] text-white' : 'bg-red-600 text-white'
            }`}
            role="status"
            aria-live="polite"
          >
            {status === 'success' ? (
              <>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1A6FD4] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                Message sent! We&apos;ll get back to you shortly.
              </>
            ) : (
              <>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
                Something went wrong. Please try again.
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative h-[60vh] pt-16 overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            {...heroAnimation}
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-[11px] tracking-[0.15em] text-sky-400 uppercase font-bold mb-4">
              05 — Get In Touch
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-white font-medium leading-tight mb-4">
              Let&apos;s Build <br />
              <span className="text-white">Together.</span>
            </h1>
            <div className="w-12 h-px bg-sky-400 opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* DETAILS + FORM */}
      <section className="py-24 bg-white border-b border-[#E8ECF2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: contact details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUpVariants}
              transition={fadeUpTransitions[0]}
              style={{ willChange: 'transform, opacity' }}
            >
              <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-6">
                Contact Details
              </p>
              <h2 className="font-display text-3xl text-[#0D1B4B] font-medium mb-10">
                We&apos;re Ready When You Are.
              </h2>

              <div className="space-y-8">
                {contactItems.map(({ label, value, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#E8ECF2] flex items-center justify-center text-[#1A6FD4] shrink-0 mt-0.5">
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUpVariants}
              transition={fadeUpTransitions[1]}
              style={{ willChange: 'transform, opacity' }}
            >
              <p className="text-[11px] tracking-[0.15em] text-[#1A6FD4] uppercase font-bold mb-6">
                Send a Message
              </p>
              <h2 className="font-display text-3xl text-[#0D1B4B] font-medium mb-10">
                Start the Conversation.
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="+91 XX XXX XXXX"
                    className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Enquiry Type</label>
                  <select
                    name="enquiry"
                    value={fields.enquiry}
                    onChange={handleChange}
                    className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200 bg-white"
                  >
                    <option value="">Select an enquiry type…</option>
                    <option>Cardamom Export</option>
                    <option>Pepper Export</option>
                    <option>Bulk Order</option>
                    <option>Sample Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.12em] text-[#0D1B4B] uppercase font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your requirement…"
                    required
                    className="w-full border border-[#E8ECF2] rounded-lg px-4 py-3 text-sm text-[#0D1B4B] placeholder-gray-400 focus:outline-none focus:border-[#1A6FD4] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0D1B4B] text-white text-xs uppercase tracking-[0.12em] font-bold py-4 rounded-lg hover:bg-[#1A6FD4] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-105 border-b border-[#E8ECF2] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62567.454494917496!2d75.67951566995602!3d11.4462592711708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba663d9d640708d%3A0x6ecb82e94e21358e!2sUlliyeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1782043463325!5m2!1sen!2sin"
          className="w-full h-full border-0"
          title="Skylx office location — Ulliyeri, Kozhikode, Kerala"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
