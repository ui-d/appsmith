"use client";

import { FC } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt: string;
  className?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt, className }) => (
  <AvatarPrimitive.Root
    className={cn(
      "inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle",
      className
    )}
  >
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
    <AvatarPrimitive.Fallback className="bg-brand-gradient h-full w-full bg-gray-200" />
  </AvatarPrimitive.Root>
);
