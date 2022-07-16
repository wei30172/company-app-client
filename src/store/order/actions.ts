import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CLEAR_ORDER_REQUEST,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "./actionTypes";

import {
  CreateOrderPayload,
  CreateOrderSuccessPayload,
  CreateOrderFailurePayload,
  FetchOrdersSuccessPayload,
  FetchOrdersFailurePayload,
  ClearOrderRequest,
  CreateOrderRequest,
  CreateOrderSuccess,
  CreateOrderFailure,
  FetchOrdersRequest,
  FetchOrdersSuccess,
  FetchOrdersFailure,
} from "./types";

export const createOrderRequest = (
  payload: CreateOrderPayload,
): CreateOrderRequest => ({
  type: CREATE_ORDER_REQUEST,
  payload,
});

export const createOrderSuccess = (
  payload: CreateOrderSuccessPayload,
): CreateOrderSuccess => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});

export const createOrderFailure = (
  payload: CreateOrderFailurePayload,
): CreateOrderFailure => ({
  type: CREATE_ORDER_FAILURE,
  payload,
});

export const clearOrderRequest = (): ClearOrderRequest => ({
  type: CLEAR_ORDER_REQUEST,
});

export const fetchOrdersRequest = (): FetchOrdersRequest => ({
  type: FETCH_ORDERS_REQUEST,
});

export const fetchOrdersSuccess = (
  payload: FetchOrdersSuccessPayload,
): FetchOrdersSuccess => ({
  type: FETCH_ORDERS_SUCCESS,
  payload,
});

export const fetchOrdersFailure = (
  payload: FetchOrdersFailurePayload,
): FetchOrdersFailure => ({
  type: FETCH_ORDERS_FAILURE,
  payload,
});
