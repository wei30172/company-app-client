import { connect, ConnectedProps } from "react-redux";
import {
  fetchProductsRequest,
  filterProductsRequest,
  sortProductsRequest,
  searchProductsRequest,
} from "./actions";
import { addToCartRequest } from "../cart/actions";

interface StateProps {
  product: ProductsState;
}
const mapState = (state: StateProps) => ({
  products: state.product.products,
  filteredProducts: state.product.filteredProducts,
  isLoading: state.product.isLoading,
  error: state.product.error,
});

const mapDispatch = {
  fetchProductsRequest,
  filterProductsRequest,
  sortProductsRequest,
  addToCartRequest,
  searchProductsRequest,
};

export const productsConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof productsConnector>;
