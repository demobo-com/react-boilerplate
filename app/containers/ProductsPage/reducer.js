/*
 *
 * ProductsPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  DEFAULT_ACTION,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

function productsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return initialState;
    case LOAD_PRODUCTS_SUCCESS:
      return state.set('products', action.products)
      .set('isLoading', false);
    case LOAD_PRODUCTS_FAIL:
      return state.set('isLoading', false);

    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default productsPageReducer;
