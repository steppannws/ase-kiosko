import { asyncActionTypes } from '../actions/api-actions';

const InitialState = {
  isLoading: false,
  error: '',
  requests: [],
};

const Requests = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case asyncActionTypes.REQUESTS.START:
      return { ...state, isLoading: true };
    case asyncActionTypes.REQUESTS.SUCCESS:
      return { ...state, isLoading: false, requests: action.data.response };
    case asyncActionTypes.REQUESTS.FAIL:
      return { ...state, isLoading: false, error: action.refoundsRequest.message };
    default:
      return state;
  }
};

export default Requests;
