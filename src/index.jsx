import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import configureStore from './store';

const history = createHistory();
const store = configureStore({}, history);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
