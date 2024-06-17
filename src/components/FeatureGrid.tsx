import { FC } from "react";
import { Container, FeatureCard, Section } from "@/components";

type FeatureGridProps = {
  features: { title: string; description: string }[];
};

export const FeatureGrid: FC<FeatureGridProps> = ({ features }) => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
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
