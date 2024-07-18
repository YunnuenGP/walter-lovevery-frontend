import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    className: "bg-neutral-50 px-5 dark:bg-neutral-900 tablet:px-20",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
