import { createGetSelector } from 'reselect-immutable-helpers';
import Immutable from 'immutable';

/**
 * Direct selector to the productPage state domain
 */
export const selectProductPageDomain = (state) => state.get('productPage');

/**
 * Other specific selectors
 */
export const selectIsLoading = createGetSelector(selectProductPageDomain, 'isLoading');

export const selectProduct = createGetSelector(selectProductPageDomain, 'product', Immutable.Map());
