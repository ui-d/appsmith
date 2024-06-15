import { FC, HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => (
  <section>{children}</section>
);
