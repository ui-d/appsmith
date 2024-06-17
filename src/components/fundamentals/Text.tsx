import type { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  className?: string;
};

export const Text: FC<TextProps> = ({ children, className }) => {
  return (
    <p className={cn("font-body, text-textGray", className)}>{children}</p>
  );
};
