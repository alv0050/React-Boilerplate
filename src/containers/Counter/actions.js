import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function incrementIfOdd() {
  return {
    type: INCREMENT_IF_ODD,
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC,
  };
}
