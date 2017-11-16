import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <p>
    <span>
      Clicked: {props.counter} times
    </span>
    {' '}
    <button onClick={() => props.actions.increment()}>
      +
    </button>
    {' '}
    <button onClick={() => props.actions.decrement()}>
      -
    </button>
    {' '}
    <button onClick={() => props.actions.incrementIfOdd()}>
      Increment if odd
    </button>
    {' '}
    <button onClick={() => props.actions.incrementAsync()}>
      Increment async
    </button>
  </p>
);

Counter.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
