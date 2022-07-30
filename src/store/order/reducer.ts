import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "./actionTypes";

import { OrderActions } from "./types";

const initialState: OrdersState = {
  orders: [] as IOrder[],
  isLoading: false,
  error: "",
};

const orderReducer = (state = initialState, action: OrderActions) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orders: action.payload.orders,
        error: null,
      };
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        orders: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;
