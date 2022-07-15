import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import orderReducer from "./order/reducer";
import productReducer from "./product/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
