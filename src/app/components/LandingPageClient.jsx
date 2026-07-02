'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import About from './About';
import FAQ from './FAQ';
import Footer from './Footer';
import Hero from './hero';
import Navbar from './Navbar';
import Value from './Values';
import TeamPremium from './TeamPremium';

export default function LandingPageClient() {
  const [isReady, setIsReady] = useState(false);

  // Refs instead of state — intermediate flags never trigger a re-render
  const windowLoadedRef = useRef(false);
  const videoLoadedRef = useRef(false);
  const timerRef = useRef(null);

  const checkReady = useCallback(() => {
    if (windowLoadedRef.current && videoLoadedRef.current && !timerRef.current) {
      // Single setIsReady call — one React commit instead of three cascading ones
      timerRef.current = window.setTimeout(() => setIsReady(true), 100);
    }
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      windowLoadedRef.current = true;
      checkReady();
      return;
    }
    const handleLoad = () => {
      windowLoadedRef.current = true;
      checkReady();
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, [checkReady]);

  const handleVideoReady = useCallback(() => {
    videoLoadedRef.current = true;
    checkReady();
  }, [checkReady]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <>
      {/* Loading screen — opacity transition only (compositor-only) */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-white transition-opacity duration-500 ${
          isReady ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        aria-hidden={isReady}
      >
        <img
          src="/logo.jpeg"
          alt="Skylx"
          className="h-24 w-auto object-contain animate-pulse"
        />
      </div>

      <div
        className={`transition-opacity duration-500 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Hero isActive={isReady} onVideoReady={handleVideoReady} />
        <About isActive={isReady} />
        <Value />
        <TeamPremium />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
