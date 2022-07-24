import axios from "axios";

export const HttpClient = axios.create({
  baseURL: "https://shoppingcart-node-server.herokuapp.com",
});