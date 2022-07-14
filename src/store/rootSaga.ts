import { all, fork } from "redux-saga/effects";

import authSaga from "./auth/sagas";
import orderSaga from "./order/sagas";
import productSaga from "./product/sagas";

export function* rootSaga() {
  yield all([fork(orderSaga)]);
  yield all([fork(authSaga)]);
  yield all([fork(productSaga)]);
}
