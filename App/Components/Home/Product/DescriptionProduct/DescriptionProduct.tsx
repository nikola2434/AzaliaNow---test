import { FC } from "react";
import style from "./DescriptionProduct.module.scss";

const DescriptionProduct: FC<{ description: string }> = ({ description }) => {
  return <div className={style.description}>{description}</div>;
};

export default DescriptionProduct;
