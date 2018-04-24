import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

// selectLocationState expects a plain JS object for the routing state
export const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export const selectApp = (state) => state.get('app');

export const selectAllUsers = createGetSelector(
  selectApp, 'users', Immutable.Map()
);

export const selectAuthUserId = createGetSelector(
  selectApp, 'authUser', ''
);

export const selectAuthUserInfo = createSelector(
  selectAuthUserId,
  selectAllUsers,
  (userId, users) => users.get(userId, Immutable.Map())
);

export const selectIsLoggedIn = createSelector(
  selectAuthUserId,
  (substate) => !!substate
);

export const selectIsLogoutDone = createSelector(
  selectApp,
  (substate) => substate.get('logoutDone', true)
);

export const selectIsShowNotification = createGetSelector(
  selectApp, 'showNotification'
);

export const selectError = createGetSelector(
  selectApp, 'error'
);

export const selectMsg = createGetSelector(
  selectApp, 'msg'
);

export const selectShowResend = createGetSelector(
  selectApp, 'showResend'
);

export const selectIsLoading = createGetSelector(
  selectApp, 'isLoading'
);

export const selectIsDone = createSelector(
  selectApp,
  (substate) => substate.get('done', true)
);
