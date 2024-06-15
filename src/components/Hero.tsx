import { FC } from "react";

import { Heading } from "@/components/fundamentals/Heading";

type HeroProps = {
  title: string;
  subtitle: string;
};

export const Hero: FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <header className="my-8 text-center">
      <Heading classNames="text-4xl font-bold" level={1}>
        {title}
      </Heading>
      <p className="text-xl">{subtitle}</p>
    </header>
  );
};
