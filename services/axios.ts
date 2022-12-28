import axios from "axios";

export const classicAxios = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: { "Accept-Encoding": "gzip,deflate,compress" },
});
