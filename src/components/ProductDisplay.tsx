"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
    title: string[];
    description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-96 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="rounded-2xl overflow-hidden bg-[#363539] text-white shadow-lg p-4 space-y-4 min-h-[430px] flex flex-col justify-between">
                <div className="px-2">
                    <div className="flex justify-between items-start">
                        <div>
                            {title.map((line, idx) => (
                                <h2 key={idx} className="text-2xl font-bold leading-tight">
                                    {line}
                                </h2>
                            ))}
                        </div>
                        <div
                            className={`p-2 text-white rounded-full transition-transform duration-300 ${isHovered ? "transform -rotate-45" : ""
                                }`}
                        >
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="34" height="34" rx="17" fill="#6F01FE" />
                                <path d="M10.5 17L24.5 17M24.5 17L17.5 10M24.5 17L17.5 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <p className="text-[#ADADAD] text-lg mt-2">{description}</p>
                </div>


                {/* Fixed Credit Card Container */}
                <div className="relative mt-6 h-20 overflow-visible flex justify-center items-center">
                    <div
                        className={`relative transition-all duration-300 ${isHovered ? "bottom-0.5" : "mt-44"
                            }`}
                    >
                        {/* Purple glow effect ONLY behind the card image borders */}
                        <div
                            className={`absolute -inset-1 bg-purple-700 rounded-full blur-xl transition-all duration-300  ${isHovered ? "opacity-60" : "opacity-0"
                                }`}
                        />
                        <Image
                            src={image}
                            width={300}
                            height={80}
                            alt={title.join(" ")}
                            className="rounded-xl relative z-10"
                        />
                    </div>
                </div>
            </div>
            {/* Removed the glow effect for the entire card */}
        </div>
    );
};

export function ProductDisplay() {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-4xl font-bold text-white text-center mb-6 leading-tight">
                Issue CleverCards directly without the platform
            </h1>
            <p className="text-gray-300 max-w-5xl mx-auto text-lg px-4 mb-7">
                For businesses that don’t need a full platform integration, CleverCards Direct allows you to issue ready-to-use digital Mastercards for employee benefits, business expenses and payouts — no technical setup or integration required.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-full justify-center items-stretch">
                <Card
                    title={["Employee", "Benefits Cards"]}
                    description={
                        "Gift tax-free* rewards with CleverCards digital cards. Simplify business gifting and give employees full control over their funds, with the flexibility to spend them anywhere, anytime."
                    }
                    image="/product_card_purple.svg"
                />
                <Card
                    title={["Business", "Expense Cards"]}
                    description={
                        "Attain real-time control and transparency over your business spend. Free employees from end-of-month expense claims."
                    }
                    image="/product_card_black.svg"
                />
                <Card
                    title={["Subscription", "Payment Cards"]}
                    description={
                        "Earn unlimited cashback on all your subscriptions with no monthly fees instantly. Track, control, and optimise your payments all in one place."
                    }
                    image="/product_card_blue.svg"
                />
            </div>
        </div>
    );
}