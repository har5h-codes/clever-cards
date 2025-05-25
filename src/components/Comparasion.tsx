import Image from "next/image";
import React from "react";
import { AnimatedButton } from "./AnimatedButton";
import { CustomButton } from "./ui/CustomButton";


export default function Comparasion() {
  // Define feature comparison data
  const featureComparison = [
    {
      icon: "users", // Target audience
      title: "Target Audience",
      employee: "Employees",
      business: "Businesses",
    },
    {
      icon: "delivery", // Delivery method
      title: "Delivery Method",
      employee: "Email to employees, usable instantly",
      business: "Issue to staff with customizable spend controls",
    },
    {
      icon: "device", // Platform compatibility
      title: "Platform Compatibility",
      employee: "Apple Pay, Google Pay",
      business: "Apple Pay, Google Pay",
    },
    {
      icon: "globe", // Global acceptance
      title: "Global Acceptance",
      employee: "Accepted online and in-store globally",
      business: "Accepted online and in-store globally",
    },
    {
      icon: "card", // Spend control
      title: "Spend Control",
      employee: "High control: limits, expiry dates, usage locations",
      business: "High control: limits, expiry dates, usage locations",
    },
    {
      icon: "visibility", // Real-time visibility
      title: "Real-time Visibility",
      employee: "Yes – by employee",
      business: "Yes – by department, employee, etc.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-transparent mx-auto relative">
      {/* Benefits badge */}
      <span className="mb-4 inline-block px-5 py-1 rounded-full border border-purple-300 text-purple-200 text-base font-medium z-10">Benefits</span>
      {/* Main heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6 z-10">
        Different Cards. Equal <span className="italic font-normal text-purple-100">Benefits</span>.
      </h2>
      {/* Description paragraph */}
      <p className="max-w-4xl text-center text-zinc-300 text-lg sm:text-lg font-medium mb-10 z-10">
        Clever Cards offers two distinct card options, each delivering the same exceptional benefits.<br />
        Enjoy secure transactions and seamless experiences, no matter which card you choose.
      </p>
      {/* Card + Table Section (fixed width) */}
      <div className="relative flex flex-col items-center w-[632px] max-w-full mx-auto z-10">
        {/* Blurred background behind cards+table */}
        <div className="absolute -top-[830px] bottom-0 inset-x-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="w-[600px] h-[320px] bg-[#883FE6] opacity-30 blur-3xl rounded-full" />
        </div>
        {/* Cards */}
        <div className="relative z-10 flex flex-row gap-8 w-full justify-center mb-10">
          {/* Employee Card */}
          <div className="flex flex-col items-center">
            <div className="w-[300px] h-[190px] relative mb-4 rounded-2xl overflow-hidden shadow-xl border border-[#473B57] bg-gradient-to-br from-[#7c3aed]/60 to-[#a78bfa]/30">
              <Image
                src="/card8.svg"
                fill
                alt="Employee Benefit Mastercard"
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center">
              <AnimatedButton className="pt-1 pb-1 px-16 border-white border-0">
                Explore More
              </AnimatedButton>
            </div>
          </div>
          {/* Business Card */}
          <div className="flex flex-col items-center">
            <div className="w-[300px] h-[190px] relative mb-4 rounded-2xl overflow-hidden shadow-xl border border-[#473B57] bg-gradient-to-br from-[#23202e]/80 to-[#4F00B7]/30">
              <Image
                src="/card9.svg"
                fill
                alt="Business Expense Mastercard"
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center">
              <CustomButton className="pt-1 pb-1 px-16 border-white border-0">
                Explore More
              </CustomButton>
            </div>
          </div>
        </div>
        {/* Feature Comparison Table (same width as cards+gap) */}
        <div className="w-full z-10">
          {featureComparison.map((feature, index) => (
            <div key={index} className="mb-8">
              {/* Feature Title with Icon */}
              <hr className="border-[#473B57] mb-2" />
              <div className="flex items-center mb-2">
                <div className="mr-2">
                  {feature.icon === "users" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                  )}
                  {feature.icon === "delivery" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h-2a1 1 0 00-1 1v6.05A2.5 2.5 0 0114 16.5h2a2.5 2.5 0 012.5-2.5V8a1 1 0 00-1-1h-3.5z" /></svg>
                  )}
                  {feature.icon === "device" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                  )}
                  {feature.icon === "globe" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
                  )}
                  {feature.icon === "card" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                  )}
                  {feature.icon === "visibility" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-300" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  )}
                </div>
                <h3 className="text-white font-bold text-lg">{feature.title}</h3>
              </div>
              <hr className="border-[#473B57] mb-2" />
              {/* Feature Details Comparison */}
              <div className="flex gap-x-8">
                <div className="w-1/2 flex items-start">
                  <svg className="h-5 w-5 text-purple-300 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-md text-zinc-200">{feature.employee}</span>
                </div>
                <div className="w-1/2 flex items-start">
                  <svg className="h-5 w-5 text-purple-300 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-md text-zinc-200">{feature.business}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}