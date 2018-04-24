/*
 *
 * ProductPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadProductAction(productId) {
  return {
    type: LOAD_PRODUCT,
    productId,
  };
}

export function loadProductSuccessAction(product) {
  return {
    type: LOAD_PRODUCT_SUCCESS,
    product,
  };
}

export function loadProductFailAction(error) {
  return {
    type: LOAD_PRODUCT_FAIL,
    error,
  };
}
