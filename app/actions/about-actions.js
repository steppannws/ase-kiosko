// @flow

import API from '../api/api';

export const Actions = {
  ABOUT_START: 'ABOUT.START',
  ABOUT_SUCCESS: 'ABOUT.SUCCESS',
  ABOUT_FAIL: 'ABOUT.FAIL',
};

export const retrieveAbout = () => {
  return async dispatch => {
    dispatch({ type: Actions.ABOUT_START });
    try {
      const data = await API.about();
      dispatch({ type: Actions.ABOUT_SUCCESS, data });
    } catch (e) {
      dispatch({ type: Actions.ABOUT_FAIL });
    }
  };
};
