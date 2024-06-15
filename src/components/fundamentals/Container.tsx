import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={cn("mx-auto max-w-7xl px-4")}>{children}</div>
);
