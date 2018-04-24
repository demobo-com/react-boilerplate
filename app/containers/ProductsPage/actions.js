/*
 *
 * ProductsPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_FILTER,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  CHANGE_FILTER_PRODUCTS,
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

export function changeFilterAction(productFilter) {
  return {
    type: CHANGE_FILTER,
    productFilter,
  };
}

export function changeFilterProducts(productsSorting) {
  return {
    type: CHANGE_FILTER_PRODUCTS,
    productsSorting,
  };
}
