/* eslint-env jest, jasmine */
import reducer from './reducers';
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from './types';

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });

  it(`should handle ${INCREMENT}`, () => {
    expect(reducer(0, { type: INCREMENT })).toEqual(1);
  });

  it(`should handle ${DECREMENT}`, () => {
    expect(reducer(1, { type: DECREMENT })).toEqual(0);
  });

  it(`should handle ${INCREMENT_IF_ODD}`, () => {
    expect(reducer(0, { type: INCREMENT_IF_ODD })).toEqual(0);
    expect(reducer(1, { type: INCREMENT_IF_ODD })).toEqual(2);
  });

  it('should ignore unknown actions', () => {
    expect(reducer(0, { type: 'unknown' })).toEqual(0);
  });
});
