/*
 *
 * MyProfilePage reducer
 *
 */

import { fromJS } from 'immutable';

import { USER_LOGOUT_SUCCESS } from 'containers/App/constants';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({

});

function myProfilePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default myProfilePageReducer;
