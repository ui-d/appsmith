import { FC, HTMLAttributes } from "react";

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
};

export const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => (
  <div className="rounded border p-4 shadow-md transition-shadow duration-200 hover:shadow-lg">
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
