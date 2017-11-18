/* eslint-env jest, jasmine */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { mount } from 'enzyme';

import Counter from './';
import reducers from './reducers';

function setup() {
  const reducer = combineReducers({ counter: reducers });
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, {}, enhancer);

  /* eslint-disable function-paren-newline */
  const wrapper = mount(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );
  /* eslint-enable function-paren-newline */

  return {
    store: wrapper.props().store,
    enzymeWrapper: wrapper.find(Counter),
  };
}

describe('Counter connected component', () => {
  it('should render counter value correctly', () => {
    const { store, enzymeWrapper } = setup();

    enzymeWrapper.find('button').at(0).simulate('click');
    expect(enzymeWrapper.find('span').text()).toEqual(`Clicked: ${store.getState().counter} times`);

    enzymeWrapper.find('button').at(1).simulate('click');
    expect(enzymeWrapper.find('span').text()).toEqual(`Clicked: ${store.getState().counter} times`);

    enzymeWrapper.find('button').at(2).simulate('click');
    expect(enzymeWrapper.find('span').text()).toEqual(`Clicked: ${store.getState().counter} times`);

    enzymeWrapper.find('button').at(3).simulate('click');
    expect(enzymeWrapper.find('span').text()).toEqual(`Clicked: ${store.getState().counter} times`);
  });
});
