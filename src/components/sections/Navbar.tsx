"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedButton } from "../AnimatedButton";
import { CustomButton } from "../ui/CustomButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState<number | null>(null);
  const [dropdownDirection, setDropdownDirection] = useState<"l" | "r" | null>(
    null
  );

  const navigationItems = [
    {
      label: "Business We Serve",
      id: 1,
      Component: PlatformDropdown,
    },
    {
      label: "Product",
      id: 2,
      Component: SolutionsDropdown,
    },
    {
      label: "Solution",
      id: 3,
      Component: DevelopersDropdown,
    },
    {
      label: "Company",
      id: 5,
      Component: CompanyDropdown,
    },
  ];

  const handleDropdownSelect = (id: number | null) => {
    if (typeof selectedDropdown === "number" && typeof id === "number") {
      setDropdownDirection(selectedDropdown > id ? "r" : "l");
    } else if (id === null) {
      setDropdownDirection(null);
    }
    setSelectedDropdown(id);
  };

  const handleMobileDropdownToggle = (itemId: number) => {
    setSelectedDropdown(selectedDropdown === itemId ? null : itemId);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as HTMLElement).closest("#mq-header")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header id="mq-header" className="sticky top-0 z-[9999] w-full bg-transparent backdrop-blur-md border-b border-[#473B57]">
      <div className="container mx-auto">
        <nav
          aria-label="Main"
          className="relative z-10 mx-auto flex h-[61px] flex-1 items-center justify-center md:h-[86px]"
        >
          {/* Logo */}
          <Link href="/" title="Marqeta">
            <Image
              alt="Marqeta"
              width={170}
              height={24}
              className="h-5 w-[136px] md:h-6 md:w-[170px]"
              src="CClogowhite.svg"
              priority
            />
          </Link>

          {/* Desktop Navigation with Shifting Dropdown */}
          <div className="flex flex-grow justify-center">
            <div
              className="relative"
              onMouseLeave={() => handleDropdownSelect(null)}
            >
              <ul className="group hidden flex-1 list-none items-center justify-center space-x-1 md:flex">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      id={`nav-tab-${item.id}`}
                      onMouseEnter={() => handleDropdownSelect(item.id)}
                      onClick={() => handleDropdownSelect(item.id)}
                      className={`group inline-flex h-10 w-max items-center justify-center gap-1 py-2 text-sm transition-all duration-200 disabled:pointer-events-none md:px-3 xl:px-5 px-4 ${
                        selectedDropdown === item.id
                          ? "underline border-green-500"
                          : "text-white hover:text-white"
                      }`}
                      aria-expanded={selectedDropdown === item.id}
                    >
                      <span className="text-white font-bold text-[1rem]">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Animated Dropdown Content */}
              <AnimatePresence>
                {selectedDropdown && (
                  <motion.div
                    id="dropdown-content"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-[calc(100%_+_24px)] w-[480px] rounded-xl  bg-black shadow-xl backdrop-blur-sm"
                    style={{
                      background: "black",
                    }}
                  >
                    {/* Bridge for hover area */}
                    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />

                    {/* Animated Nub */}
                    <DropdownNub selected={selectedDropdown} />

                    {/* Content with slide animation */}
                    <div className="p-6">
                      {navigationItems.map((item) => (
                        <div className="overflow-hidden" key={item.id}>
                          {selectedDropdown === item.id && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                x:
                                  dropdownDirection === "l"
                                    ? 100
                                    : dropdownDirection === "r"
                                    ? -100
                                    : 0,
                              }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                              <item.Component mobile={false} />
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <CustomButton>
              Contact Sales
            </CustomButton>
            <AnimatedButton
            >
              Login
            </AnimatedButton>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-4 pr-3 md:hidden">
            <Link
              href="/contact-us"
              className="bg-[#6F01FE] inline-flex w-auto items-center justify-center rounded-[10px] px-[17px] py-[9px] text-center text-base !leading-6 font-medium tracking-[0px] text-white transition "
            >
              Contact Sales
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-transform duration-200"
              aria-label="Toggle mobile menu"
            >
              <div
                className={`transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              >
                <Image
                  alt="Menu"
                  width={18}
                  height={14}
                  src="https://images.ctfassets.net/wqi8u1luxsv0/6zSmlE31QZ1KtwnSWt76bA/826d45ca0ac5ce9e190f05826d1e2909/Icon.svg"
                  className="overflow-hidden rounded-none"
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-purple-100 md:hidden overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="container mx-auto py-4">
              <ul className="space-y-1">
                {navigationItems.map((item, index) => (
                  <li key={item.id}>
                    <div>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.id)}
                        className={`w-full text-left px-4 py-3 text-purple-600 hover:text-purple-700 hover:bg-white flex items-center justify-between transition-all duration-200 opacity-0 translate-x-4 animate-slideInLeft`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <span className="font-medium">{item.label}</span>
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            selectedDropdown === item.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Mobile Dropdown Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          selectedDropdown === item.id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-8 pr-4 py-2">
                          <item.Component mobile />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}

                {/* Mobile Sign In */}
                <li className="border-t border-white pt-2 mt-4">
                  <Link
                    href="https://app.marqeta.com"
                    className={`block px-4 py-3 border-s-2 text-purple-500 hover:text-purple-700 hover:bg-gray-50 font-medium transition-all duration-200 opacity-0 translate-x-4 animate-slideInLeft`}
                    style={{
                      animationDelay: `${navigationItems.length * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

// Animated Nub Component
import { useCallback } from "react";

const DropdownNub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  const moveNub = useCallback(() => {
    if (selected) {
      const hoveredTab = document.getElementById(`nav-tab-${selected}`);
      const dropdownContent = document.getElementById("dropdown-content");

      if (!hoveredTab || !dropdownContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = dropdownContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  }, [selected]);

  useEffect(() => {
    moveNub();
  }, [selected, moveNub]);

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-purple-200 bg-white"
    />
  );
};

// Dropdown Components
const PlatformDropdown = ({ mobile }: { mobile: boolean }) => {
  const items = [
    {
      title: "Marketplace & Platform",
      description: "",
      icon: "g4143.svg",
    },
    {
      title: "Healthcare",
      description: "",
      icon: "Capa_1 (4).svg",
    },
    {
      title: "Financial Services",
      description: "",
      icon: "Capa_1 (2).svg",
    },
    {
      title: "Retail & eCommerce",
      description: "",
      icon: "Capa_1 (5).svg",
    },
    {
      title: "Professional Services",
      description: "",
      icon: "g843.svg",
    },
    {
      title: "Education & Non-Profits",
      description: "",
      icon: "g837.svg",
    },
    {
      title: "Public Sector & Governments",
      description: "",
      icon: "Capa_1 (3).svg",
    },
    {
      title: "Hospitality & Travel",
      description: "",
      icon: "Capa_1 (6).svg",
    },
    {
      title: "Manufacturing",
      description: "",
      icon: "g2862.svg",
    },
    {
      title: "Utilities & Energy",
      description: "",
      icon: "g2958.svg",
    },
  ];

  if (mobile) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/businesses/${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="block py-2 px-4 text-sm text-white hover:text-purple-700 hover:bg-black rounded-md transition-all duration-200"
          >
            <div className="font-medium">{item.title}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/businesses/${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="group flex items-center p-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
          >
            <div className="w-5 h-5 mr-3 flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
                className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-200"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white group-hover:text-white transition-colors duration-200 text-sm">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SolutionsDropdown = ({ mobile }: { mobile: boolean }) => {
  const rightContent = {
    Overview: [
      "API Documentation",
      "ADKs & Tools",
      "Sandbox Environment",
      "Webhooks & Event Streams",
      "Integration Guides",
      "Sample Code & Libraries",
      "Developer Community",
      "Support & Contact",
    ],
    Accounts: [
      "Account Management",
      "Account Types",
      "Balance Management",
      "Account Statements",
      "Transaction History",
      "Account Settings",
    ],
    "Card Issuing": [
      "Virtual Cards",
      "Physical Cards",
      "Card Controls",
      "Card Lifecycle",
      "Card Design Studio",
      "Instant Issuance",
    ],
    Payouts: [
      "Real-time Payouts",
      "Batch Processing",
      "International Transfers",
      "Payment Rails",
      "Settlement Options",
      "Reconciliation",
    ],
    "Spend Controls": [
      "Transaction Limits",
      "Merchant Controls",
      "Category Restrictions",
      "Time-based Rules",
      "Velocity Controls",
      "Real-time Monitoring",
    ],
    "Data & Insights": [
      "Analytics Dashboard",
      "Custom Reports",
      "Transaction Analytics",
      "Spending Insights",
      "Performance Metrics",
      "Data Export",
    ],
    "Security Compliance": [
      "PCI Compliance",
      "Data Encryption",
      "Fraud Prevention",
      "Risk Management",
      "Audit Trails",
      "Compliance Reporting",
    ],
  };
  type RightContentKey = keyof typeof rightContent;
  const [selectedItem, setSelectedItem] = useState<RightContentKey>("Overview");

  const leftNavItems = [
    { title: "Overview", icon: "Capa_1 (7).svg" },
    { title: "Accounts", icon: "Capa_1 (9).svg" },
    { title: "Card Issuing", icon: "Mask group.svg" },
    { title: "Payouts", icon: "Group (5).svg" },
    { title: "Spend Controls", icon: "Group (6).svg" },
    { title: "Data & Insights", icon: "Frame.svg" },
    { title: "Security Compliance", icon: "Capa_1 (11).svg" },
  ];

  if (mobile) {
    return (
      <div className="space-y-2">
        {leftNavItems.map((item) => (
          <Link
            key={item.title}
            href={`/product/${item.title.toLowerCase().replace(" ", "-")}`}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-all duration-200"
          >
            <div className="font-medium">{item.title}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex min-h-[400px]">
      {/* Left Navigation */}
      <div className="w-48 border-r border-gray-700 pr-4">
        <div className="space-y-1">
          {leftNavItems.map((item) => (
            <button
              key={item.title}
              onMouseEnter={() =>
                setSelectedItem(item.title as RightContentKey)
              }
              className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 ${
                selectedItem === item.title
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <div className="w-5 h-5 mr-3 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="font-medium text-sm">{item.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 pl-6">
        {selectedItem && rightContent[selectedItem] && (
          <div className="space-y-2">
            {rightContent[selectedItem].map((contentItem) => (
              <Link
                key={contentItem}
                href={`/product/${selectedItem
                  .toLowerCase()
                  .replace(" ", "-")}/${contentItem
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="block p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-all duration-200"
              >
                <div className="text-sm font-medium">{contentItem}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Replace the DevelopersDropdown component with this updated version for Solutions
const DevelopersDropdown = ({ mobile }: { mobile: boolean }) => {
  const items = [
    {
      title: "Consumer Payouts",
      icon: "Capa_1 (12).svg",
    },
    {
      title: "Paying Businesses",
      icon: "g2409.svg",
    },
    {
      title: "Marketplace Payments",
      icon: "g4143.svg",
    },
    {
      title: "Multi-Currency Payments",
      icon: "Capa_1 (13).svg",
    },
  ];

  if (mobile) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/solutions/${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-700 hover:bg-black rounded-md transition-all duration-200"
          >
            <div className="font-medium">{item.title}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/solutions/${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="group flex items-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            <div className="w-6 h-6 mr-4 flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white group-hover:text-white transition-colors duration-200">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

type CompanyDropdownKey =
  | "About Us"
  | "Careers"
  | "News & Media"
  | "Partnerships"
  | "Contact Us";

const CompanyDropdown = ({ mobile }: { mobile: boolean }) => {
  const [selectedItem, setSelectedItem] = useState<CompanyDropdownKey | null>(
    "About Us"
  );

  const leftNavItems = [
    {
      title: "About Us",
      icon: "g1746.svg",
      description: "Learn about our mission and values",
    },
    {
      title: "Careers",
      icon: "Capa_1 (14).svg",
      description: "Join our growing team",
    },
    {
      title: "News & Media",
      icon: "Capa_1 (15).svg",
      description: "Latest news and press releases",
    },
    {
      title: "Partnerships",
      icon: "g4305.svg",
      description: "Strategic partnerships and integrations",
    },
    {
      title: "Contact Us",
      icon: "Capa_1 (16).svg",
      description: "Get in touch with our team",
    },
  ];

  const rightContent: Record<CompanyDropdownKey, string[]> = {
    "About Us": [
      "Leadership Team",
      "Company History",
      "Mission & Values",
      "Board of Directors",
      "Corporate Governance",
      "Diversity & Inclusion",
    ],
    Careers: [
      "Open Positions",
      "Life at Company",
      "Benefits & Perks",
      "Internship Program",
      "Employee Stories",
      "Application Process",
    ],
    "News & Media": [
      "Press Releases",
      "Media Kit",
      "Brand Guidelines",
      "Executive Bios",
      "Company Timeline",
      "Awards & Recognition",
    ],
    Partnerships: [
      "Technology Partners",
      "Integration Partners",
      "Channel Partners",
      "Become a Partner",
      "Partner Portal",
      "Partner Resources",
    ],
    "Contact Us": [
      "Sales Inquiries",
      "Customer Support",
      "Media Inquiries",
      "Investor Relations",
      "General Contact",
      "Office Locations",
    ],
  };

  if (mobile) {
    return (
      <div className="space-y-2">
        {leftNavItems.map((item) => (
          <Link
            key={item.title}
            href={`/company/${item.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-700 hover:bg-black rounded-md transition-all duration-200"
          >
            <div className="font-medium">{item.title}</div>
            <div className="text-xs text-gray-500 mt-1">{item.description}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex min-h-[400px]">
      {/* Left Navigation */}
      <div className="w-48 border-r border-gray-700 pr-4">
        <div className="space-y-1">
          {leftNavItems.map((item) => (
            <button
              key={item.title}
              onMouseEnter={() =>
                setSelectedItem(item.title as CompanyDropdownKey)
              }
              className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 ${
                selectedItem === item.title
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <div className="w-5 h-5 mr-3 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <div className="font-medium text-sm">{item.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 pl-6">
        {selectedItem && rightContent[selectedItem] && (
          <motion.div
            key={selectedItem}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="space-y-2"
          >
            {rightContent[selectedItem].map((contentItem: string) => (
              <Link
                key={contentItem}
                href={`/company/${selectedItem
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}/${contentItem
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="block p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-all duration-200"
              >
                <div className="text-sm font-medium">{contentItem}</div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;