import * as types from '../actions/action-types';

export default (state = [], action) => {
  const {
    location,
    type,
  } = action

  switch (type) {
    case types.NAVIGATE:
      return {
        ...state,
        location,
      }
    default:
      return state;
  }
};