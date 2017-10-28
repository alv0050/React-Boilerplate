import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextreducers = require('./reducers');
      store.replaceReducer(nextreducers.default);
    });
  }

  return store;
}
