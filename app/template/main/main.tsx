import { ReactNode } from "react";
import { style } from "./main.style";

export const Main = ({ children }: { children: ReactNode }) =>
    <div className={style.main}>
        {children}
    </div>;
