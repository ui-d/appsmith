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
          <div className="relative inline-block w-auto border-brand pl-4 text-brand before:absolute before:left-0 before:block before:h-full before:w-1 before:scale-y-105 before:rounded before:bg-brand before:content-['']">
            {highlightedWords}
            <div className="from-lightBrand absolute bottom-0 left-0 right-0 top-0 -z-10 bg-gradient-to-r to-white"></div>
          </div>
          {` ${remainingWords}`}
        </>
      ) : (
        children
      )}
    </Tag>
  );
};
