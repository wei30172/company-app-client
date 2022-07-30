import {
  ADD_TO_CART_REQUEST,
  REMOVE_FROM_CART_REQUEST,
  CLEAR_CART_REQUEST,
} from "./actionTypes";
import { CartActions } from "./types";
import { toast } from "react-hot-toast";

const initialState: CartState = {
  cartItems: [],
};

const handleAddToCartRequest = (product: IProduct, cartItems: IProduct[]) => {
  let newCartItems: IProduct[] = [...cartItems];
  const isItemInCart = newCartItems.find((item) => item._id === product._id);

  newCartItems = isItemInCart
    ? newCartItems.map((item) =>
        item._id === product._id ? { ...item, count: item.count + 1 } : item,
      )
    : [...newCartItems, { ...product, count: 1 }];

  toast.success(`Add ${product.title} successfully!`);

  return newCartItems;
};

const handleRemoveFromCartRequest = (
  remove: boolean,
  product: IProduct,
  cartItems: IProduct[],
) => {
  let newCartItems: IProduct[] = [...cartItems];

  newCartItems = newCartItems.reduce((totalItems, item) => {
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

  toast.success(`Add ${product.title} successfully!`);

  return newCartItems;
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST: {
      const newCartItems = handleAddToCartRequest(
        action.payload.cartItem,
        state.cartItems,
      );
      return {
        cartItems: newCartItems,
      };
    }

    case REMOVE_FROM_CART_REQUEST: {
      const newCartItems = handleRemoveFromCartRequest(
        action.payload.remove,
        action.payload.cartItem,
        state.cartItems,
      );
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
