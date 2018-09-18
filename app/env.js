// @flow

// const env = process.env.NODE_ENV || "development";

// const DEVELOPMENT = "http://localhost:8080";
const PRODUCTION = 'https://6bqaonf4tj.execute-api.us-west-2.amazonaws.com/test';

const BASE_URL = PRODUCTION; // env === "production" ? PRODUCTION : DEVELOPMENT;

const ENV = {
  BASE_URL,

  API: {
    HEADERS: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    LOGIN: `${BASE_URL}/auth/login`,
    ABOUT: `${BASE_URL}/about`,
    DISABILITIES: {
      STATUS: `${BASE_URL}/disabilities/status`,
      FORMS: `${BASE_URL}/disabilities/forms`,
      INSTRUCTIVES: `${BASE_URL}/disabilities/instructives`,
      PROVIDERS: `${BASE_URL}/disabilities/providers`,
    },
    MEDICINE: {
      STATUS: `${BASE_URL}/medicine/status`,
      FORMS: `${BASE_URL}/medicine/forms`,
    },
    BENEFITS: `${BASE_URL}/benefits`,
    REFOUNDS: `${BASE_URL}/refunds`,
  },
};

export default ENV;
