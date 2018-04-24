
import { fromJS } from 'immutable';
import productsPageReducer from '../reducer';

describe('productsPageReducer', () => {
  it('returns the initial state', () => {
    expect(productsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
