import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from './../../actions';

const Counter = props => (
  <p>
    Clicked: {props.counter} times
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

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
