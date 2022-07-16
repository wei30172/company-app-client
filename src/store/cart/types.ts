import {
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART_REQUEST,
  CLEAR_CART_REQUEST,
} from "./actionTypes";

export interface AddToCartRequestPayload {
  cartItem: IProduct;
}

export interface RemoveFromCartRequestPayload {
  cartItem: IProduct;
  remove: boolean;
}

export interface AddToCartRequest {
  type: typeof ADD_TO_CART_REQUEST;
  payload: AddToCartRequestPayload;
}

export interface RemoveFromCartRequest {
  type: typeof REMOVE_FROM_CART_REQUEST;
  payload: RemoveFromCartRequestPayload;
}

export interface ClearCartRequest {
  type: typeof CLEAR_CART_REQUEST;
}

export type CartActions =
  | AddToCartRequest
  | RemoveFromCartRequest
  | ClearCartRequest;
