import { asyncActionTypes } from '../actions/api-actions';

const InitialState = {
  isLoading: false,
  error: '',
  myBenefits: [],
};

const MyBenefits = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case asyncActionTypes.MY_BENEFITS.START:
      return { ...state, isLoading: true };
    case asyncActionTypes.MY_BENEFITS.SUCCESS:
      return { ...state, isLoading: false, myBenefits: action.data.response };
    case asyncActionTypes.MY_BENEFITS.FAIL:
      return { ...state, isLoading: false, error: action.data.error };
    default:
      return state;
  }
};

export default MyBenefits;
