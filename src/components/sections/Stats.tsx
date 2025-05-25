import React, { forwardRef } from "react";

/**
 * Stats section with headline and four stat cards.
 */
const Stats = forwardRef<HTMLDivElement, object>(
  (_, ref) => (
    <section ref={ref} className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 my-12 px-4 max-w-6xl mx-auto">
      {/* Left: Text and Stats */}
      <div className="flex-1 flex flex-col items-start justify-center text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
          <span className="text-white">Faster</span>
          <span className="text-white">, Smarter Management</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">100K+</div>
            <div className="text-zinc-300 text-sm">Admin<br />hours saved</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">$16M+</div>
            <div className="text-zinc-300 text-sm">Tax<br />Savings</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">&gt;50M</div>
            <div className="text-zinc-300 text-sm">Accepted<br />by stores</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">96%</div>
            <div className="text-zinc-300 text-sm">Re-orders</div>
          </div>
        </div>
      </div>
      
      {/* Right: Globe placeholder with styling for proper display */}
      <div 
        id="globe-placeholder" 
        className="flex-1 flex items-center justify-center w-[420px] h-[420px] relative"
        style={{ minWidth: '300px' }}
      >
        {/* Globe will be animated here */}
      </div>
    </section>
  )
);
Stats.displayName = "Stats";
export default Stats;