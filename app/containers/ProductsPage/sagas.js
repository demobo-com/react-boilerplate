import { call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import * as StrapiApi from 'apis/strapi';
// import { DAEMON } from 'utils/constants';
import { loadProductsSuccessAction, loadProductsFailAction } from './actions';

// Individual exports for testing
export function* loadProductsSaga() {
  try {
    // TODO: using real data.
    const products = yield call(StrapiApi.loadProducts);
    yield put(loadProductsSuccessAction(fromJS(products)));
  } catch (error) {
    yield put(loadProductsFailAction(error));
  }
}

export default [
  {
    key: 'products',
    saga: loadProductsSaga,
    // mode: DAEMON,
  },
];
