import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

export interface LoginPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface LoginSuccessPayload {
  token: string;
}

export interface LoginFailurePayload {
  error: string;
}

export interface SignupPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface SignupSuccessPayload {
  token: string;
}

export interface SignupFailurePayload {
  error: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}

export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
  payload: SignupPayload;
}

export interface SignupSuccess {
  type: typeof SIGNUP_SUCCESS;
  payload: SignupSuccessPayload;
}

export interface SignupFailure {
  type: typeof SIGNUP_FAILURE;
  payload: SignupFailurePayload;
}

export type AuthActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | SignupRequest
  | SignupSuccess
  | SignupFailure;
