import Image from 'next/image';
import { AnimatedButton } from './AnimatedButton';
import { CustomButton } from './ui/CustomButton';

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#15111B] flex items-end justify-center relative">
      <div className="w-[95%] h-[90%] bg-[#15111B] flex flex-col justify-between overflow-hidden rounded-[2rem] relative">
        {/* Gradient overlays */}
        <div className="absolute -top-[20%] -left-[20%] w-[55%] h-[70%]" style={{
          filter: 'blur(100px)',
          background: 'radial-gradient(circle at 50% 50%, #883FE6 0%, #6F01FE 80%, #15111B 60%, transparent 80%)',
          opacity: 0.7,
        }} />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[80%]" style={{
          filter: 'blur(100px)',
          background: 'radial-gradient(circle at 50% 50%, #883FE6 0%, #6F01FE 80%, #15111B 60%, transparent 80%)',
          opacity: 0.7,
        }} />
        
        {/* Top content section */}
        <div className="space-y-10 pt-16 relative z-10">
          <p className='text-white text-5xl font-semibold text-center'>
            Ready to manage your cards like a pro?
          </p>

          <div className='flex items-center justify-center gap-4'>
            <a href="#" className="text-white hover:text-purple-200 text-lg underline underline-offset-4 transition">
              Talk to our team
            </a>
            <AnimatedButton>Explore Use Cases</AnimatedButton>
          </div>

          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="youremail@example.com"
              className="px-6 py-3 rounded-full bg-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 w-[400px]"
            />
            <CustomButton>Book a Demo</CustomButton>
          </div>
        </div>

        {/* Image section */}
        <div className='relative w-full h-[60%] mt-8'>
          <Image
            src="/laptop.svg"
            alt="laptop"
            fill
            priority
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;