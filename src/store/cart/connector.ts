import { connect, ConnectedProps } from "react-redux";
import {
  addToCartRequest,
  removeFromCartRequest,
  clearCartRequest,
} from "./actions";
import { createOrderRequest, clearOrderRequest } from "../order/actions";

interface StateProps {
  cart: CartState;
  order: OrdersState;
}
const mapState = (state: StateProps) => ({
  cartItems: state.cart.cartItems,
  order: state.order.order,
});

const mapDispatch = {
  addToCartRequest,
  removeFromCartRequest,
  clearCartRequest,
  createOrderRequest,
  clearOrderRequest,
};

export const cartConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof cartConnector>;
