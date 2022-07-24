import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
} from "./actionTypes";

import {
  FilterProductsSuccessPayload,
  FilterProductsFailurePayload,
  FilterProductsPayload,
  OrderProductsPayload,
  FetchProductsRequest,
  FetchProductsSuccess,
  FetchProductsFailure,
  FilterProductsRequest,
  OrderProductsRequest,
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

export const filterProductsRequest = (
  payload: FilterProductsPayload,
): FilterProductsRequest => ({
  type: FILTER_PRODUCTS_REQUEST,
  payload,
});

export const sortProductsRequest = (
  payload: OrderProductsPayload,
): OrderProductsRequest => ({
  type: ORDER_PRODUCTS_REQUEST,
  payload,
});
