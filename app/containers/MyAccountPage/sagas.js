import {
  takeLatest,
  // cancel,
  // take,
  call,
  put,
  // select,
} from 'redux-saga/effects';
import { fromJS } from 'immutable';

import * as StrapiApi from 'apis/strapi';
import { MYACCOUNT_LOAD_ACTION } from './constants';
import {
  loadMyAccountSuccessAction,
  loadMyAccountFailAction,
} from './actions';

export function* loadMyAccount(action) {
  try {
    yield setTimeout(() => {}, 100);

    let result = yield call(StrapiApi.loadMyAccount, action.uid);
    result = Object.values(result.toJS());
    yield put(loadMyAccountSuccessAction(fromJS(result)));
  } catch (error) {
    yield put(loadMyAccountFailAction(error));
  }
}

export function* watchLoadMyAccount() {
  yield takeLatest(MYACCOUNT_LOAD_ACTION, loadMyAccount);
}

export default [
  {
    key: 'watchLoadMyAccount',
    saga: watchLoadMyAccount,
  },
];
