import * as types from '../actions/action-types';

export default (state = [], action) => {
  const {
    juice,
    juices,
    type,
  } = action

  switch (type) {
    case types.ADD_JUICE:
      return {
        ...state,
        juices: [
          ...state.juices,
          juice,
        ]
      }
    case types.SET_JUICES:
      return {
        ...state,
        juices
      }
    case types.TOGGLE_JUICE_FORM:
      return {
        ...state,
        formIsOpen: !state.formIsOpen,
      }
    default:
      return state;
  }
};