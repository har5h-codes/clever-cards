import React from "react";
import Image from "next/image";

const useCases = [
    {
        img: "/use_case_1.jpg",
        title: "Use Cases for Individuals: Simplifying Personal Payments and Gifting",
        desc: "Easily send gifts or manage personal expenses with our virtual cards.",
        link: "#",
    },
    {
        img: "/use_case_2.jpg",
        title: "Use Cases for Businesses: Efficient Payroll and Expense Management",
        desc: "Streamline your payroll process and manage expenses effortlessly with Clever Cards.",
        link: "#",
    },
    {
        img: "/use_case_3.jpg",
        title: "Real-World Applications: Empowering Users with Practical Solutions",
        desc: "From gifting to business expenses, our cards adapt to your needs.",
        link: "#",
    },
];

const UseCasesSection = () => (
    <section className="w-full bg-[#18121e] py-16 px-4 flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="flex-1">
                <h2 className="text-4xl md:text-[40px] font-bold text-white mb-4 leading-tight">
                    Explore Our Use Cases for <br /> Individuals and Businesses
                </h2>
            </div>
            <div className="flex-1 md:pl-8">
                <p className="text-lg text-gray-200">
                    Clever Cards offers tailored solutions for both individuals and businesses. Whether you need to manage personal expenses or streamline payroll, our virtual cards provide the flexibility and security you need. Discover how our innovative features can simplify your financial transactions.
                </p>
            </div>
        </div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
                <div
                    key={i}
                    className="flex flex-col overflow-hidden h-full"
                >
                    <div className="relative w-full h-56">
                        <Image
                            src={uc.img}
                            alt={uc.title}
                            fill
                            className="object-cover w-full h-full rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority
                        />
                    </div>
                    <div className="flex flex-col flex-1 py-6 w-full">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {uc.title}
                        </h3>
                        <p className="text-slate-50/70 mb-6 flex-1">{uc.desc}</p>
                        <div className="flex items-center gap-2 text-white">
                            Learn More <span aria-hidden>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.0404 11.9496L7.7474 6.24264L2.0404 0.535645L0.626404 1.94964L4.9194 6.24264L0.626404 10.5356L2.0404 11.9496Z" fill="white" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default UseCasesSection; 