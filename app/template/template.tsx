import { ReactNode } from "react";
import type { TemplateType } from "./template.props";

const BaseTemplate = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>;
};

export const Template = BaseTemplate as TemplateType;
