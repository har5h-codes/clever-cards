"use client";

import React, { useState } from "react";
import { CustomButton } from "@/components/ui/CustomButton";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const businessesWeServe = [
    {
      name: "Marketplace & Platform",
      iconSrc: "/speed_to_market_1.svg",
      href: "/marketplace",
    },
    {
      name: "Healthcare",
      iconSrc: "/speed_to_market_1.svg",
      href: "/healthcare",
    },
    {
      name: "Financial Services",
      iconSrc: "/speed_to_market_1.svg",
      href: "/financial",
    },
    {
      name: "Retail & eCommerce",
      iconSrc: "/speed_to_market_1.svg",
      href: "/retail",
    },
    {
      name: "Professional Services",
      iconSrc: "/speed_to_market_1.svg",
      href: "/professional",
    },
    {
      name: "Education & Non-Profits",
      iconSrc: "/speed_to_market_1.svg",
      href: "/education",
    },
    {
      name: "Public Sector & Governments",
      iconSrc: "/speed_to_market_1.svg",
      href: "/public-sector",
    },
    {
      name: "Hospitality & Travel",
      iconSrc: "/speed_to_market_1.svg",
      href: "/hospitality",
    },
    {
      name: "Manufacturing",
      iconSrc: "/speed_to_market_1.svg",
      href: "/manufacturing",
    },
    {
      name: "Utilities & Energy",
      iconSrc: "/speed_to_market_1.svg",
      href: "/utilities",
    },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className={`w-full sticky top-0 z-20 bg-transparent backdrop-blur-md border-b border-[#473B57] px-6 py-3 flex items-center justify-between transition-colors duration-300 relative`}>
      {/* Left: Logo */}
      <div className="flex-shrink-0 flex items-center justify-start z-10">
        <Image src="/logo.svg" alt="Logo" className="h-9 w-auto" width={36} height={36} />
      </div>
      {/* Center: Nav links (flex centered) */}
      <div className="flex-1 flex items-center justify-center gap-8 text-zinc-200 font-medium text-lg">
        {/* Businesses we serve dropdown */}
        <div className="relative group flex items-center"
          onClick={() => {
            setActiveDropdown("businesses")
            console.log("businesses")
          }}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => {
            setActiveDropdown("businesses")
            console.log("businesses")
          }}
        >
          <button
            type="button"
            onClick={() => handleDropdownToggle("businesses")}
            className="flex items-center gap-1 cursor-pointer group-hover:text-white focus:text-white text-zinc-200 font-medium text-lg bg-transparent border-none outline-none"
          >
            Businesses we serve
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 20 20"
              className={`transition-transform duration-200 ${activeDropdown === "businesses" ? "rotate-180" : ""}`}
            >
              <path d="M6 8l4 4 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Dropdown Menu */}
          {activeDropdown === "businesses" && (
            <div
              className="absolute left-0 top-10 mt-2 w-[420px] bg-white rounded-lg shadow-lg z-50 border border-gray-200"
              onMouseEnter={() => setActiveDropdown("businesses")}
            >
              <div className="grid grid-cols-2 gap-1 pr-3">
                {businessesWeServe.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-gray-900"
                  >
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <Image
                        src={item.iconSrc}
                        alt={`${item.name} icon`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-semibold">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Product nav link */}
        <div className="relative group cursor-pointer flex items-center gap-1">
          Product
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        {/* Solution nav link */}
        <div className="relative group cursor-pointer flex items-center gap-1">
          Solution
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        {/* Company nav link */}
        <div className="relative group cursor-pointer flex items-center gap-1">
          Company
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
      {/* Right: Contact Sales, Login */}
      <div className="flex items-center justify-end gap-3 min-w-0 z-10">
        <button className="border border-zinc-300/30 text-zinc-100 font-medium px-5 py-2 rounded-full bg-transparent hover:bg-zinc-200/10 transition text-base mr-1">
          Contact Sales
        </button>
        <CustomButton
          size="sm"
        >
          Login
        </CustomButton>
      </div>
    </nav>
  );
}

export default Navbar; 