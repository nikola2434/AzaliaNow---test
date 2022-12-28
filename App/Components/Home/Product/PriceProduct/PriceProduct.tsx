import { FC } from "react";
import { ICurrency } from "../../../../../models/model.interface";
import style from "./PriceProduct.module.scss";

interface IPriceProductProps {
  currency: ICurrency;
  price: number;
}

const PriceProduct: FC<IPriceProductProps> = ({ currency, price }) => {
  return (
    <div className={style.price}>
      <div>
        {Math.ceil(currency.dollarsToRubles(price)) + " " + currency.unicode}
      </div>
      <span>/шт</span>
    </div>
  );
};

export default PriceProduct;
