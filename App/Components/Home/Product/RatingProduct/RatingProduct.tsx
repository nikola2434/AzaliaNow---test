import { FC } from "react";
import { IRating } from "../../../../../config/Types";
import style from "./RatingProduct.module.scss";
import { ReactComponent as Star } from "../../../../../public/Vector.svg";
import ReviewsProduct from "./ReviewsProduct/ReviewsProduct";

interface IRatingProductProps {
  id: number;
  rating: IRating;
}

const RatingProduct: FC<IRatingProductProps> = ({ id, rating }) => {
  const roundedRate = Math.round(rating.rate);
  return (
    <div className={style.rating}>
      <div className={style.list_star}>
        {[...Array(5)].map((_, index) => {
          if (index < roundedRate) {
            return <Star key={index} className={style.star_orange} />;
          } else return <Star key={index} className={style.star_grey} />;
        })}
      </div>
      <ReviewsProduct countReviews={rating.count} id={id} />
    </div>
  );
};

export default RatingProduct;
