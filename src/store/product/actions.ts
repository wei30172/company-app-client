import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
  PAGINATE_PRODUCTS_REQUEST,
} from "./actionTypes";

import {
  FetchProductsSuccessPayload,
  FetchProductsFailurePayload,
  FetchProductsRequest,
  FetchProductsSuccess,
  FetchProductsFailure,
  FilterProductsPayload,
  OrderProductsPayload,
  SearchProductsPayload,
  PaginateProductsPayload,
  FilterProductsRequest,
  OrderProductsRequest,
  SearchProductsRequest,
  PaginateProductsRequest,
} from "./types";

export const fetchProductsRequest = (): FetchProductsRequest => ({
  type: FECTCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (
  payload: FetchProductsSuccessPayload,
): FetchProductsSuccess => ({
  type: FECTCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = (
  payload: FetchProductsFailurePayload,
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

export const paginateProductsRequest = (
  payload: PaginateProductsPayload,
): PaginateProductsRequest => ({
  type: PAGINATE_PRODUCTS_REQUEST,
  payload,
});
