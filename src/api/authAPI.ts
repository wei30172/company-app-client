import axios from "axios";

export const api = axios.create({
  baseURL: "https://posts-node-server.herokuapp.com",
});
