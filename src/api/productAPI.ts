import axios from "axios";

const api = axios.create({
  baseURL: "https://shoppingcart-node-server.herokuapp.com/api/products",
});

export const getProducts = async () => {
  const { data } = await api.get<IProduct[]>("/");
  return data;
};
