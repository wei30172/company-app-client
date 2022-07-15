import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./actionTypes";

import { ProductActions } from "./types";

const initialState: ProductsState = {
  products: [],
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
        error: null,
      };
    case FECTCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        error: action.payload.error,
      };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredProducts: action.payload.products,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredProducts: action.payload.products,
      };
    default:
      return state;
  }
};

export default productReducer;
