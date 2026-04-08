import { FC, ReactNode } from "react";

export type TemplateType = FC<{ children: ReactNode }> & {
    Header: FC<{ children: ReactNode }>;
};
