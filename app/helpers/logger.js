// @flow

import { createLogger } from 'redux-logger';

// const __DEV__ = __DEV__ || true;
// const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default class Logger {
  constructor(id) {
    this.id = id;
  }

  log(...args) {
    // eslint-disable-next-line
    console.log(...args);
  }

  static log(...args) {
    // eslint-disable-next-line
    console.log(...args);
  }

  static storeLogger() {
    return createLogger({
      // eslint-disable-next-line
      predicate: (getState, action) => isDebuggingInChrome,
      collapsed: true,
      duration: true,
    });
  }
}
