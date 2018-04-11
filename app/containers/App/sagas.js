// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}

export function* testSaga() {
// text
}

export default [
  {
    key: 'app',
    saga: defaultSaga,
  },
  {
    key: 'app2',
    saga: testSaga,
  },
];
