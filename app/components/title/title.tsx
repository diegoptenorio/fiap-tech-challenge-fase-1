const classes = {
  h1: "text-[25px] font-bold",
  h2: "text-[#80878D]",
  h3: "text-[20px] font-bold",
};

import type { TitleProps } from "./title-props";

export const Title = ({ children, className = "", type }: TitleProps) => {
    const Component = type as TitleProps["type"];
    return <Component className={`${classes[type]} ${className}`}>{children}</Component>;
}
