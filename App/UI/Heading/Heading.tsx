import { FC, ReactNode } from "react";
import style from "./Heading.module.scss";

export const Heading: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={style.heading}>{children}</div>;
};
