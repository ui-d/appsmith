import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import { Button, Container, Heading, Section } from "@/components";

type CallToActionProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  buttons: { text: string; link: string }[];
};

export const CallToAction: FC<CallToActionProps> = ({ text, buttons }) => (
  <Section>
    <Container>
      <div className="bg-bgGray bg-cta-texture flex items-center">
        <div className="pl-10">
          <Heading level={2} className="text-4xl font-black text-white">
            {text}
          </Heading>
          <div className="flex justify-center gap-4">
            {buttons.map((button, index) => (
              <Button key={index}>{button.text}</Button>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/app.webp"
            alt="App screenshot"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </Container>
  </Section>
);
