// @flow

import ENV from '../env';
import Fetch from '../helpers/fetch';
import Logger from '../helpers/logger';

export default {
  login({ username, password }) {
    Logger.log('[Login post] init');
    const data = { username, password };
    return this.post(ENV.API.LOGIN, data);
  },

  about() {
    Logger.log('[About get] init');
    return this.get(ENV.API.ABOUT);
  },

  benefits() {
    Logger.log('[Benefits get] init');
    return this.get(ENV.API.BENEFITS);
  },

  refounds(cuil) {
    Logger.log('[Refounds get] init');
    const params = {
      cuil,
    };
    return this.get(ENV.API.REFOUNDS, params);
  },

  requests(cuil) {
    Logger.log('[Requests get] init');
    const params = {
      cuil,
    };
    return this.get(ENV.API.MEDICINE.STATUS, params);
  },

  myBenefits(cuil) {
    Logger.log('[My Benefits get] init');
    const params = {
      cuil,
    };
    return this.get(ENV.API.DISABILITIES.STATUS, params);
  },

  post(path, data) {
    const method = 'POST';
    const headers = ENV.API.HEADERS;
    const body = JSON.stringify(data);

    return this.fetch(path, { method, headers, body });
  },

  get(path, params = {}) {
    const method = 'GET';
    const headers = ENV.API.HEADERS;

    let url = Object.keys(params)
      .map(param => `${param}=${params[param]}&`)
      .join('');
    url = `${path}?${url}`;

    return this.fetch(url, { method, params, headers });
  },

  fetch(path, { method, headers, params, body }) {
    const now = +new Date();
    return Fetch(path, { method, params, headers, body })
      .then(res => res.json())
      .then(res => {
        Logger.log(`[${method}] end (took:' + (+${new Date() - now}) + 'ms)`);
        return res;
      })
      .catch(e => {
        Logger.log(`ERROR: ${e}`);
        return e;
      });
  },
};
