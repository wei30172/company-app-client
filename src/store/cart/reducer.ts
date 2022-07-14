import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";
import { CartActions } from "./types";

const initialState: CartState = {
  cartItems: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: action.payload.cartItems,
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: action.payload.cartItems,
      };
    case CLEAR_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
