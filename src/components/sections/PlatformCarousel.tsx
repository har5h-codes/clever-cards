"use client";

import React, { useState, useEffect, useRef } from "react";

interface PlatformCase {
  id: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

interface PlatformCarouselProps {
  cases: PlatformCase[];
}

const PlatformCard: React.FC<{ platformCase: PlatformCase }> = ({ platformCase }) => (
  <div className=" rounded-[30px] flex flex-col w-[421px] h-[246px] border border-gray-700 p-6 shadow-lg">
    <h3 className="font-bold text-2xl text-white mb-4">{platformCase.title}</h3>
    <p className="text-gray-300 text-sm mb-6 flex-grow">
      {platformCase.description}
    </p>
    <a
      href={platformCase.learnMoreLink}
      className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-md w-fit"
    >
      Learn More
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>
);

export const PlatformCarousel: React.FC<PlatformCarouselProps> = ({ cases }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Card width (421px) + gap (32px)
  const CARD_WIDTH = 453;

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          const nextScroll = Math.min(
            scrollRef.current.scrollLeft + CARD_WIDTH,
            maxScroll
          );
          scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
          
          // Loop back to start if at end
          if (nextScroll >= maxScroll) {
            setTimeout(() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }
            }, 500);
          }
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <section className="w-full bg-[#13111A] py-16">
      <div className="container min-w-screen px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            One Platform. Many Use Cases. Endless Possibilities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From paying employees, rewarding customers to paying businesses — the CleverCards Platform gives
            you the tools to move money instantly, securely, and with complete control.
          </p>
        </div>
        
        <div
          className="w-full p-8 overflow-x-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative max-w-[90%] mx-auto">
            <div
              ref={scrollRef}
              className="flex scroll-smooth -mx-2 px-2 overflow-x-visible gap-2"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {cases.map((platformCase) => (
                <div
                  key={platformCase.id}
                  className="flex-shrink-0"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <PlatformCard platformCase={platformCase} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function PlatformSection() {
  const platformCases = [
    {
      id: "1",
      title: "Donations & Crowdfunding Payouts",
      description: "Disburse raised funds instantly and securely — even to unbanked or undocumented recipients....",
      learnMoreLink: "/donations",
    },
    {
      id: "2",
      title: "Gig & Contractor Payouts",
      description: "Pay freelancers, field workers, and contractors in real time — globally....",
      learnMoreLink: "/gig-payouts",
    },
    {
      id: "3",
      title: "Employee Benefits Payouts",
      description: "Offer tax-efficient employee benefits — instantly issued and fully compliant....",
      learnMoreLink: "/employee-benefits",
    },
    {
      id: "4",
      title: "Marketing & Rewards",
      description: "Pay rewards and incentives instantly to customers and partners....",
      learnMoreLink: "/marketing-rewards",
    },
  ];

  return <PlatformCarousel cases={platformCases} />;
}
