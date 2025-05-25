import React from 'react';

const BelowBento: React.FC = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen text-[0px] relative overflow-hidden mt-12 md:mt-[120px]">
      <h1 className="text-3xl md:text-5xl font-bold text-[#f8fafc] tracking-tight md:tracking-[-1.44px] text-center md:text-left mb-8 md:mb-16 md:ml-[286.5px]">
        Scalable. Secure. Compliant. Smarter.
      </h1>
      <div className="w-full relative z-[17] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full max-w-[600px] aspect-[600/486] relative">
          <img 
            src="/newPhone.svg" 
            alt="Mobile phone illustration" 
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full max-w-[650px]">
          <div className="flex flex-col gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-[#38294f] hover:border hover:border-solid hover:border-[#944bf2] hover:shadow-[0_0_164px_0_#6f01fe]">
            <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-25/WeLL7cjJUQ.png)] bg-cover bg-no-repeat" />
            <span className="text-[1.2rem] font-medium leading-snug text-[#b7b7b7] hover:text-white transition-colors duration-300">
            <span className='font-bold'>Full Stack</span> in One Box, eliminate the need for multiple providers with an integrated solution.
            </span>
          </div>
          
          <div className="flex flex-col gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-[#38294f] hover:border hover:border-solid hover:border-[#944bf2] hover:shadow-[0_0_164px_0_#6f01fe]">
            <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-25/KHxHpSS7Fm.png)] bg-cover bg-no-repeat" />
            <span className="text-[1.2rem] font-medium leading-snug text-[#b7b7b7] hover:text-white transition-colors duration-300">
            <span className='font-bold'>Rapid Time</span> to Market, Avoid the months-long process of building card programmes.
            </span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-[#38294f] hover:border hover:border-solid hover:border-[#944bf2] hover:shadow-[0_0_164px_0_#6f01fe]">
            <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-25/Kui55G9emc.png)] bg-cover bg-no-repeat" />
            <span className="text-[1.2rem] font-medium leading-snug text-[#b7b7b7] hover:text-white transition-colors duration-300">
            <span className='font-bold'>Market Made</span> Made Easy, Quickly test and refine your offerings in the market.
            </span>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-[#38294f] hover:border hover:border-solid hover:border-[#944bf2] hover:shadow-[0_0_164px_0_#6f01fe]">
            <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-25/gjYB0oJ2tT.png)] bg-cover bg-no-repeat" />
            <span className="text-[1.2rem] font-medium leading-snug text-[#b7b7b7] hover:text-white transition-colors duration-300">
           <span className='font-bold'>Low Investment</span> , minimize upfront costs with an all-inclusive platform.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowBento;
