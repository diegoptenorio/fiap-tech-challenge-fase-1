import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Template from "../app/template";
import { Header } from "../app/template/header";

const meta = {
    title: "Template/Template",
    component: Template,
    subcomponents: {
        Header,
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is a Template",
    },
};
