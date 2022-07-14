import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "./actionTypes";

import {
  FilterProductsSuccessPayload,
  FilterProductsFailurePayload,
  FilterProductsPayload,
  OrderProductsPayload,
  FetchProductsRequest,
  FetchProductsSuccess,
  FetchProductsFailure,
  FilterProducts,
  OrderProducts,
} from "./types";

export const fetchProductsRequest = (): FetchProductsRequest => ({
  type: FECTCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (
  payload: FilterProductsSuccessPayload,
): FetchProductsSuccess => ({
  type: FECTCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = (
  payload: FilterProductsFailurePayload,
): FetchProductsFailure => ({
  type: FECTCH_PRODUCTS_FAILURE,
  payload,
});

export const filterProducts = (
  payload: FilterProductsPayload,
): FilterProducts => ({
  type: FILTER_PRODUCTS_BY_SIZE,
  payload,
});

export const sortProducts = (payload: OrderProductsPayload): OrderProducts => ({
  type: ORDER_PRODUCTS_BY_PRICE,
  payload,
});
