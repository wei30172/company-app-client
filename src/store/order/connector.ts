import { connect, ConnectedProps } from "react-redux";
import { fetchOrdersRequest } from "./actions";

interface StateProps {
  order: OrdersState;
}
const mapState = (state: StateProps) => ({
  orders: state.order.orders,
  isLoading: state.order.isLoading,
  error: state.order.error,
});

const mapDispatch = {
  fetchOrdersRequest,
};

export const orderConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof orderConnector>;
