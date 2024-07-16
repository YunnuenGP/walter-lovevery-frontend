export interface Image {
  src: string;
  alt?: string;
  caption?: string;
}

export interface Button {
  text: string;
  href: string;
}

export interface MockData {
  mediaBanner: {
    img?: Image;
    leadingText?: string;
    heading?: string;
    orientation?: "left" | "right";
    button?: Button;
  };
  itemRow: {
    heading?: string;
    items?: {
      img?: Image;
      heading?: string;
      body?: string;
    }[];
    button?: Button;
  };
}
