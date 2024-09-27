import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-custom text-sm font-medium transition-colors border-2 border-black bg-black text-white hover:bg-white hover:border-gray-700 hover:text-black px-4 py-2 group duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        neutral: "bg-transparent p-0 border-none",
        icon: "gap-2 items-center",
        inverted:
          "border-2 border-black bg-white text-black hover:bg-black hover:border-black hover:text-white",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
