import { FC } from "react";
import { IButtonBanner } from "./ButtonBanner.interface";
import style from "./ButtonBanner.module.scss";
import cn from "classnames";

const ButtonBanner: FC<IButtonBanner> = ({ typeButton, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(style.button_banner, {
        [style.button_banner_light]: typeButton === "light",
        [style.button_banner_dark]: typeButton === "dark",
      })}
    >
      Выбрать
    </button>
  );
};

export default ButtonBanner;
