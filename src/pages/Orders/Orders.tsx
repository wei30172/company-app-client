import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PropsFromRedux, orderConnector } from "../../store/order/connector";
import formatCurrency from "../../utils/formatCurrency";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Orders.scss";

const Orders = ({
  orders,
  isLoading,
  error,
  fetchOrdersRequest,
}: PropsFromRedux) => {
  useEffect(() => {
    fetchOrdersRequest();
  }, [fetchOrdersRequest]);

  return isLoading ? (
    <div className="page-flex">
      <HourglassEmptyIcon />
    </div>
  ) : error ? (
    <div className="page-flex">
      <ErrorOutlineIcon />
    </div>
  ) : (
    orders && (
      <div className="orders">
        <div>
          <h1>Order History</h1>
          {orders.length < 1 ? (
            <div className="orders_empty">
              <ShoppingCartIcon />
              <h3>Your order histor is empty</h3>
              <Link to={"/products"}>
                <button type="button" className="btn">
                  {`Let's Shopping!`}
                </button>
              </Link>
            </div>
          ) : (
            <div className="orders_list">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td>
                        <p>{order._id}</p>
                      </td>
                      <td>
                        <p>{order.createdAt?.slice(0, 10)}</p>
                      </td>
                      <td>
                        <p>${formatCurrency(order.total)}</p>
                      </td>
                      <td>
                        <Link to={`/orders/${order._id}`}>
                          <button className="btn">Details</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    )
  );
};
export default orderConnector(Orders);
