import { FC } from "react";
import style from "./FavoriteButton.module.scss";
import { ReactComponent as LeftSide } from "../../../../../public/Ellipse 8.svg";
import { ReactComponent as RightSide } from "../../../../../public/Ellipse 11.svg";
import { ReactComponent as MiddleSide } from "../../../../../public/Ellipse 10.svg";
import cn from "classnames";

interface IFavoriteButtonProps {
  isFavorites: boolean;
  toggleFavorites: () => void;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({
  isFavorites,
  toggleFavorites,
}) => {
  return (
    <button
      className={cn(style.favorites, { [style.active]: isFavorites })}
      onClick={() => toggleFavorites()}
    >
      <LeftSide
        className={cn(style.left, { [style.active_left]: isFavorites })}
      />
      <MiddleSide
        className={cn(style.middle, { [style.active_middle]: isFavorites })}
      />
      <RightSide
        className={cn(style.right, { [style.active_right]: isFavorites })}
      />
    </button>
  );
};

export default FavoriteButton;
