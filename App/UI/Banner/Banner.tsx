import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";
import style from "./Banner.module.scss";
import cn from "classnames";
import ButtonBanner from "./ButtonBanner/ButtonBanner";

export type TypeBanner = "light" | "dark";

export interface IBannerProps {
  type: TypeBanner;
  children: ReactNode;
  img: StaticImageData;
  link: string;
}

export const Banner: FC<IBannerProps> = ({ children, img, link, type }) => {
  const isLight = type === "light";
  return (
    <div className={style.banner}>
      <Image
        src={img}
        alt=""
        draggable={false}
        priority
        className={cn({
          [style.banner_img_light]: isLight,
          [style.banner_img_dark]: !isLight,
        })}
      />

      <div
        className={cn(style.content_banner, {
          [style.content_banner_light]: isLight,
          [style.content_banner_dark]: !isLight,
        })}
      >
        {children}
        <ButtonBanner typeButton={isLight ? "light" : "dark"} />
      </div>
    </div>
  );
};
