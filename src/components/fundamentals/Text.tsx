import type { FC, HTMLAttributes, ReactNode } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

const Text: FC<TextProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default Text;
