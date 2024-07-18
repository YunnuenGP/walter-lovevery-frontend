import type { Meta, StoryObj } from "@storybook/react";
import { MediaBanner } from "./media-banner";

const meta = {
  title: "Media Banner",
  component: MediaBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    mediaBannerData: {
      img: {
        src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
        alt: "Happy baby playing with a toy",
        caption: "Happy baby playing with a toy",
      },
      leadingText: "For all their firsts",
      heading: "Joyful play at every stage, ages 0-4",
      orientation: "right",
      button: {
        text: "Explore the Play Kits",
        href: "https://lovevery.com/products/the-play-kits/",
      },
    },
    position: "right",
  },
} satisfies Meta<typeof MediaBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
