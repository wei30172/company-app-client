import axios from "axios";

const ProductsApi = axios.create({
  baseURL: "https://shoppingcart-node-server2.herokuapp.com/api/products",
});

export default ProductsApi;
