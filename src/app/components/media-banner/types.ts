import { ImageMetadata } from "@/app/hooks/types";

export type MediaBannerProps = {
  orientation?: "left" | "right";
  children: React.ReactNode;
};

export type BannerContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export type BannerImageProps = ImageMetadata;

export type MediaBannerComposition = {
  Image: React.FC<BannerImageProps>;
  Content: React.FC<BannerContentProps>;
};
