import React from 'react';
import Image from 'next/image';
import FasterToMarket1 from '../../../public/FasterToMarket1.svg';
import FasterToMarket2 from '../../../public/FasterToMarket2.svg';
import FasterToMarket3 from '../../../public/FasterToMarket3.svg';
import FasterToMarket4 from '../../../public/FasterToMarket4.svg';


const HeroSection = () => {
  return (
    <div className="text-white">
      {/* Hero Title */}
      <div className="pt-16 pb-8 px-8">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center max-w-7xl mx-auto leading-tight">
          Faster to Market. Smarter at Scale. Globally Ready.
          <br />
          <span className="text-white">Cost Efficient by Design.</span>
        </h1>
      </div>

      {/* Feature Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 px-8 pt-8 xl:flex-nowrap">
        {/* Card 1 - Go Live in Days */}
        <div 
          className="bg-black border border-gray-700 rounded-2xl pt-6 px-6 flex flex-col justify-between"
          style={{ width: '310px', height: '465px' }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Go Live in Days, Not Months
            </h3>
            <p className="text-gray-400 text-[1rem] leading-relaxed">
              Skip the complexity of traditional card programs. Issue digital Mastercards instantly with no physical logistics or banking dependencies.
            </p>
          </div>
          
          <div className="mt-auto">
            <Image 
              src={FasterToMarket1}
              alt="Faster to Market 1"
            />
          </div>
        </div>

        {/* Card 2 - Global Payouts */}
        <div 
          className="bg-black border border-gray-700 rounded-2xl pt-6 px-6 flex flex-col justify-between"
          style={{ width: '310px', height: '465px' }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Global Payouts. <br /> Minimal Lift.
            </h3>
            <p className="text-gray-400 text-[1rem] leading-relaxed">
              Go live in multiple countries with local BINs, real-time FX, and Mastercard acceptance — all through a single platform.
            </p>
          </div>
          
          <div className="mt-auto">
            <Image 
              src={FasterToMarket2}
              alt="Faster to Market 2"
            />
          </div>
        </div>

        {/* Card 3 - Purpose-Built */}
        <div 
          className="bg-black border border-gray-700 rounded-2xl pt-6 px-6 flex flex-col justify-between"
          style={{ width: '310px', height: '465px' }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Purpose-Built for Volume and Velocity
            </h3>
            <p className="text-gray-400 text-[1rem] leading-relaxed">
              Handle thousands of disbursements at once — instantly, securely, and with built-in spend controls for compliance and accountability.
            </p>
          </div>
          
          <div className="mt-auto">
            <Image 
              src={FasterToMarket3}
              alt="Faster to Market 3"
            />
          </div>
        </div>

        {/* Card 4 - Save More */}
        <div 
          className="bg-black border border-gray-700 rounded-2xl pt-6 px-6 flex flex-col justify-between"
          style={{ width: '310px', height: '465px' }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Save More with a Single, Scalable Platform
            </h3>
            <p className="text-gray-400 text-[1rem] leading-relaxed">
              Minimise upfront costs with an all-in-one solution for issuing, wallets, compliance, and controls — no extra vendors or integrations required.
            </p>
          </div>
          
          <div className="mt-auto">
            <Image 
              src={FasterToMarket4}
              alt="Faster to Market 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;