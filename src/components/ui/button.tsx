import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost", size?: "default" | "lg" }>(
  ({ className, variant = "default", size, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all",
          "disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-vibe-purple text-white hover:bg-vibe-pink shadow-lg hover:shadow-purple-500/50",
          variant === "outline" && "border-2 border-white/50 hover:border-vibe-purple bg-transparent",
          size === "lg" && "px-8 py-6 text-lg",
          "px-6 py-3",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
