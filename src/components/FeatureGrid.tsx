"use client";

import { FC, useCallback, useState } from "react";
import { Container, FeatureCard, Section } from "@/components";

type FeatureGridProps = {
  features: { title: string; description: string }[];
};

export const FeatureGrid: FC<FeatureGridProps> = ({ features }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <Section>
      <Container>
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
              isHovered={isHovered}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
