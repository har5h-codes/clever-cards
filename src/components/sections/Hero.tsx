import React, { forwardRef } from "react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { CustomButton } from "@/components/ui/CustomButton";


/**
 * Enhanced Hero section with globe background and headline.
 * Now includes ScrollTrigger animation to move the globe to the Stats section.
 * @param globeConfig Globe config object
 * @param sampleArcs Globe arcs data
 */
const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      {/* Globe background wrapper with ref for animation */}
      <div 
        className="globe-wrapper absolute inset-0 w-full h-screen z-0"
      >
        {/* intial globe postion */}
      </div>
      
      {/* Main hero content */}
      <main className="z-10 flex flex-col items-center justify-center text-center px-4 h-screen">
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-12 drop-shadow-[0_0_60px_rgba(168,85,247,0.8)] mx-44">
          Powering Global Payouts and Card Issuing, Instantly.
        </h1>
        <h2 className="text-2xl sm:text-3xl text-white mb-2 font-semibold">
          Instant Payments. Zero Hassle.
        </h2>
        <p className="text-lg sm:text-xl text-zinc-200 mb-8 leading-snug">
          <span className="whitespace-nowrap">The CleverCards Platform lets you issue digital Mastercards, create accounts, and move funds</span><br />
          <span className="whitespace-nowrap">instantly, anywhere in the world..</span>
        </p>
        <div className="flex gap-4 mb-12 flex-col sm:flex-row items-center justify-center">
          <CustomButton size="lg">For Businesses</CustomButton>
          <AnimatedButton>For Individuals</AnimatedButton>
        </div>
      </main>
    </div>
  );
});
Hero.displayName = "Hero";
export default Hero;