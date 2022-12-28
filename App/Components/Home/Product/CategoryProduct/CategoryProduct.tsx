import { FC } from "react";
import style from "./CategoryProduct.module.scss";

const CategoryProduct: FC<{ category: string }> = ({ category }) => {
  return <div className={style.category}>{category}</div>;
};

export default CategoryProduct;
