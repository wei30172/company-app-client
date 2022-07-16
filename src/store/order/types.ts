import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CLEAR_ORDER_REQUEST,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "./actionTypes";

export interface CreateOrderPayload {
  order: {
    email: string;
    name: string;
    address: string;
    total: number;
    cartItems: IProduct[];
  };
}

export interface CreateOrderSuccessPayload {
  order: IOrder;
}

export interface CreateOrderFailurePayload {
  error: string;
}

export interface FetchOrdersSuccessPayload {
  orders: IOrder[];
}

export interface FetchOrdersFailurePayload {
  error: string;
}

export interface CreateOrderRequest {
  type: typeof CREATE_ORDER_REQUEST;
  payload: CreateOrderPayload;
}

export interface CreateOrderSuccess {
  type: typeof CREATE_ORDER_SUCCESS;
  payload: CreateOrderSuccessPayload;
}

export interface ClearOrderRequest {
  type: typeof CLEAR_ORDER_REQUEST;
}

export interface CreateOrderFailure {
  type: typeof CREATE_ORDER_FAILURE;
  payload: CreateOrderFailurePayload;
}

export interface FetchOrdersRequest {
  type: typeof FETCH_ORDERS_REQUEST;
}

export interface FetchOrdersSuccess {
  type: typeof FETCH_ORDERS_SUCCESS;
  payload: FetchOrdersSuccessPayload;
}

export interface FetchOrdersFailure {
  type: typeof FETCH_ORDERS_FAILURE;
  payload: FetchOrdersFailurePayload;
}

export type OrderActions =
  | CreateOrderRequest
  | CreateOrderSuccess
  | CreateOrderFailure
  | FetchOrdersRequest
  | FetchOrdersSuccess
  | FetchOrdersFailure;
