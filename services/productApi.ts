import axios from "axios";
import { IProduct } from "../config/Types";
import { classicAxios } from "./axios";

export const productApi = {
  getAllProducts(limit?: number) {
    return classicAxios
      .get<IProduct[]>("products", {
        params: {
          limit,
        },
      })
      .then((response) => response.data);
  },

  getProductById(id: number) {
    return classicAxios
      .get<IProduct>(`products/${id}`)
      .then((response) => response.data);
  },
};
