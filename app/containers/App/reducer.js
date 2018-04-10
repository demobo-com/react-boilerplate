/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';

const initialState = fromJS({

});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default appReducer;
