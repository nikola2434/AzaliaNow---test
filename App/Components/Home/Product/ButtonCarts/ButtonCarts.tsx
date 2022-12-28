import { FC } from "react";
import { IButtonCartsProps } from "./ButtonCarts.interface";
import style from "./ButtonCarts.module.scss";
import cn from "classnames";

const ButtonCarts: FC<IButtonCartsProps> = ({
  addingToCart,
  decrement,
  increment,
  count,
  isCart,
}) => {
  return (
    <div className={style.button_carts}>
      <button
        className={isCart ? style.animate : ""}
        onClick={() => addingToCart()}
      >
        {isCart ? "В корзине" : "В корзину "}
      </button>
      <div className={style.counter}>
        <button onClick={() => decrement()}>
          <div className={style.minus} />
        </button>
        <span>{count}</span>
        <button onClick={() => increment()}>
          <div className={style.plus} />
        </button>
      </div>
    </div>
  );
};

export default ButtonCarts;
