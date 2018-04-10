import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';

export const selectRoute = (state) => state.get('route');

export const selectApp = (state) => state.get('app');

export const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export const selectAuthUserId = createGetSelector(
  selectApp, 'authUser', ''
);

export const makeSelectIsLoggedIn = createSelector(
  selectAuthUserId,
  (substate) => !!substate
);
