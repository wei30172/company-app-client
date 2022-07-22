import { connect, ConnectedProps } from "react-redux";
import { loginRequest, signupRequest, logoutRequest } from "./actions";

interface StateProps {
  auth: AuthState;
}
const mapState = (state: StateProps) => ({
  token: state.auth.token,
  isLoading: state.auth.isLoading,
  error: state.auth.error,
});

const mapDispatch = {
  loginRequest,
  signupRequest,
  logoutRequest,
};

export const authConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof authConnector>;
