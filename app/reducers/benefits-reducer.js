import { asyncActionTypes } from '../actions/api-actions';

const InitialState = {
  isLoading: false,
  error: '',
  benefits: [],
};

const Benefits = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case asyncActionTypes.BENEFITS.START:
      return { ...state, isLoading: true };
    case asyncActionTypes.BENEFITS.SUCCESS:
      return { ...state, isLoading: false, benefits: action.data };
    case asyncActionTypes.BENEFITS.FAIL:
      return { ...state, isLoading: false, error: action.data.error };
    default:
      return state;
  }
};

export default Benefits;
