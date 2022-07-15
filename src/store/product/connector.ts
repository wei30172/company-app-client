import { connect, ConnectedProps } from "react-redux";
import { fetchProductsRequest } from "./actions";
import { addToCart } from "../cart/actions";

interface StateProps {
  product: ProductsState;
}
const mapState = (state: StateProps) => ({
  products: state.product.products,
  isLoading: state.product.isLoading,
  error: state.product.error,
});

const mapDispatch = {
  fetchProductsRequest,
  addToCart,
};

export const productsConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof productsConnector>;
