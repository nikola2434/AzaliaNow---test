import { FC } from "react";
import style from "./Discount.module.scss";

export const Discount: FC<{ discount: string }> = ({ discount }) => {
  return (
    <div className={style.discount}>
      <div className={style.value}>{discount}%</div>
    </div>
  );
};
