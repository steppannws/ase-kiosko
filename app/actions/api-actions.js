import API from '../api/api';

const asyncActionTypesCodes = ['REFOUND', 'REQUESTS', 'MY_BENEFITS', 'BENEFITS'];

const createAsyncActionType = name => {
  if (typeof name !== 'string') {
    // eslint-disable-next-line no-console
    console.warn(
      `Multiple async action middleware expected a string, instead recieved ${typeof name}`
    ); // eslint-disable-line no-console
  }
  return {
    START: name,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`,
  };
};

const asyncActionTypes = {};
// eslint-disable-next-line no-restricted-syntax
for (const code of asyncActionTypesCodes) {
  asyncActionTypes[code] = createAsyncActionType(code);
}

const ApiActions = {
  retrieveRefounds: cuil => async dispatch => {
    dispatch({ type: asyncActionTypes.REFOUND.START });
    try {
      const data = await API.refounds(cuil);
      dispatch({ type: asyncActionTypes.REFOUND.SUCCESS, data });
      return data;
    } catch (e) {
      dispatch({ type: asyncActionTypes.REFOUND.FAIL });
    }

    return null;
  },
  retrieveRequests: cuil => async dispatch => {
    dispatch({ type: asyncActionTypes.REQUESTS.START });
    try {
      const data = await API.requests(cuil);
      dispatch({ type: asyncActionTypes.REQUESTS.SUCCESS, data });
      return data;
    } catch (e) {
      dispatch({ type: asyncActionTypes.REQUESTS.FAIL });
    }

    return null;
  },
  retrieveMyBenefits: cuil => async dispatch => {
    dispatch({ type: asyncActionTypes.MY_BENEFITS.START });
    try {
      const data = await API.myBenefits(cuil);
      dispatch({ type: asyncActionTypes.MY_BENEFITS.SUCCESS, data });
      return data;
    } catch (e) {
      dispatch({ type: asyncActionTypes.MY_BENEFITS.FAIL });
    }

    return null;
  },
  retrieveBenefits: () => async dispatch => {
    dispatch({ type: asyncActionTypes.BENEFITS.START });
    try {
      const data = await API.benefits();
      dispatch({ type: asyncActionTypes.BENEFITS.SUCCESS, data });
      return data;
    } catch (e) {
      dispatch({ type: asyncActionTypes.BENEFITS.FAIL });
    }

    return null;
  },
};

export { asyncActionTypes };

export default ApiActions;
