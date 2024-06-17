import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={cn("container")}>{children}</div>
);
