'use client';

import { useCallback, useEffect, useState } from 'react';
import About from './About';
import FAQ from './FAQ';
import Footer from './Footer';
import Hero from './hero';
import Navbar from './Navbar';
import Value from './Values';
import Verification from './Verification';
import TeamPremium from './TeamPremium';
import SpicesExport from './SpicesExport';

export default function LandingPageClient() {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setWindowLoaded(true);
      return;
    }

    const handleLoad = () => setWindowLoaded(true);

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    if (!windowLoaded || !videoLoaded) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, 250);

    return () => window.clearTimeout(timer);
  }, [windowLoaded, videoLoaded]);

  const handleVideoReady = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-white transition-opacity duration-500 ${
          isReady ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src="/logo.jpeg"
          alt="Skylx loading"
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
