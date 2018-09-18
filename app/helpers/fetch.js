import Logger from './logger';

// const memoize = {};

const Fetch = (...args) => {
  const { method = 'GET', body = '' } = args[1] || {};
  Logger.log(`%c[${method}] ${args[0]}   ${body.substr(0, 75)}`, 'color: #f0f');
  //   return fetch(...args);

  const FETCH_TIMEOUT = 10000;
  let didTimeOut = false;

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      didTimeOut = true;
      reject(new Error('Request timed out'));
    }, FETCH_TIMEOUT);

    fetch(...args)
      .then(response => {
        // Clear the timeout as cleanup
        clearTimeout(timeout);
        if (!didTimeOut) {
          resolve(response);
        }
      })
      .catch(err => {
        if (didTimeOut) return;
        // Reject with error
        reject(err);
      });
  });
};

export default Fetch;
