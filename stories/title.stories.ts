import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Title from "../app/components/title";

const meta = {
    title: "Components/Title",
    component: Title,
    parameters: {
        type: "",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "h1",
        children: "This is a Title",
    },
};
