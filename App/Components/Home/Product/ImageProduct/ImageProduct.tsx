import { FC } from "react";
import style from "./ImageProduct.module.scss";
import cn from "classnames";
import Image from "next/image";
import Hit from "../../../../UI/Hit/Hit";

interface ImageProductProps {
  isHit: boolean;
  image: string;
}

const ImageProduct: FC<ImageProductProps> = ({ image, isHit }) => {
  return (
    <div className={style.image}>
      {isHit && (
        <div className={style.hit}>
          <Hit />
        </div>
      )}
      <Image
        alt="product"
        src={image}
        priority
        draggable={false}
        width={220}
        height={220}
        className={style.img}
      />
    </div>
  );
};

export default ImageProduct;
