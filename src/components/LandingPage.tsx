import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";
import { CustomButton } from "./ui/CustomButton";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#15111B] flex items-end justify-center relative">
      <div className="w-[95%] h-[90%] bg-[#15111B] flex flex-col justify-between overflow-hidden rounded-[2rem] relative">
        {/* Gradient overlays */}
        <div
          className="absolute -top-[20%] -left-[20%] w-[55%] h-[70%]"
          style={{
            filter: "blur(100px)",
            background:
              "radial-gradient(circle at 50% 50%, #883FE6 0%, #6F01FE 80%, #15111B 60%, transparent 80%)",
            opacity: 0.7,
          }}
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[80%]"
          style={{
            filter: "blur(100px)",
            background:
              "radial-gradient(circle at 50% 50%, #883FE6 0%, #6F01FE 80%, #15111B 60%, transparent 80%)",
            opacity: 0.7,
          }}
        />

        {/* Top content section */}
        <div className="space-y-10 pt-16 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-white text-5xl font-semibold">
              Ready to Make Payouts
            </h1>
            <h2 className="text-white text-4xl font-semibold">
              Instant, Global and Effortless?
            </h2>
            <p className="text-white/80 text-lg max-w-4xl mx-auto mt-6">
              Whether you&apos;re paying individuals or making business payments, the
              CleverCards Platform gives you everything you need to issue,
              manage, and control funds — instantly, securely, and at scale.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="youremailaddress@business.com"
              className="px-6 py-3 rounded-full bg-white/10 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-purple-500 w-[300px]"
            />
            <CustomButton>Contact Sales</CustomButton>
          </div>
        </div>

        {/* Image section */}
        <div className="relative w-full h-[60%] mt-8">
          <Image
            src="/laptop.svg"
            alt="laptop"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
