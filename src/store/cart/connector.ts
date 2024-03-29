import { connect, ConnectedProps } from "react-redux";
import { addToCartRequest, removeFromCartRequest } from "./actions";
import { createOrderRequest } from "../order/actions";

interface StateProps {
  cart: CartState;
  order: OrdersState;
}
const mapState = (state: StateProps) => ({
  cartItems: state.cart.cartItems,
  isLoading: state.order.isLoading,
  error: state.order.error,
});

const mapDispatch = {
  addToCartRequest,
  removeFromCartRequest,
  createOrderRequest,
};

export const cartConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof cartConnector>;
