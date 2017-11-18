import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import sagas from './sagas';
import reducers from './reducers';

export default function configureStore(initialState, history) {
  const reducer = combineReducers(Object.assign(
    {},
    reducers,
    { router: routerReducer },
  ));

  const sagaMiddleware = createSagaMiddleware();
  const middleware = routerMiddleware(history);
  const enhancer = composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    middleware,
  ));

  const store = createStore(reducer, initialState, enhancer);
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
