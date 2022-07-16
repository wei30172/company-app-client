import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createOrderSuccess,
  createOrderFailure,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from "./actions";
import { CREATE_ORDER_REQUEST, FETCH_ORDERS_REQUEST } from "./actionTypes";

const HttpClient = axios.create({
  baseURL: "https://shoppingcart-node-server.herokuapp.com/api",
});

const createOrder = async (payload: { order: IOrder }) => {
  const { email, name, address, total, cartItems } = payload.order;
  const { data } = await HttpClient.post<IOrder>("/orders", {
    email,
    name,
    address,
    total,
    cartItems,
  });
  return data;
};

const fetchOrders = async () => {
  const { data } = await HttpClient.get<IOrder[]>("/orders");
  return data;
};

function* createOrderSaga(action: any) {
  console.log(action);
  try {
    const res: { order: IOrder } = yield call(createOrder, action.payload);

    yield put(
      createOrderSuccess({
        order: res.order,
      }),
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield put(
        createOrderFailure({
          error: err.message,
        }),
      );
    }
  }
}

function* fetchOrdersSaga(action: any) {
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
