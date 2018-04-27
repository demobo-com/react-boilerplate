import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';

/**
 * Direct selector to the productsPage state domain
 */
export const selectProductsPageDomain = (state) => state.get('productsPage');

/**
 * Other specific selectors
 */
export const makeSelectProductsPage = () => createSelector(
  selectProductsPageDomain,
  (substate) => substate.toJS()
);

export const selectIsLoading = createGetSelector(selectProductsPageDomain, 'isLoading');

export const selectAllProducts = createSelector(
  selectProductsPageDomain,
  (substate) => substate.get('products')
);
