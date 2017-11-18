/* eslint-env jest, jasmine */
import 'babel-polyfill';
import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';

import Counter from './Component';
import reducer from './reducers';

function setup() {
  const store = createStore(reducer);
  const actions = {
    increment: jest.fn(),
    decrement: jest.fn(),
    incrementIfOdd: jest.fn(),
    incrementAsync: jest.fn(),
  };
  const enzymeWrapper = shallow(<Counter actions={actions} counter={store.getState()} />);

  return {
    store,
    actions,
    enzymeWrapper,
  };
}

describe('Counter component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('span').text()).toEqual('Clicked: 0 times');
    expect(enzymeWrapper.find('button').length).toEqual(4);
    expect(enzymeWrapper.find('button').at(0).text()).toEqual('+');
    expect(enzymeWrapper.find('button').at(1).text()).toEqual('-');
    expect(enzymeWrapper.find('button').at(2).text()).toEqual('Increment if odd');
    expect(enzymeWrapper.find('button').at(3).text()).toEqual('Increment async');
  });

  it('should button call action', () => {
    const { actions, enzymeWrapper } = setup();

    enzymeWrapper.find('button').at(0).simulate('click');
    expect(actions.increment).toHaveBeenCalled();
    enzymeWrapper.find('button').at(1).simulate('click');
    expect(actions.decrement).toHaveBeenCalled();
    enzymeWrapper.find('button').at(2).simulate('click');
    expect(actions.incrementIfOdd).toHaveBeenCalled();
    enzymeWrapper.find('button').at(3).simulate('click');
    expect(actions.incrementAsync).toHaveBeenCalled();
  });
});
