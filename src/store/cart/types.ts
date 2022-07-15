import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";

export interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: IProduct;
}

export interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: IProduct;
}

export interface ClearCart {
  type: typeof CLEAR_CART;
}

export type CartActions = AddToCart | RemoveFromCart | ClearCart;
