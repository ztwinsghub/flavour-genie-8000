import * as types from '../actions/action-types';

export default (state = [], action) => {
  const {
    flavour,
    flavours,
    i,
    type,
  } = action

  switch (type) {
    case types.ADD_FLAVOUR:
      return {
        ...state,
        flavours: [
          ...state.flavours,
          flavour,
        ]
      }
    case types.SET_FLAVOURS:
      return {
        ...state,
        flavours,
      }
    case types.TOGGLE_FLAVOUR:
      return {
        ...state,
        flavours: [
          ...state.flavours.slice(0, i),
          {
            ...state.flavours[i],
            active: !state.flavours[i].active,
          },
          ...state.flavours.slice(i + 1),
        ]
      }
    case types.TOGGLE_FLAVOUR_FORM:
      return {
        ...state,
        formIsOpen: !state.formIsOpen,
      }
    default:
      return state;
  }
};