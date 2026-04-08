import { ReactNode } from "react";
import { style } from "./header.style";

export const Header = ({ children }: { children: ReactNode }) =>
    <div className={style.header}>
        <div className={style.content}>
            {children}
        </div>
    </div>;
