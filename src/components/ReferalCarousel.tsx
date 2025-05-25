"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

interface CardProps {
    category: string;
    title: string;
    stats: string;
    person: {
        name: string;
        title: string;
        avatarUrl: string;
    };
    companyLogos: string[]; // Array of logo URLs
}

const Card: React.FC<CardProps> = ({
    category,
    title,
    stats,
    person,
    companyLogos,
}) => {
    return (
        <div className="max-w-lg bg-[#363539] text-white rounded-xl p-6 shadow-lg">
            {/* Top line with comma image and company logos */}
            <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8">
                    <Image src="/comma.svg" alt="Comma icon" width={32} height={32} />
                </div>

                {/* Company logos */}
                <div className="flex space-x-2">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={logo}
                                alt={`Company logo ${index + 1}`}
                                width={130}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Category */}
            <div className="text-[#ADE25D] mb-4 text-xs">{category}</div>

            {/* Main content */}
            <h2 className="text-2xl text-[#C9C9C9] font-semibold mb-4">{title}</h2>

            {/* Stats */}
            <p className="text-xl text-[#F8DBFF] font-semibold mb-8">{stats}</p>

            {/* Person info */}
            <div className="flex items-center mt-10">
                <div className="relative w-12 h-12 mr-4 bg-[#D1FFF4] rounded-full">
                    <Image
                        src={person.avatarUrl}
                        alt={`${person.name}'s avatar`}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h3 className=" text-white font-bold ">{person.name}</h3>
                    <p className="text-[#7B7B7B] text-sm">{person.title}</p>
                </div>
            </div>
        </div>
    );
};

// Carousel component
const cards = [
    {
        category: "Government & NGOs",
        title:
            "CleverCards enabled us to issue emergency welfare cards to hundreds of families instantly—no bank details needed.",
        stats: "92% faster fund delivery during crises",
        person: {
            name: "Ciara Murphy",
            title: "Digital Grants Manager",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
    {
        category: "SaaS & Embedded Finance",
        title:
            "Managing team expenses with CleverCards is effortless. We control, and monitor everything in one place.",
        stats: "80% reduction in reimbursement",
        person: {
            name: "Luis Romero",
            title: "Finance Director",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
    {
        category: "Retail",
        title:
            "Wayflyer launched CleverCards for our sellers in record time and transformed our payout experience.",
        stats: "50% less processing time by the team",
        person: {
            name: "Jane Doe",
            title: "Operations Lead",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
    {
        category: "Retail",
        title:
            "Wayflyer launched CleverCards for our sellers in record time and transformed our payout experience.",
        stats: "50% less processing time by the team",
        person: {
            name: "Jane Doe",
            title: "Operations Lead",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
    {
        category: "Retail",
        title:
            "Wayflyer launched CleverCards for our sellers in record time and transformed our payout experience.",
        stats: "50% less processing time by the team",
        person: {
            name: "Jane Doe",
            title: "Operations Lead",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
    {
        category: "Retail",
        title:
            "Wayflyer launched CleverCards for our sellers in record time and transformed our payout experience.",
        stats: "50% less processing time by the team",
        person: {
            name: "Jane Doe",
            title: "Operations Lead",
            avatarUrl: "/person.svg",
        },
        companyLogos: ["/company_logo.svg"],
    },
];

export const ReferalCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on client
        if (typeof window !== "undefined" && dragRef.current && carouselRef.current) {
            gsap.registerPlugin(Draggable);
            const container = carouselRef.current;
            const dragElem = dragRef.current;
            const cardWidth = 450; // Fixed card width
            const totalCards = cards.length;
            const totalCardsWidth = cardWidth * totalCards + (totalCards - 1) * 32; // Add gap (8rem = 32px)

            // Calculate the center point of the container
            const containerCenter = container.offsetWidth / 2;

            // Calculate how far we need to drag to get the first card centered
            const firstCardCenter = cardWidth / 2;
            const maxX = containerCenter - firstCardCenter;

            // Calculate how far we need to drag to get the last card centered
            const lastCardPosition = totalCardsWidth - cardWidth;
            const minX = containerCenter - lastCardPosition - (cardWidth / 2);

            Draggable.create(dragElem, {
                type: "x",
                bounds: { minX, maxX },
                inertia: true,
                cursor: "grab",
            });
        }
    }, []);

    return (
        <div
            ref={carouselRef}
            className="relative w-full flex items-center py-12 overflow-x-hidden"
        >
            {/* Shadow overlays - ensure these are always above the cards */}
            <div className="absolute left-0 top-0 h-full w-32 z-[999999] pointer-events-none bg-gradient-to-r from-[rgba(21,17,27,1)] to-[rgba(21,17,27,0)]" />
            <div className="absolute right-0 top-0 h-full w-32 z-[999999] pointer-events-none bg-gradient-to-l from-[rgba(21,17,27,1)] to-[rgba(21,17,27,0)]" />

            {/* Draggable cards */}
            <div
                ref={dragRef}
                className="flex gap-8"
                style={{ cursor: "grab", willChange: "transform", zIndex: 10, minWidth: "100%" }}
            >
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="transition-all duration-300 scale-100 z-10 opacity-100"
                        style={{
                            minWidth: 450,
                            maxWidth: 450,
                        }}
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// export default function Page() {
//   return (
//     <div
//       className={`${inter.className} p-6 bg-gray-900 min-h-screen flex items-center justify-center flex-col`}
//     >
//       <h2 className="text-white text-5xl font-semibold mb-8 text-center">
//         People Can&apos;t Stop Talking <br /> About Us
//       </h2>
//       <Carousel />
//     </div>
//   );
// }
// ```