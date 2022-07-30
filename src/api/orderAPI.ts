import axios from "axios";

const api = axios.create({
  baseURL: "https://shoppingcart-node-server.herokuapp.com/api/orders",
});

export const getOrders = async () => {
  const { data } = await api.get<IOrder[]>("/");
  return data;
};

export const addOrder = async (orderPayloadValues: IOrder) => {
  const { data } = await api.post("/", JSON.stringify(orderPayloadValues), {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
