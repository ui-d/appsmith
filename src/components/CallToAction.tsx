import { FC, HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Heading, Section } from "@/components";

type CallToActionProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  buttons: {
    text: string;
    link: string;
    variant: "default" | "primary" | "outline" | "link";
    size?: "default" | "sm" | "lg" | "icon";
  }[];
};

export const CallToAction: FC<CallToActionProps> = ({ text, buttons }) => (
  <Section>
    <Container>
      <div className="bg-bgGray bg-cta-texture flex items-center rounded-xl bg-cover">
        <div className="flex w-full flex-col gap-12 p-5 md:pb-12 md:pl-12 md:pr-0 md:pt-12 lg:w-7/12">
          <Heading
            level={2}
            className="text-4xl font-black text-white lg:max-w-xl"
          >
            {text}
          </Heading>
          <div className="flex flex-col flex-wrap items-center gap-4 md:flex-row">
            {buttons.map((button, index) => (
              <Link className="w-full md:w-auto" key={index} href={button.link}>
                <Button variant={button.variant} size={button.size}>
                  {button.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden w-5/12 self-end lg:flex">
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
