/* eslint-env jest, jasmine */
import 'babel-polyfill';
import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import sagas, { incrementAsync } from './sagas';
import { INCREMENT, INCREMENT_ASYNC } from './types';

describe('Counter sagas', () => {
  it('watches several actions', () => {
    const generator = sagas();
    expect(generator.next().value)
      .toEqual(takeEvery(INCREMENT_ASYNC, incrementAsync));
  });

  it('should delay 1s then dispatch action', () => {
    const generator = incrementAsync();
    expect(generator.next().value)
      .toEqual(call(delay, 1000));
    expect(generator.next().value)
      .toEqual(put({ type: INCREMENT }));
  });
});
