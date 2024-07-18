import type { Meta, StoryObj } from "@storybook/react";
import { BannerImage } from "./banner-image";

const meta = {
  title: "Banner Image",
  component: BannerImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
    alt: "Happy baby playing with a toy",
    caption: "Happy baby playing with a toy",
  },
} satisfies Meta<typeof BannerImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
