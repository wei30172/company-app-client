import {
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART_REQUEST,
  CLEAR_CART_REQUEST,
} from "./actionTypes";
import { CartActions } from "./types";

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST: {
      const cartItems: IProduct[] = [...state.cartItems];
      const product = action.payload.cartItem;
      const isItemInCart = cartItems.find((item) => item._id === product._id);

      let newCartItems = isItemInCart
        ? cartItems.map((item) =>
            item._id === product._id
              ? { ...item, count: item.count + 1 }
              : item,
          )
        : [...cartItems, { ...product, count: 1 }];

      return {
        cartItems: newCartItems,
      };
    }

    case REMOVE_FROM_CART_REQUEST: {
      const cartItems: IProduct[] = [...state.cartItems];
      const product = action.payload.cartItem;
      const remove = action.payload.remove;
      // let cartItems = items.filter((item) => item._id !== product._id);

      let newCartItems = cartItems.reduce((totalItems, item) => {
        if (item._id === product._id) {
          if (remove || item.count === 1) {
            return totalItems;
          } else {
            return [...totalItems, { ...item, count: item.count - 1 }];
          }
        } else {
          return [...totalItems, item];
        }
      }, [] as IProduct[]);

      return {
        cartItems: newCartItems,
      };
    }

    case CLEAR_CART_REQUEST:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
