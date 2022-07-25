import {
  FECTCH_PRODUCTS_REQUEST,
  FECTCH_PRODUCTS_SUCCESS,
  FECTCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  ORDER_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_REQUEST,
  PAGINATE_PRODUCTS_REQUEST,
} from "./actionTypes";

export interface FetchProductsSuccessPayload {
  products: IProduct[];
}

export interface FetchProductsFailurePayload {
  error: string;
}

export interface FetchProductsRequest {
  type: typeof FECTCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccess {
  type: typeof FECTCH_PRODUCTS_SUCCESS;
  payload: FetchProductsSuccessPayload;
}

export interface FetchProductsFailure {
  type: typeof FECTCH_PRODUCTS_FAILURE;
  payload: FetchProductsFailurePayload;
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

export interface PaginateProductsPayload {
  paginatedProducts: IProduct[];
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

export interface PaginateProductsRequest {
  type: typeof PAGINATE_PRODUCTS_REQUEST;
  payload: PaginateProductsPayload;
}

export type ProductActions =
  | FetchProductsRequest
  | FetchProductsSuccess
  | FetchProductsFailure
  | FilterProductsRequest
  | OrderProductsRequest
  | SearchProductsRequest
  | PaginateProductsRequest;
