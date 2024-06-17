import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

// change interface to type
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
};

export const Heading: FC<HeadingProps> = ({ level, className, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={cn("font-heading", className)}>{children}</Tag>;
};
