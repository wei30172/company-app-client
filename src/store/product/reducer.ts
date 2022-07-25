import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
  PAGINATE_PRODUCTS_REQUEST,
} from "./actionTypes";

import { ProductActions } from "./types";

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  paginatedProducts: [],
  isLoading: false,
  error: "",
};

const productReducer = (state = initialState, action: ProductActions) => {
  switch (action.type) {
    case FECTCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FECTCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        filteredProducts: action.payload.products,
        paginatedProducts: action.payload.products,
        error: null,
      };

    case FECTCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        filteredProducts: [],
        paginatedProducts: [],
        error: action.payload.error,
      };

    case ORDER_PRODUCTS_REQUEST:
      return {
        ...state,
        filteredProducts: action.payload.orderedProducts,
      };

    case FILTER_PRODUCTS_REQUEST:
      return {
        ...state,
        filteredProducts: action.payload.filteredProducts,
      };

    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        filteredProducts: action.payload.searchedProducts,
      };

    case PAGINATE_PRODUCTS_REQUEST:
      return {
        ...state,
        paginatedProducts: action.payload.paginatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
