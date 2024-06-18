"use client";

import { CSSProperties, FC, HTMLAttributes, useRef } from "react";
import { Avatar, Heading, Text } from "@/components";

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  mouseX: number;
  mouseY: number;
  isHovered: boolean;
};

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  mouseX,
  mouseY,
  isHovered,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  let spotlightStyle: CSSProperties = {};
  if (cardRef.current) {
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = mouseX - left - width / 2;
    const y = mouseY - top - height / 2;
    spotlightStyle = {
      "--mouse-x": `${x - 100}px`,
      "--mouse-y": `${y - 100}px`,
    } as CSSProperties;
  }

  return (
    <div
      ref={cardRef}
      className="flex h-full overflow-hidden rounded bg-lightGray"
      style={{
        ...spotlightStyle,
        position: "relative",
      }}
    >
      <div className="feature-card relative z-10 m-0.5 flex w-full flex-col gap-4 rounded bg-white p-4">
        <Avatar alt="Avatar" />
        <Heading level={3} className="text-2xl font-bold text-textDarkGray">
          {title}
        </Heading>
        <Text>{description}</Text>
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[200px] w-[200px] transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, #FF6D2D, transparent 70%)",
          transform: `translate(calc(var(--mouse-x)), calc(var(--mouse-y)))`,
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
          borderRadius: "50%",
          opacity: isHovered ? 1 : 0,
        }}
      ></div>
    </div>
  );
};
