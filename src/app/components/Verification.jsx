import React from 'react';

export default function Verification() {
  // A simple list comparing the old way vs the Skylx way
  const comparisons = [
    {
      feature: 'Visibility',
      oldWay: 'Opaque tracking with frequent blind spots.',
      skylxWay: 'Absolute transparency at every transit node.'
    },
    {
      feature: 'Quality Control',
      oldWay: 'Discovered upon arrival, causing capital loss.',
      skylxWay: 'Verified at the origin before loading.'
    },
    {
      feature: 'Network Access',
      oldWay: 'Fragmented, requiring multiple localized brokers.',
      skylxWay: 'Unified global interface connecting directly to buyers.'
    },
    {
      feature: 'Speed of Execution',
      oldWay: 'Delayed by manual paperwork and analog handoffs.',
      skylxWay: 'Digitally accelerated pipeline for maximum velocity.'
    }
  ];

  return (
    <section id="verification" className="py-24 bg-white border-b border-[#E8ECF2]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] tracking-[0.12em] text-[#1A6FD4] uppercase font-bold mb-3">
            03 — System Comparison
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#0D1B4B] font-medium mb-4">
            The Verification Ledger
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            We do not just move cargo; we remove friction. See how the Skylx infrastructure outperforms traditional localized export methods.
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-[#f5f7fb] border border-gray-200 overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0D1B4B] text-white p-6">
            <div className="hidden md:block font-bold tracking-[0.1em] text-xs uppercase text-white/50">
              Traditional Freight
            </div>
            <div className="font-bold tracking-[0.1em] text-xs uppercase text-[#1A6FD4] md:pl-6 md:border-l md:border-white/20">
              Skylx Verified Stream
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 p-6 hover:bg-white transition-colors duration-200">
                
                {/* The Old Way */}
                <div className="mb-4 md:mb-0 md:pr-6">
                  <span className="md:hidden text-[10px] uppercase text-gray-400 font-bold tracking-wider block mb-1">Traditional</span>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    <span className="text-[#0D1B4B] font-semibold block mb-1">{item.feature}</span>
                    <span className="text-red-900/60 flex items-center gap-2">
                      <span className="text-[10px]">✕</span> {item.oldWay}
                    </span>
                  </p>
                </div>

                {/* The Skylx Way */}
                <div className="md:pl-6 md:border-l md:border-gray-200">
                  <span className="md:hidden text-[10px] uppercase text-[#1A6FD4] font-bold tracking-wider block mb-1">Skylx</span>
                  <p className="text-sm text-[#0D1B4B] font-medium leading-relaxed">
                    <span className="md:hidden text-[#0D1B4B] font-semibold block mb-1">{item.feature}</span>
                    <span className="flex items-start gap-2">
                      <span className="text-[#87A878] text-sm mt-0.5">✓</span> {item.skylxWay}
                    </span>
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}