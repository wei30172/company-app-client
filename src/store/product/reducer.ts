import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
} from "./actionTypes";

import { ProductActions } from "./types";

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
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
        error: null,
      };

    case FECTCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        filteredProducts: [],
        error: action.payload.error,
      };

    case ORDER_PRODUCTS_REQUEST:
      let orderedProducts: IProduct[] = [...state.filteredProducts];
      const order = action.payload.order;
      orderedProducts.sort((a, b) =>
        order === "lowest"
          ? a.price < b.price
            ? -1
            : 1
          : order === "highest"
          ? a.price > b.price
            ? -1
            : 1
          : order === "latest"
          ? a._id > b._id
            ? -1
            : 1
          : a._id < b._id
          ? -1
          : 1,
      );
      return {
        ...state,
        filteredProducts: orderedProducts,
      };

    case FILTER_PRODUCTS_REQUEST:
      let filteredProducts: IProduct[] = [...state.products];
      const filter = action.payload.filter;
      
      filteredProducts =
        filter === "defualt"
          ? filteredProducts
          : filteredProducts.filter(
              (product) => product.availableSizes.indexOf(filter) >= 0,
            );
      return {
        ...state,
        filteredProducts: filteredProducts,
      };

    default:
      return state;
  }
};

export default productReducer;
