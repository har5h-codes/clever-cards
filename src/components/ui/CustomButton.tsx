import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CustomButtonProps = React.ComponentProps<typeof Button> & {
  size?: "sm" | "lg";
};

const sizeClasses: Record<NonNullable<CustomButtonProps["size"]>, string> = {
  sm: "px-5 py-2 text-base rounded-full",
  lg: "px-7 py-3 text-base rounded-full",
};

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ size = "sm", className, style, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn(
        size && sizeClasses[size] ? sizeClasses[size] : sizeClasses.sm,
        // Gradient background and glow on hover
        "bg-gradient-to-b from-[#8f31ff] to-[#7b2ff7] text-white shadow-md h-full",
        "transition-all duration-300",
        // Add hover styles for 3D pressed effect
        "hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]",
        className
      )}
      style={style}
      {...props}
    />
  )
);

CustomButton.displayName = "CustomButton";