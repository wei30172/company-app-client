import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
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
  size: string;
  products: IProduct[];
}

export interface OrderProductsPayload {
  sort: string;
  products: IProduct[];
}

export interface FilterProducts {
  type: typeof FILTER_PRODUCTS_BY_SIZE;
  payload: FilterProductsPayload;
}

export interface OrderProducts {
  type: typeof ORDER_PRODUCTS_BY_PRICE;
  payload: OrderProductsPayload;
}

export type ProductActions =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure
  | FilterProducts
  | OrderProducts;
