import axios from "axios";

export const HttpClient = axios.create({
  baseURL: "https://posts-node-server.herokuapp.com",
});