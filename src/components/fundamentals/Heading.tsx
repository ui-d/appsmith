import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

// Update type to include highlight prop
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  highlight?: number;
};

export const Heading: FC<HeadingProps> = ({
  level,
  className,
  children,
  highlight,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Split children into words
  const words = typeof children === "string" ? children.split(" ") : [];
  const highlightedWords = words.slice(0, highlight).join(" ");
  const remainingWords = words.slice(highlight).join(" ");

  return (
    <Tag className={cn("font-heading", className)}>
      {highlight ? (
        <>
          <div className="relative inline-block w-auto border-l-2 border-accent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {highlightedWords}
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-red-100">
              dasf
            </div>
          </div>
          {` ${remainingWords}`}
        </>
      ) : (
        children
      )}
    </Tag>
  );
};
