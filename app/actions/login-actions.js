// @flow

import API from '../api/api';

export const Actions = {
  LOGIN_START: 'LOGIN.START',
  LOGIN_SUCCESS: 'LOGIN.SUCCESS',
  LOGIN_FAIL: 'LOGIN.FAIL',
  LOGOUT: 'LOGOUT',
};

const LoginActions = {
  login: ({ cuil, password }) => async dispatch => {
    dispatch({ type: Actions.LOGIN_START });

    const loginRequest = await API.login({ username: cuil, password });

    console.log('💣 💣 💣 💣 💣 💣 💣 '); // eslint-disable-line
    console.log(loginRequest); // eslint-disable-line
    console.log('💣 💣 💣 💣 💣 💣 💣 '); // eslint-disable-line

    if (!loginRequest.error && loginRequest.message !== 'Missing Authentication Token')
      dispatch({ type: Actions.LOGIN_SUCCESS, loginRequest });
    else dispatch({ type: Actions.LOGIN_FAIL, loginRequest });
    return loginRequest;
  },

  logout: () => ({
    type: Actions.LOGOUT,
  }),

  start: () => ({ type: Actions.LOGIN_START }),
};

export default LoginActions;
