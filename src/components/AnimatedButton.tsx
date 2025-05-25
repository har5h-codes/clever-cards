import React from "react";
import clsx from "clsx";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "relative overflow-hidden border-2 border-[#6F01FE] text-white px-7 py-3 rounded-full bg-transparent transition-all duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)]",
        roboto.className,
        className
      )}
    >
      {children}
      <span className="absolute inset-0 -z-10 flex h-full w-full pointer-events-none justify-center">
        <span className="animated-ball" />
      </span>
    </button>
  );
};