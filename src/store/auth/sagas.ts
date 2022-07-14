import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionTypes";

const HttpClient = axios.create({
  baseURL: "https://reqres.in/api",
});

const userLogin = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const { data } = await HttpClient.post<IAuth>("/login", {
    email,
    password,
  });
  return data;
};
// test: eve.holt@reqres.in / cityslicka

const userSignup = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const { data } = await HttpClient.post<IAuth>("/signup", {
    email,
    password,
  });
  return data;
};
// test: eve.holt@reqres.in / pistol

function* loginSaga(action: any) {
  try {
    const { email, password } = action.payload;
    const res: IAuth = yield call(userLogin, { email, password });

    yield put(
      loginSuccess({
        token: res.token,
      }),
    );

    action.payload.callback(res.token);
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield put(
        loginFailure({
          error: err.message,
        }),
      );
    }
  }
}

function* signupSaga(action: any) {
  try {
    const { email, password } = action.payload;
    const res: IAuth = yield call(userSignup, { email, password });

    yield put(
      signupSuccess({
        token: res.token,
      }),
    );

    action.payload.callback(res.token);
  } catch (err: unknown) {
    if (err instanceof Error) {
      yield put(
        signupFailure({
          error: err.message,
        }),
      );
    }
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)]);
}

export default authSaga;
