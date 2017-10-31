import { combineReducers } from 'redux';

import counterReducer from './containers/Counter/reducers';

export default combineReducers({
  counter: counterReducer,
});
