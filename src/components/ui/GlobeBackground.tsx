"use client";
import type { GlobeConfig, Position } from "./globe";
import dynamic from "next/dynamic";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Globe = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function GlobeBackground({
  globeConfig,
  sampleArcs,
  heroRef,
  statsRef
}: {
  globeConfig: GlobeConfig;
  sampleArcs: Position[];
  heroRef: React.RefObject<HTMLDivElement | null>;
  statsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const globeAnimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeAnimRef.current || !heroRef.current || !statsRef.current) return;

    const globe = globeAnimRef.current;
    const hero = heroRef.current;
    const stats = statsRef.current;
    const statsGlobe = stats.querySelector('#globe-placeholder');
    if (!statsGlobe) return;

    // Get bounding rects and absolute positions
    const heroRect = hero.getBoundingClientRect();
    const statsRect = statsGlobe.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;

    // Calculate absolute top positions
    const heroAbsTop = heroRect.top + scrollY;
    const statsAbsTop = statsRect.top + scrollY;
    const statsAbsCenter = statsAbsTop + statsRect.height / 2;
    // const heroAbsTopCenter = heroAbsTop + heroRect.height / 2;

    // Calculate initial and final positions/sizes
    const start = {
      x: heroRect.left + heroRect.width / 2,
      y: heroRect.top + heroRect.height / 2,
      w: heroRect.width,
      h: heroRect.height
    };
    const end = {
      x: statsRect.left + statsRect.width / 2,
      y: statsRect.top + statsRect.height / 2,
      w: statsRect.width,
      h: statsRect.height
    };

    // Calculate scale and translation
    // const scaleX = end.w / start.w;
    // const scaleY = end.h / start.h;
    const translateX = end.x - start.x;
    const translateY = end.y - start.y; 

    // Calculate the scroll distance so that the center of statsGlobe is at the center of the viewport
    // Use absolute positions for robustness
    const scrollEnd = (statsAbsCenter - heroAbsTop) - (viewportHeight / 2) + (end.h / 2);

    // Set initial state
    gsap.set(globe, {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 0.7,
      transformOrigin: 'center center',
    });

    // Animate with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: `${scrollEnd}px center`,
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
    tl.to(globe, {
      x: translateX + 200,
      y: translateY + 150,
      scaleX: 0.85,
      scaleY: 0.85,
      opacity: 1,
      ease: 'power1.inOut',
    });

    // Refresh ScrollTrigger on resize for responsive layout
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, [heroRef, statsRef]);

  return (
    <div ref={globeAnimRef} className="absolute left-0 top-0 w-full h-screen z-0 pointer-events-none select-none">
      <div className="w-full h-full">
        <Globe data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
} 