import { call, put } from 'redux-saga/effects';
import * as FirebaseApi from 'apis/firebase';
import { ONCE_TILL_UNMOUNT } from 'utils/constants';
import { loadPerformanceSuccessAction, loadPerformanceFailAction } from './actions';

// Individual exports for testing
export function* loadPerformance() {
  // See example in containers/HomePage/saga.js
  try {
    // TODO: using real data.
    const performance = yield call(FirebaseApi.getPerformance);
    yield put(loadPerformanceSuccessAction(performance));
  } catch (error) {
    yield put(loadPerformanceFailAction(error));
  }
}

export default [
  {
    key: 'load-performance',
    saga: loadPerformance,
    mode: ONCE_TILL_UNMOUNT,
  },
];
