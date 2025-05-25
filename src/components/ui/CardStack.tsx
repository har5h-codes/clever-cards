"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

/**
 * Animated stack of cards for illustration.
 * @param size 'normal' or 'large' for card dimensions
 */
function CardStack({ size = "normal" }: { size?: "normal" | "large" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLImageElement>(null);
  const cardRef2 = useRef<HTMLImageElement>(null);
  const cardRef3 = useRef<HTMLImageElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    const cardRefs = [cardRef1, cardRef2, cardRef3];
    if (animated) {
      gsap.to(cardRefs[0].current, {
        y: -30,
        x: 30,
        rotate: 10,
        scale: 0.97,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(cardRefs[1].current, {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.to(cardRefs[2].current, {
        y: 30,
        x: -30,
        rotate: -10,
        scale: 0.97,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, [animated]);

  // Initial stacked style: all cards overlap, only middle card visible
  const dimensions = size === "large"
    ? { width: 440, height: 240 }
    : { width: 340, height: 180 };
  return (
    <div ref={containerRef} className="relative flex items-center justify-center select-none" style={{ width: dimensions.width, height: dimensions.height }}>
      <Image
        ref={cardRef1}
        src="/card1.png"
        alt="Card 1"
        className="absolute w-full h-full object-contain rounded-xl"
        style={{ zIndex: 3, opacity: 1, pointerEvents: "none" }}
        width={dimensions.width}
        height={dimensions.height}
      />
      <Image
        ref={cardRef2}
        src="/card2.png"
        alt="Card 2"
        className="absolute w-full h-full object-contain rounded-xl"
        style={{ zIndex: 2, opacity: 1, pointerEvents: "none" }}
        width={dimensions.width}
        height={dimensions.height}
      />
      <Image
        ref={cardRef3}
        src="/card3.png"
        alt="Card 3"
        className="absolute w-full h-full object-contain rounded-xl"
        style={{ zIndex: 1, opacity: 1, pointerEvents: "none" }}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

export default CardStack; 