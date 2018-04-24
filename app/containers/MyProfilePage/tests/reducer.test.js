
import { fromJS } from 'immutable';
import myProfilePageReducer from '../reducer';

describe('myProfilePageReducer', () => {
  it('returns the initial state', () => {
    expect(myProfilePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
