import { FC, HTMLAttributes } from "react";

import { Button } from "@/components/fundamentals/Button";

type CallToActionProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  buttons: { text: string; link: string }[];
};

export const CallToAction: FC<CallToActionProps> = ({ text, buttons }) => (
  <div className="text-center">
    <p className="mb-4">{text}</p>
    <div className="flex justify-center gap-4">
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={() => (window.location.href = button.link)}
        >
          {button.text}
        </Button>
      ))}
    </div>
  </div>
);
