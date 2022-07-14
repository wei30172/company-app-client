import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";
import {
  AddToCartPayload,
  RemoveFromCartPayload,
  AddToCart,
  RemoveFromCart,
  ClearCart,
} from "./types";

export const addToCart = (payload: AddToCartPayload): AddToCart => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (
  payload: RemoveFromCartPayload,
): RemoveFromCart => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const clearCart = (): ClearCart => ({
  type: CLEAR_CART,
});
