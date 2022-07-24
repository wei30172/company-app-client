import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
} from "./actionTypes";

import {
  FilterProductsSuccessPayload,
  FilterProductsFailurePayload,
  FetchProductsRequest,
  FetchProductsSuccess,
  FetchProductsFailure,
  FilterProductsPayload,
  OrderProductsPayload,
  SearchProductsPayload,
  FilterProductsRequest,
  OrderProductsRequest,
  SearchProductsRequest,
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

export const searchProductsRequest = (
  payload: SearchProductsPayload,
): SearchProductsRequest => ({
  type: SEARCH_PRODUCTS_REQUEST,
  payload,
});
