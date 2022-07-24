import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
} from "./actionTypes";

export interface FilterProductsSuccessPayload {
  products: IProduct[];
}

export interface FilterProductsFailurePayload {
  error: string;
}

export interface FetchProductsRequest {
  type: typeof FECTCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccess {
  type: typeof FECTCH_PRODUCTS_SUCCESS;
  payload: FilterProductsSuccessPayload;
}

export interface FetchProductsFailure {
  type: typeof FECTCH_PRODUCTS_FAILURE;
  payload: FilterProductsFailurePayload;
}

export interface FilterProductsPayload {
  filter: string;
}

export interface OrderProductsPayload {
  order: string;
}

export interface SearchProductsPayload {
  search: string;
}

export interface FilterProductsRequest {
  type: typeof FILTER_PRODUCTS_REQUEST;
  payload: FilterProductsPayload;
}

export interface OrderProductsRequest {
  type: typeof ORDER_PRODUCTS_REQUEST;
  payload: OrderProductsPayload;
}

export interface SearchProductsRequest {
  type: typeof SEARCH_PRODUCTS_REQUEST;
  payload: SearchProductsPayload;
}

export type ProductActions =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure
  | FilterProductsRequest
  | OrderProductsRequest
  | SearchProductsRequest;
