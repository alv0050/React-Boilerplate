import { fork } from 'redux-saga/effects';

import rootSaga from './containers/Counter/sagas';

export default function* sagas() {
  yield fork(rootSaga);
}
