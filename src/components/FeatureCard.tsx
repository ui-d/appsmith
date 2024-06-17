import { FC, HTMLAttributes } from "react";
import { Avatar, Heading, Text } from "@/components";

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
};

export const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => (
  <div className="flex flex-col gap-4 rounded border border-lightGray p-4">
    <Avatar alt="Avatar" />
    <Heading level={3} className="text-2xl font-bold text-textDarkGray">
      {title}
    </Heading>
    <Text>{description}</Text>
  </div>
);
