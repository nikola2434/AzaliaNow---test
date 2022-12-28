import { FC, useState } from "react";
import { IProduct } from "../../../../config/Types";
import { RubleModel } from "../../../../models/RubleModel";
import ButtonCarts from "./ButtonCarts/ButtonCarts";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import DescriptionProduct from "./DescriptionProduct/DescriptionProduct";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import ImageProduct from "./ImageProduct/ImageProduct";
import PriceProduct from "./PriceProduct/PriceProduct";
import style from "./Product.module.scss";
import RatingProduct from "./RatingProduct/RatingProduct";
import { useAddingToCarts } from "./useAddingToCarts";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
  const [isFavorites, setIsFavorites] = useState(false);
  const { image, category, id, price, rating, title } = product;
  const { addingToCarts, count, decrement, increment, isCarts } =
    useAddingToCarts(id);
  return (
    <div className={style.product}>
      <ImageProduct image={image} isHit={rating.count > 300} />
      <div className={style.rating}>
        <CategoryProduct category={category} />
        <RatingProduct id={id} rating={rating} />
      </div>
      <DescriptionProduct description={title} />
      <PriceProduct price={price} currency={new RubleModel()} />
      <ButtonCarts
        addingToCart={addingToCarts}
        count={count}
        decrement={decrement}
        increment={increment}
        isCart={isCarts}
      />
      <FavoriteButton
        isFavorites={isFavorites}
        toggleFavorites={() => setIsFavorites((prev) => !prev)}
      />
    </div>
  );
};

export default Product;
