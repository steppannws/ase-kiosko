import { asyncActionTypes } from '../actions/api-actions';

const InitialState = {
  isLoading: false,
  error: '',
  refounds: [],
};

const Refounds = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case asyncActionTypes.REFOUND.START:
      return { ...state, isLoading: true };
    case asyncActionTypes.REFOUND.SUCCESS:
      return { ...state, isLoading: false, refounds: action.data.response };
    case asyncActionTypes.REFOUND.FAIL:
      return { ...state, isLoading: false, error: action.refoundsRequest.message };
    default:
      return state;
  }
};

export default Refounds;
