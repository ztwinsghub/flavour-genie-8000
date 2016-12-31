import * as types from '../actions/action-types';

export default (state = [], action) => {
  const {
    flavour,
    results,
    type,
  } = action

  switch (type) {
    case types.SET_RESULTS:
      return {
        ...state,
        results,
      }

    case types.TOGGLE_RESULTS:
      return {
        ...state,
        resultsIsOpen: !state.resultsIsOpen,
      }

    case types.TOGGLE_SEARCH_FLAVOUR:

      // check if flavour is in state.flavours
      const i = state.flavours.reduce((result, element, i) => {
        if (element === flavour.name) {
          return i
        }

        return result
      }, null)


      // if it is, remove it
      if (i != null) {

        // remove flavour
        // and exit
        return {
          ...state,
          flavours: [
            ...state.flavours.slice(0, i),
            ...state.flavours.slice(i + 1),
          ]
        }
      }

      // add a flavour to state.flavours
      // and exit
      return {
        ...state,
        flavours: [
          ...state.flavours,
          flavour.name,
        ]
      }
    default:
      return state;
  }
};