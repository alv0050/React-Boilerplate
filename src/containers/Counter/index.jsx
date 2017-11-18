import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import ActionCreators from './../../actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Component);
