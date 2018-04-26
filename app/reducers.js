/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import Immutable, { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form/immutable';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import {
  UPDATE_FORM,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_FAIL,
} from 'containers/App/constants';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  const allReducer = combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    form: reduxFormReducer,
    ...injectedReducers,
  });
  const rootReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_FORM:
        return state.setIn(['app', 'isLoading'], true);
      case UPDATE_FORM_SUCCESS: {
        const original = state.getIn(action.reduxEndPoint, Immutable.Map());
        return state.setIn(['app', 'isLoading'], false)
                    .setIn(action.reduxEndPoint, original.merge(action.formMap));
      }
      case UPDATE_FORM_FAIL: {
        return state;
      }

      default:
        return allReducer(state, action);
    }
  };
  return rootReducer;
}
