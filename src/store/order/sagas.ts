import { addOrder, getOrders } from "../../api/orderAPI";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createOrderSuccess,
  createOrderFailure,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from "./actions";
import { CREATE_ORDER_REQUEST, FETCH_ORDERS_REQUEST } from "./actionTypes";
import { CLEAR_CART_REQUEST } from "../cart/actionTypes";
import { toast } from "react-hot-toast";

const createOrder = async (payload: { order: IOrder }) => {
  const { email, name, address, total, cartItems } = payload.order;
  const res: IOrder = await addOrder({
    email,
    name,
    address,
    total,
    cartItems,
  });
  return res;
};

const fetchOrders = async () => {
  const res: IOrder[] = await getOrders();
  return res;
};

function* createOrderSaga(action: any) {
  try {
    const res: { order: IOrder } = yield call(createOrder, action.payload);
    yield all([
      toast.success("Your order has been placed."),
      put(
        createOrderSuccess({
          order: res.order,
        }),
      ),
      put({ type: CLEAR_CART_REQUEST }),
      put({ type: FETCH_ORDERS_REQUEST }),
    ]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield all([
        toast.error("Your order has NOT been placed."),
        put(
          createOrderFailure({
            error: err.message,
          }),
        ),
      ]);
    }
  }
}

function* fetchOrdersSaga() {
  try {
    const res: { orders: IOrder[] } = yield call(fetchOrders);

    yield put(
      fetchOrdersSuccess({
        orders: res.orders,
      }),
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield put(
        fetchOrdersFailure({
          error: err.message,
        }),
      );
    }
  }
}

function* orderSaga() {
  yield all([takeLatest(CREATE_ORDER_REQUEST, createOrderSaga)]);
  yield all([takeLatest(FETCH_ORDERS_REQUEST, fetchOrdersSaga)]);
}

export default orderSaga;
