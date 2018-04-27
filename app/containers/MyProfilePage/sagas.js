import {
  takeLatest,
  // cancel,
  // take,
  // call,
  // put,
  // select,
} from 'redux-saga/effects';

// import * as FirebaseApi from 'apis/firebase';
import {
  DEFAULT_ACTION,
} from './constants';
// import {  } from './actions';

// Individual exports for testing
export function* loadData() {
  //
}

export function* watchLoadData() {
  yield takeLatest(DEFAULT_ACTION, loadData);
}

export default [
  {
    key: 'myProfilePage',
    saga: watchLoadData,
  },
];
