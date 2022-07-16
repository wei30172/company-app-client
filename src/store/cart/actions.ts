import {
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART_REQUEST,
  CLEAR_CART_REQUEST,
} from "./actionTypes";
import {
  AddToCartRequestPayload,
  RemoveFromCartRequestPayload,
  AddToCartRequest,
  RemoveFromCartRequest,
  ClearCartRequest,
} from "./types";

export const addToCartRequest = (
  payload: AddToCartRequestPayload,
): AddToCartRequest => ({
  type: ADD_TO_CART_REQUEST,
  payload,
});

export const removeFromCartRequest = (
  payload: RemoveFromCartRequestPayload,
): RemoveFromCartRequest => ({
  type: REMOVE_FROM_CART_REQUEST,
  payload,
});

export const clearCartRequest = (): ClearCartRequest => ({
  type: CLEAR_CART_REQUEST,
});
