import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { INCREMENT, INCREMENT_ASYNC } from './types';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: INCREMENT });
}

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
