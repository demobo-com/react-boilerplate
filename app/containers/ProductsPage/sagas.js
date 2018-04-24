import { call, put } from 'redux-saga/effects';
import * as FirebaseApi from 'apis/firebase';
import { DAEMON } from 'utils/constants';
import { loadProductsSuccessAction, loadProductsFailAction } from './actions';

// Individual exports for testing
export function* loadProductsSaga() {
  try {
    // TODO: using real data.
    const product = yield call(FirebaseApi.loadProducts);
    yield put(loadProductsSuccessAction(product));
  } catch (error) {
    yield put(loadProductsFailAction(error));
  }
}

export default [
  {
    key: 'products',
    saga: loadProductsSaga,
    mode: DAEMON,
  },
];
