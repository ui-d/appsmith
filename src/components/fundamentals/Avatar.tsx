import { FC } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar: FC<AvatarProps> = ({ src, alt }) => (
  <AvatarPrimitive.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle">
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
    <AvatarPrimitive.Fallback className="h-full w-full bg-gray-200" />
  </AvatarPrimitive.Root>
);

export default Avatar;
