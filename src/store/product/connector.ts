import { connect, ConnectedProps } from "react-redux";
import {
  fetchProductsRequest,
  filterProductsRequest,
  sortProductsRequest,
  searchProductsRequest,
  paginateProductsRequest,
} from "./actions";
import { addToCartRequest } from "../cart/actions";

interface StateProps {
  product: ProductsState;
}
const mapState = (state: StateProps) => ({
  products: state.product.products,
  filteredProducts: state.product.filteredProducts,
  paginatedProducts: state.product.paginatedProducts,
  isLoading: state.product.isLoading,
  error: state.product.error,
});

const mapDispatch = {
  fetchProductsRequest,
  filterProductsRequest,
  sortProductsRequest,
  addToCartRequest,
  searchProductsRequest,
  paginateProductsRequest,
};

export const productsConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof productsConnector>;
