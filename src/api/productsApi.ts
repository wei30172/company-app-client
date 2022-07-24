import axios from "axios";

const ProductsApi = axios.create({
  baseURL: "https://company-app-server.herokuapp.com/api/products",
});

export default ProductsApi;
