import { FC } from "react";
import { IProduct } from "../../../config/Types";

export interface ISingleProductProps {
  product: IProduct;
}

const SingleProduct: FC<ISingleProductProps> = ({ product }) => {
  return <div>{JSON.stringify(product)}</div>;
};

export default SingleProduct;
