import { call, put } from 'redux-saga/effects';
import * as FirebaseApi from 'apis/firebase';
import { RESTART_ON_REMOUNT } from 'utils/constants';
import { loadProductSuccessAction, loadProductFailAction } from './actions';

// Individual exports for testing
export function* loadSingleProduct(props) {
  try {
    const productId = props.match.params.productId;
    const product = yield call(FirebaseApi.getSingleProduct, productId);
    yield put(loadProductSuccessAction(product));
  } catch (error) {
    yield put(loadProductFailAction(error));
  }
}

export default [
  {
    key: 'product',
    saga: loadSingleProduct,
    mode: RESTART_ON_REMOUNT,
  },
];
