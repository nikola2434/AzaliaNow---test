import Link from "next/link";
import { FC } from "react";
import { getNoun } from "../../../../../../config/getNoun";
import { getUrlProduct } from "../../../../../../config/getUrl";
import style from "./ReviewsProduct.module.scss";

interface IReviewsProps {
  countReviews: number;
  id: number;
}

const ReviewsProduct: FC<IReviewsProps> = ({ countReviews, id }) => {
  return (
    <Link href={getUrlProduct(id)} className={style.reviews}>
      <div>
        {countReviews +
          " " +
          getNoun(countReviews, "отзыв", "отзыва", "отзывов")}
      </div>
    </Link>
  );
};

export default ReviewsProduct;
