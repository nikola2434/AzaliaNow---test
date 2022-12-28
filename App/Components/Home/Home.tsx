import { FC } from "react";
import { IHomeProps } from "../../../pages";
import Sidebar from "./SIdebar/Sidebar";
import style from "./Home.module.scss";
import Product from "./Product/Product";

export const Home: FC<IHomeProps> = ({ products }) => {
  return (
    <div className={style.home}>
      <Sidebar />
      {products.length ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div>Продуктов нет!</div>
      )}
    </div>
  );
};
