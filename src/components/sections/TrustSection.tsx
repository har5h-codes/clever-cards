import React, { forwardRef } from "react";
import BentoGrid from "@/components/BentoGrid";

/**
 * Trust/Security section with badge, headline, description, and BentoGrid.
 */
const TrustSection = forwardRef<HTMLDivElement, object>((_, ref) => (
  <section ref={ref} className="w-full flex flex-col items-center justify-center py-12 px-4 bg-transparent mt-12">
    <span className="mb-4 inline-block px-5 py-1 rounded-full border border-purple-300 text-purple-200 text-base font-medium">Trust</span>
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6">
      Why Choose Clever Cards<br />
      for Your <span className="italic font-normal text-purple-100">Security?</span>
    </h2>
    <p className="max-w-3xl text-center text-zinc-300 text-lg sm:text-lg font-medium">
      Clever Cards prioritizes your security with top-tier compliance and protections.<br />
      Our platform ensures that your transactions are safe and seamless.
    </p>
    <BentoGrid />
  </section>
));
TrustSection.displayName = "TrustSection";
export default TrustSection; 