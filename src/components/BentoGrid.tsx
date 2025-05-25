'use client';
import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import Image from 'next/image';

const BentoGrid = () => {
    // Ref for the phone image in Tax Free Benefits card
    const phoneImgRef = useRef<HTMLImageElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const [phoneImgLoaded, setPhoneImgLoaded] = useState(false);

    // --- Business Expenses Animation ---
    const businessCardRef = useRef<HTMLDivElement>(null);
    const leftImgRef = useRef<HTMLImageElement>(null);
    const rightImgRef = useRef<HTMLImageElement>(null);

    // Employee Gift Cards animation
    const giftCardRef1 = useRef<HTMLImageElement>(null);
    const giftCardRef2 = useRef<HTMLImageElement>(null);
    const giftCardRef3 = useRef<HTMLImageElement>(null);
    const giftCardRefs = useMemo(() => [giftCardRef1, giftCardRef2, giftCardRef3], []);
    const giftCardContainerRef = useRef<HTMLDivElement>(null);

    // Real-Time Payments Animation
    const realTimeCardRef = useRef<HTMLDivElement>(null);
    const realTimeImgRef = useRef<HTMLImageElement>(null);
    const realTimeRingRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!phoneImgLoaded) return;
        const card = cardRef.current;
        const img = phoneImgRef.current;
        const mask = maskRef.current;
        if (!card || !img || !mask) return;
        // Get mask height dynamically
        const maskHeight = mask.offsetHeight;
        if (!maskHeight) return; // Don't run if mask height is 0
        // Set initial state: image is scaled and translated down by 65% of mask height
        gsap.set(img, {
            y: maskHeight * 0.65,
            scale: 0.9,
        });
        const handleEnter = () => {
            gsap.to(img, {
                y: -maskHeight * 0.001, // float up by 0.08 of mask height
                scale: 0.9,
                duration: 0.5,
                ease: "power3.inOut",
            });
        };
        const handleLeave = () => {
            gsap.to(img, {
                y: maskHeight * 0.65,
                scale: 0.9,
                duration: 0.5,
                ease: "power3.inOut",
            });
        };
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, [phoneImgLoaded]);

    // Business Expenses animation
    useEffect(() => {
        const card = businessCardRef.current;
        const leftImg = leftImgRef.current;
        const rightImg = rightImgRef.current;
        if (!card || !leftImg || !rightImg) return;

        // Initial state: rotated and translated off-center
        gsap.set(leftImg, {
            rotate: -20,
            x: -270,
            y: 0,
            scale: 0.6,
            zIndex: 1,
        });
        gsap.set(rightImg, {
            rotate: 20,
            x: 270,
            y: 0,
            scale: 0.6,
            zIndex: 2,
        });

        const handleEnter = () => {
            gsap.to(leftImg, {
                rotate: 0,
                x: -65,
                y: -60,
                duration: 0.5,
                ease: "power3.inOut",
                zIndex: 2,
            });
            gsap.to(rightImg, {
                rotate: 0,
                x: 65,
                y: -10,
                duration: 0.5,
                ease: "power3.inOut",
                zIndex: 2,
            });
        };
        const handleLeave = () => {
            gsap.to(leftImg, {
                rotate: -20,
                x: -270,
                y: 0,
                duration: 0.5,
                ease: "power3.inOut",
                zIndex: 1,
            });
            gsap.to(rightImg, {
                rotate: 20,
                x: 270,
                y: 0,
                duration: 0.5,
                ease: "power3.inOut",
                zIndex: 2,
            });
        };
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    // Employee Gift Cards CardStack-style hover animation
    useEffect(() => {
        const container = giftCardContainerRef.current;
        const [card1, card2, card3] = giftCardRefs.map(ref => ref.current);
        if (!container || !card1 || !card2 || !card3) return;

        // Initial state: all cards stacked in the center, no rotation
        const baseScale = 2; // Increased scale for all cards
        gsap.set(card1, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 3 });
        gsap.set(card2, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 2 });
        gsap.set(card3, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 1 });

        const handleEnter = () => {
            console.log("enter")
            gsap.to(card1, {
                y: -30, x: 30, rotate: 10, scale: baseScale * 0.97, duration: 0.7, ease: "power3.out",
            });
            gsap.to(card2, {
                y: 0, x: 0, rotate: 0, scale: baseScale, duration: 0.7, ease: "power3.out", delay: 0.1,
            });
            gsap.to(card3, {
                y: 30, x: -30, rotate: -10, scale: baseScale * 0.97, duration: 0.7, ease: "power3.out", delay: 0.2,
            });
        };

        const handleLeave = () => {
            console.log("leave")
            gsap.to(card1, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 3, duration: 0.5, ease: "power3.inOut" });
            gsap.to(card2, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 2, duration: 0.5, ease: "power3.inOut", delay: 0.1 });
            gsap.to(card3, { y: 0, x: 0, rotate: 0, scale: baseScale, zIndex: 1, duration: 0.5, ease: "power3.inOut", delay: 0.2 });
        };

        container.addEventListener("mouseenter", handleEnter);
        container.addEventListener("mouseleave", handleLeave);
        return () => {
            container.removeEventListener("mouseenter", handleEnter);
            container.removeEventListener("mouseleave", handleLeave);
        };
    }, [giftCardRefs]);

    // Real-Time Payments Animation
    useEffect(() => {
        const card = realTimeCardRef.current;
        const img = realTimeImgRef.current;
        const ring = realTimeRingRef.current;
        if (!card || !img) return;

        // Set initial state
        gsap.set(img, {
            x: 120, // translate-x-30 (30*4=120px)
            y: 48,  // translate-y-12 (12*4=48px)
            rotate: 6,
            scale: 0.8,
        });
        gsap.set(ring, {
            rotate: 180,
            scale: 1,
        });

        const handleEnter = () => {
            gsap.to(img, {
                x: 76,
                y: 40,
                rotate: 0,
                duration: 0.3,
                ease: "power3.inOut",
            });
            gsap.to(ring, {
                rotate: 0,
                scale: 1.2,
                duration: 1,
                ease: "power3.inOut",
            });
        };
        const handleLeave = () => {
            gsap.to(img, {
                x: 120,
                y: 48,
                rotate: 6,
                duration: 0.3,
                ease: "power3.inOut",
            });
            gsap.to(ring, {
                rotate: 180,
                scale: 1,
                duration: 1,
                ease: "power3.inOut",
            });
        };
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div id="bento-grid-section" className="flex flex-col items-center justify-center min-h-screen bg-[#15111B] p-6">
            <div className="max-w-7xl w-full grid grid-cols-12 gap-4">
                {/* Left column group - spans 8 columns */}
                <div className="col-span-7 space-y-4">
                    {/* Tax Free Benefits */}
                    <div
                        ref={cardRef}
                        className="bg-transparent rounded-xl overflow-hidden relative h-[481px] group"
                        style={{
                            boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        <div className="p-6 text-white h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Tax free Benefits</h2>
                                <p className="text-gray-300">
                                    Adding CleverCards Mastercards to your phone is as easy as
                                    adding a boarding pass.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                {/* Masked phone image at bottom, dynamic height */}
                                <div
                                    ref={maskRef}
                                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden pointer-events-none"
                                    style={{ height: "50" }} // 32% of card height, can be tweaked
                                >
                                    <Image
                                        ref={phoneImgRef}
                                        src="/1x1.png"
                                        alt="Phone with card"
                                        width={420}
                                        height={420} 
                                        className="object-contain w-full"
                                        style={{ display: "block" }}
                                        aria-hidden="true"
                                        onLoad={() => setPhoneImgLoaded(true)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Real-Time Payments */}
                    <div
                        ref={realTimeCardRef}
                        className="bg-transparent rounded-xl overflow-hidden h-[259px] relative"
                        style={{
                            boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        {/* Radial gradient background behind the image */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-0 -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
                        </div>

                        <div className="pt-6 pl-6 text-white h-full flex justify-between items-center">
                            <div className="max-w-[50%]">
                                <h2 className="text-xl font-bold mb-2">Real-Time Payments</h2>
                                <p className="text-gray-300 text-sm">
                                    Quickly launch with an affordable and efficient real-time payment platform
                                </p>
                            </div>
                            <div className="relative w-[300px] h-full flex items-center justify-center">
                                {/* Currency Ring SVG behind the card */}
                                <Image
                                    ref={realTimeRingRef}
                                    src="/currency_ring.svg"
                                    alt="Currency Ring"
                                    width={260}
                                    height={260}
                                    className="absolute -bottom-14 -right-12 w-[260px] h-[260px] pointer-events-none select-none"
                                    style={{ zIndex: 1 }}
                                    aria-hidden="true"
                                />
                                {/* Card image */}
                                <Image
                                    ref={realTimeImgRef}
                                    src="/bento_card4.png"
                                    alt="Employee Allowance"
                                    width={260}
                                    height={260}
                                    className="object-contain absolute bottom-0 right-0 scale-50 transition-transform duration-300"
                                    style={{ zIndex: 2 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column group - spans 4 columns */}
                <div className="col-span-5 space-y-4">
                    {/* Business Expenses */}
                    <div
                        ref={businessCardRef}
                        className="bg-transparent rounded-xl overflow-hidden h-[313px]"
                        style={{
                            boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        <div className="p-6 text-white h-full relative">
                            <h2 className="text-xl font-bold mb-2">Business Expenses</h2>
                            <p className="text-gray-300 text-sm">
                                Take complete control of your business expenses with CleverCards
                                prepaid digital Mastercards.
                            </p>
                            {/* Radial gradient for left card */}
                            <div className="absolute bottom-[0px] right-[0] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
                            <div className="absolute bottom-0 right-0">
                                <Image
                                    ref={rightImgRef}
                                    src="/1x22.png"
                                    alt="Business Card Right"
                                    width={420}
                                    height={420}
                                    className="object-contain"
                                    style={{ willChange: "transform" }}
                                />
                            </div>
                            <div className="absolute bottom-10 left-0">
                                <Image
                                    ref={leftImgRef}
                                    src="/1x21.png"
                                    alt="Business Card Left"
                                    width={420}
                                    height={420}
                                    className="object-contain"
                                    style={{ willChange: "transform" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Employee Gift Cards */}
                    <div
                        ref={giftCardContainerRef}
                        className="bg-transparent rounded-xl overflow-hidden h-[427px]"
                        style={{
                            boxShadow: "inset 0 0 64px 0 rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        <div className="p-8 text-white h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-2">Employee Gift Cards</h2>
                                <p className="text-gray-300 text-sm">
                                    Boost your rewards program and lower taxes with CleverCard&apos;s
                                    prepaid gift cards.
                                </p>
                            </div>
                            <div className="flex justify-center relative h-96">
                                <Image
                                    ref={giftCardRef1}
                                    src="/bento_card1.png"
                                    alt="Gift Card 1"
                                    width={660}
                                    height={660}
                                    className="absolute w-[66%] h-full object-contain rounded-xl"
                                    style={{ zIndex: 3, pointerEvents: "none" }}
                                />
                                <Image
                                    ref={giftCardRef2}
                                    src="/bento_card2.png"
                                    alt="Gift Card 2"
                                    width={660}
                                    height={660}
                                    className="absolute w-[66%] h-full object-contain rounded-xl"
                                    style={{ zIndex: 2, pointerEvents: "none" }}
                                />
                                <Image
                                    ref={giftCardRef3}
                                    src="/bento_card3.png"
                                    alt="Gift Card 3"
                                    width={660}
                                    height={660}
                                    className="absolute w-[66%] h-full object-contain rounded-xl"
                                    style={{ zIndex: 1, pointerEvents: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;