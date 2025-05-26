import React from "react";
import Image from "next/image";

/**
 * Endorsements section with company logos and trust statement.
 */
const Endorsements = () => (
  <section className="w-full flex flex-col items-center justify-center py-4 px-4">
    <div className="my-2 flex justify-center">
      <Image
        src="/Frame 1000009140.png"
        alt="Endorsed Companies"
        className="max-w-full h-auto my-8"
        width={1200}
        height={1200}
      />
    </div>
    <div className="text-center text-zinc-400 text-base font-medium mb-2">
      Trusted by 15k companies, from startups to enterprises
    </div>
  </section>
);

export default Endorsements; 
