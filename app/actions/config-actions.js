// @flow

export const Actions = {
  SHOW_ONBOARDING: 'SHOW_ONBOARDING',
};

const ConfigActions = {
  showOnboarding: value => {
    return { type: Actions.SHOW_ONBOARDING, show_onboarding: value };
    // dispatch({ type: Actions.SHOW_ONBOARDING, value });
  },
};

export default ConfigActions;
