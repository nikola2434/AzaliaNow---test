import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import SingleProduct, {
  ISingleProductProps,
} from "../../App/Components/SingleProduct/SingleProduct";
import { productApi } from "../../services/productApi";

const ProductPage: NextPage<ISingleProductProps> = ({ product }) => {
  return <SingleProduct product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const products = await productApi.getAllProducts();
    const paths = products.map((product) => ({
      params: { id: String(product.id) },
    }));
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const product = await productApi.getProductById(Number(params?.id));
    return {
      props: { product } as ISingleProductProps,
    };
  } catch (error) {
    return {
      props: {} as ISingleProductProps,
    };
  }
};

export default ProductPage;
