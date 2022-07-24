import axios from "axios";

const ProductsApi = axios.create({
  baseURL: "https://shoppingcart-node-server.herokuapp.com/api/products",
});

export default ProductsApi;
