/*
 *
 * ProductsPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  DEFAULT_ACTION,
  CHANGE_FILTER,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  CHANGE_FILTER_PRODUCTS,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  productFilter: {
    color: [],
  },
});

function productsPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_LOGOUT_SUCCESS:
      return initialState;
    case LOAD_PRODUCTS_SUCCESS:
      return state.set('products', fromJS(action.products))
      .set('isLoading', false);
    case LOAD_PRODUCTS_FAIL:
      return state.set('isLoading', false);
    case CHANGE_FILTER:
      return state.set('productFilter', fromJS(action.productFilter));
    case CHANGE_FILTER_PRODUCTS:
      return state.set('productsSorting', action.productsSorting);
    default:
      return state;
  }
}

export default productsPageReducer;
