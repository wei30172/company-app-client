import { connect, ConnectedProps } from "react-redux";
import {
  fetchProductsRequest,
  filterProductsRequest,
  sortProductsRequest,
  searchProductsRequest,
  paginateProductsRequest,
} from "./actions";

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
  searchProductsRequest,
  paginateProductsRequest,
};

export const productsConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof productsConnector>;
