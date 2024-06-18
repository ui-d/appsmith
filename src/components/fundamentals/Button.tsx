import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center text-xl justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:text-brandLight text-xl",
        primary: "bg-white text-brand hover:text-brandLight text-xl",
        outline:
          "border border-white bg-transparent hover:bg-brandLight text-white text-xl",
        link: "text-white underline-offset-4 inline-block hover:underline text-xl",
      },
      size: {
        default: "w-full md:w-auto h-10 px-4 py-2",
        sm: "w-full md:w-auto h-9 rounded-md px-3",
        lg: "w-full md:w-auto rounded-md px-6 py-4",
        link: "w-full md:w-auto p-0",
        icon: "w-full md:w-auto h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
