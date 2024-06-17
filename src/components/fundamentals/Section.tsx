import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
  className?: string;
};

export const Section: FC<SectionProps> = ({ children, className }) => (
  <section className={cn("mb-14", className)}>{children}</section>
);
