import { FC } from "react";

import { FeatureCard } from "@/components/FeatureCard";
import { Container } from "@/components/fundamentals/Container";
import { Section } from "@/components/fundamentals/Section";

type FeatureGridProps = {
  features: { title: string; description: string }[];
};

export const FeatureGrid: FC<FeatureGridProps> = ({ features }) => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Container>
  </Section>
);
