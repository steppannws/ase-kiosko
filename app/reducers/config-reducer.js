// @flow

import { Actions } from '../actions/config-actions';

const InitialState = {
  show_onboarding: true,
};

const Config = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case Actions.SHOW_ONBOARDING:
      return { ...state, show_onboarding: action.show_onboarding };
    default:
      return state;
  }
};

export default Config;
