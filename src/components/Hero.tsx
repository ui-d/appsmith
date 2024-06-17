import { FC } from "react";
import { Heading, Section, Text } from "@/components";

type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero: FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <Section>
      <header className="mx-auto my-8 flex max-w-3xl flex-col gap-5 text-center">
        <Heading level={1} className="text-balance text-6xl font-extrabold">
          {title}
        </Heading>
        <Text className="text-2xl text-secondary">{subtitle}</Text>
      </header>
    </Section>
  );
};
