import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import User from "../app/components/user";

const meta = {
    title: "Components/User",
    component: User,
    tags: ["autodocs"],
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
