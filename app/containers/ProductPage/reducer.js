/*
 *
 * ProductPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  DEFAULT_ACTION,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAIL,
} from './constants';

const initialState = fromJS({});

function productPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_PRODUCT_SUCCESS:
      return state.set('product', fromJS(action.product));
    case LOAD_PRODUCT_FAIL:
      return state;
    case LOAD_PRODUCT:
      return state.set('productId', fromJS(action.productId));
    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default productPageReducer;
