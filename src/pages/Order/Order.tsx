import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PropsFromRedux, orderConnector } from "../../store/order/connector";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "./Order.scss";

const Orders = ({
  orders,
  isLoading,
  error,
  fetchOrdersRequest,
}: PropsFromRedux) => {
  const params = useParams();
  const { orderId } = params;

  const [order, setOrder] = useState<IOrder>({
    _id: "",
    name: "",
    email: "",
    address: "",
    cartItems: [],
    total: 0,
  });

  useEffect(() => {
    fetchOrdersRequest();
  }, [fetchOrdersRequest]);

  useEffect(() => {
    const findedOrder = orders.find((order) => order._id === orderId);
    if (findedOrder) setOrder(findedOrder);
  }, [orders, orderId]);

  const { _id, address, cartItems, total } = order;

  return isLoading ? (
    <div className="page_flex">
      <HourglassEmptyIcon />
    </div>
  ) : error ? (
    <div className="page_flex">
      <ErrorOutlineIcon />
    </div>
  ) : (
    orders && (
      <div className="order">
        <div>
          {!_id ? (
            <div className="order_empty">
              <h3>Cannot find the order: {orderId}.</h3>
              <Link to={"/"}>
                <button type="button" className="btn">
                  {`Back to Home`}
                </button>
              </Link>
            </div>
          ) : (
            <div className="order_list">
              <div>
                <h1>Order: {orderId}</h1>

                <div className="order_list_info">
                  <h2>Shipping Address</h2>
                  {address}
                </div>

                <div className="order_list_info">
                  <h2>Order Items</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item._id}>
                          <td>
                            <img
                              src={require(`../../assets/products${item.image}`)}
                              alt={item.title}
                              className="placeorder-item-image"
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.count}</td>
                          <td>${item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="order_list_info">
                <h2>Order Summary</h2>
                <div>
                  <div className="order_list_info_confirmation">
                    <p>Items:</p>
                    <p>${total}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};
export default orderConnector(Orders);
