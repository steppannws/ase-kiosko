import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import config from './config-reducer';
import login from './login-reducer';
import about from './about-reducer';
import refounds from './refounds-reducer';
import requests from './requests-reducer';
import myBenefits from './my-benefits-reducer';
import benefits from './benefits-reducer';

// config,
// login,
// about,
// refounds,
// requests,
// myBenefits,
// benefits,

const rootReducer = combineReducers({
  login,
  router
});

export default rootReducer;
