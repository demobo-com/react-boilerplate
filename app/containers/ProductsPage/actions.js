/*
 *
 * ProductsPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadProductsSuccessAction(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
  };
}
export function loadProductsFailAction(error) {
  return {
    type: LOAD_PRODUCTS_FAIL,
    error,
  };
}
