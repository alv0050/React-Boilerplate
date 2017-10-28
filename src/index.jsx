import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import configureStore from './store';

const store = configureStore({});

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
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
