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

const createOrder = async (payload: {
  email: string;
  name: string;
  address: string;
  total: number;
  cartItems: IProduct[];
}) => {
  const { email, name, address, total, cartItems } = payload;
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
  try {
    const { email, name, address, total, cartItems } = action.payload;
    const res: { order: IOrder } = yield call(createOrder, {
      email,
      name,
      address,
      total,
      cartItems,
    });

    yield put(
      createOrderSuccess({
        order: res.order,
      }),
    );

    action.payload.callback(res.order);
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

    action.payload.callback(res.orders);
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
