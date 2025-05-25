import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const features = [
  {
    group: "Cost Effective",
    items: [
      {
        icon: "/cost_effective_1.svg",
        title: "Low Investment, minimise upfront costs  with an all-inclusive platform.",
      },
      {
        icon: "/cost_effective_2.svg",
        title: "Full Stack in One Box, eliminate the need for multiple providers with an integrated solution.",
      },
    ],
  },
  {
    group: "Speed to Market",
    items: [
      {
        icon: "/speed_to_market_1.svg",
        title: "Rapid Time to Market, Avoid the months-long process of building card programmes.",
      },
      {
        icon: "/speed_to_market_2.svg",
        title: "Market Testing Made Easy, Quickly test and refine your offerings in the market.",
      },
      {
        icon: "/speed_to_market_3.svg",
        title: "Return on Investment, Quickly test and refine your offerings in the market.",
      },
    ],
  },
];

const WhyCleverCardSection = () => {
  // Create refs for each item in both groups
  const costEffectiveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const speedToMarketRefs = useRef<(HTMLDivElement | null)[]>([]);
  const costEffectiveTitleRef = useRef<HTMLHeadingElement | null>(null);
  const speedToMarketTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const leftDiv = costEffectiveRefs.current[0];
    const rightDiv = costEffectiveRefs.current[1];
    if (!leftDiv || !rightDiv) return;

    // Set initial positions for Cost Effective
    gsap.set(leftDiv, { x: "-100vw", opacity: 0 });
    gsap.set(rightDiv, { x: "100vw", opacity: 0 });

    // Set initial positions for Speed to Market
    const speedRefs = speedToMarketRefs.current;
    if (speedRefs.length === 3) {
      gsap.set(speedRefs[0], { x: "-100vw", opacity: 0 });
      gsap.set(speedRefs[1], { x: "-100vw", opacity: 0 });
      gsap.set(speedRefs[2], { x: "100vw", opacity: 0 });
    }

    const ctx = gsap.context(() => {
      // Cost Effective animations
      gsap.to(leftDiv, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: costEffectiveTitleRef.current,
          start: "top 80%",
          scrub: true,
        },
      });
      gsap.to(rightDiv, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: costEffectiveTitleRef.current,
          start: "top 80%",
          scrub: true,
        },
      });
      // Speed to Market animations
      if (speedRefs.length === 3) {
        gsap.to(speedRefs[0], {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: speedToMarketTitleRef.current,
            start: "top 80%",
            scrub: true,
          },
        });
        gsap.to(speedRefs[1], {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: speedToMarketTitleRef.current,
            start: "top 80%",
            scrub: true,
          },
        });
        gsap.to(speedRefs[2], {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: speedToMarketTitleRef.current,
            start: "top 80%",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-transparent relative">
      <div className="absolute -top-[400px] bottom-0 inset-x-0 flex items-center justify-center -z-30 pointer-events-none">
        <div className="w-[560px] h-[420px] bg-[#4F00B7] opacity-60 blur-[314px] rounded-full" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-2">Why CleverCard ?</h2>
      <h3 ref={costEffectiveTitleRef} className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Cost Effective</h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-16 justify-center">
        {features[0].items.map((item, idx) => (
          <div
            key={idx}
            ref={el => { costEffectiveRefs.current[idx] = el; }}
            className="bg-transparent rounded-xl overflow-hidden relative flex-1"
            style={{
              boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="p-8 text-white h-full flex flex-col justify-between">
              <Image src={item.icon} alt={item.title} width={64} height={64} className="w-16 h-16 mb-4" />
              <p className="text-white text-lg font-medium leading-relaxed mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 ref={speedToMarketTitleRef} className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Speed to Market</h3>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {features[1].items.map((item, idx) => (
          <div
            key={idx}
            ref={el => { speedToMarketRefs.current[idx] = el; }}
            className="bg-transparent rounded-xl overflow-hidden relative flex-1"
            style={{
              boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="p-8 text-white h-full flex flex-col justify-between">
                <Image src={item.icon} alt={item.title} width={64} height={64} className="w-16 h-16 mb-4" />
              <p className="text-white text-lg font-medium leading-relaxed mt-2">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCleverCardSection; 