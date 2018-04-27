/*
 *
 * ProductPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAIL,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

function productPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return state.set('isLoading', true)
          .set('productId', action.productId);
    case LOAD_PRODUCT_SUCCESS:
      return state.set('isLoading', false)
          .set('product', action.product);
    case LOAD_PRODUCT_FAIL:
      return state.set('isLoading', false);

    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default productPageReducer;
