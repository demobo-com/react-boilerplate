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
  // try {
  //   const result = yield call(FirebaseApi.getXXAPI, action.uid);
  //   yield put(loadDataSuccessAction(result));
  // } catch (error) {
  //   yield put(loadDataFailAction(error));
  // }
}

export function* watchLoadData() {
  yield takeLatest(DEFAULT_ACTION, loadData);
  // const watcher = yield takeLatest(DEFAULT_ACTION, loadData);
  // yield cancel(watcher);
}

export default [
  {
    key: 'myProfilePage',
    saga: watchLoadData,
  },
];
