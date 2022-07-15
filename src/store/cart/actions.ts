import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";
import { AddToCart, RemoveFromCart, ClearCart } from "./types";

export const addToCart = (payload: IProduct): AddToCart => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload: IProduct): RemoveFromCart => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const clearCart = (): ClearCart => ({
  type: CLEAR_CART,
});
