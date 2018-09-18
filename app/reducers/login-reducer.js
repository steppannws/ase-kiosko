// @flow

import { Actions } from '../actions/login-actions';

const InitialState = {
  isLoading: false,
  isLoggedIn: false,
  status: -1,
  user: {},
  error: ''
};

const Login = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case Actions.LOGIN_START:
      return { ...state, isLoading: true, status: -1 };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // isLoggedIn: action.loginRequest.status === 1 && true, // THIS IS THE CORRECT ONE
        isLoggedIn: action.loginRequest.status === 2 && true,
        status: action.loginRequest.status,
        user: action.loginRequest.response && action.loginRequest.response[0]
      };
    case Actions.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.loginRequest.message
      };
    case Actions.LOGOUT:
      return { ...state, ...InitialState };
    default:
      return state;
  }
};

export default Login;
