import { FC } from "react";
import { Container, Heading, Section, Text } from "@/components";

type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero: FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <Section>
      <Container>
        <header className="md:pt-30 mx-auto my-8 flex max-w-3xl flex-col gap-5 pt-10 text-center tracking-tighter lg:pt-52">
          <Heading
            highlight={2}
            level={1}
            className="text-balance text-5xl font-extrabold md:text-6xl"
          >
            {title}
          </Heading>
          <Text className="text-2xl text-secondary">{subtitle}</Text>
        </header>
      </Container>
    </Section>
  );
};
