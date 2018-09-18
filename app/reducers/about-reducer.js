// @flow

import { Actions } from '../actions/about-actions';

const InitialState = {
  isLoading: false,
  about: '',
};

const About = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case Actions.ABOUT_START:
      return { ...state, isLoading: true };
    case Actions.ABOUT_SUCCESS:
      return { ...state, isLoading: false, about: action.data };
    case Actions.ABOUT_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default About;
