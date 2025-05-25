"use client";
import React from "react";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Endorsements from "@/components/sections/Endorsements";
import Stats from "@/components/sections/Stats";
import TrustSection from "@/components/sections/TrustSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ProductDisplaySection from "@/components/sections/ProductDisplaySection";
import ReferralSection from "@/components/sections/ReferralSection";
import LandingPageSection from "@/components/sections/LandingPageSection";
import GlobeBackground from "@/components/ui/GlobeBackground";
import { useRef } from "react";
// import WhyCleverCardSection from "@/components/sections/WhyCleverCardSection";
import HeroSection from "@/components/sections/FasterToMarket";
import UseCasesSection from "@/components/sections/UseCasesSection";


export default function Home() {
  // Globe config and arcs data (from GlobeDemo, but tailored for CleverCards)
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0412",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#334155",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 500,
    arcLength: 1,
    rings: 1,
    maxRings: 1,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 10,
  };
  const colors = [
    "#06b6d4",   // #06b6d4 cyan
    "#3b82f6",  // #3b82f6 blue
    "#6366f1"   // #6366f1 indigo
  ];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[1] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[0] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[1] },
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      {/* Glow effect behind the navbar */}
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#D2B0FF] opacity-30 blur-3xl rounded-full z-1 pointer-events-none" />
      {/* Globe absolutely positioned for animation */}
      <GlobeBackground
        globeConfig={globeConfig}
        sampleArcs={sampleArcs}
        heroRef={heroRef}
        statsRef={statsRef  }
      />
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-8 pb-4">
        <Hero ref={heroRef} />
        <Endorsements />
        <Stats
          ref={statsRef}
        />
        <TrustSection/>
        <ReviewsSection />
        <HeroSection />
        <UseCasesSection />
        <ProductDisplaySection />
        <ReferralSection />
        <LandingPageSection />
        <FooterSection />
      </div>
    </>
  );
}
