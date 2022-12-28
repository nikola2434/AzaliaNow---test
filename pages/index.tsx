import { GetStaticProps, NextPage } from "next";
import { Home } from "../App/Components/Home/Home";
import { IProduct } from "../config/Types";
import { productApi } from "../services/productApi";

export interface IHomeProps {
  products: IProduct[];
}

const HomePage: NextPage<IHomeProps> = ({ products }) => {
  return <Home products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await productApi.getAllProducts();
    return {
      props: { products } as IHomeProps,
    };
  } catch (error) {
    return {
      props: { products: [] } as IHomeProps,
    };
  }
};

export default HomePage;
