import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
} from "./actions";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionTypes";
import { SignupPayloadValues, LoginPayloadValues } from "./types";

const HttpClient = axios.create({
  baseURL: "https://posts-node-server.herokuapp.com",
});

const userLogin = async (payload: {
  values: LoginPayloadValues;
  callback: () => void;
}) => {
  const { data } = await HttpClient.post<IAuth>("/user/login", payload.values);
  return data;
};

const userSignup = async (payload: {
  values: SignupPayloadValues;
  callback: () => void;
}) => {
  const { data } = await HttpClient.post<IAuth>("/user/signup", payload.values);
  return data;
};

function* loginSaga(action: any) {
  try {
    const res: IAuth = yield call(userLogin, action.payload);

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
    const res: IAuth = yield call(userSignup, action.payload);

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
