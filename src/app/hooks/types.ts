export interface ImageMetadata {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Button {
  text: string;
  href: string;
}
export type MediaBannerData = {
  img?: ImageMetadata;
  leadingText?: string;
  heading?: string;
  orientation?: "left" | "right";
  button?: Button;
};

export interface MockData {
  mediaBanner: MediaBannerData;
  itemRow: {
    heading?: string;
    items?: {
      img?: ImageMetadata;
      heading?: string;
      body?: string;
    }[];
    button?: Button;
  };
}
