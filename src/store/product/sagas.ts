import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailure } from "./actions";
import { FECTCH_PRODUCTS_REQUEST } from "./actionTypes";
import ProductsApi from "../../api/productsApi";

const fetchProducts = async () => {
  const { data } = await ProductsApi.get<IProduct[]>("/");
  return data;
};

function* fetchProductsSaga(action: any) {
  try {
    const res: { products: IProduct[] } = yield call(fetchProducts);

    yield put(
      fetchProductsSuccess({
        products: res.products,
      }),
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield put(
        fetchProductsFailure({
          error: err.message,
        }),
      );
    }
  }
}

function* productSaga() {
  yield all([takeLatest(FECTCH_PRODUCTS_REQUEST, fetchProductsSaga)]);
}

export default productSaga;
