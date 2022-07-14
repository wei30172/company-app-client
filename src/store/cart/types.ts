import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";

export interface AddToCartPayload {
  cartItems: IProduct[];
}

export interface RemoveFromCartPayload {
  cartItems: IProduct[];
}

export interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: AddToCartPayload;
}

export interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: RemoveFromCartPayload;
}

export interface ClearCart {
  type: typeof CLEAR_CART;
}

export type CartActions = AddToCart | RemoveFromCart | ClearCart;
