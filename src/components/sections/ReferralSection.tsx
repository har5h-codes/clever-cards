import React from "react";
import { ReferalCarousel } from "@/components/ReferalCarousel";

/**
 * Referral section with headline and ReferalCarousel.
 */
const ReferralSection = () => (
  <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-transparent">
    <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-10">
      People Can&apos;t Stop Talking <br /> About Us
    </h2>
    <ReferalCarousel />
  </section>
);

export default ReferralSection; 