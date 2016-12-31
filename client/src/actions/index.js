import * as types from './action-types';

// cms actions
export const navigate = (location) => {
  return {
    type: types.NAVIGATE,
    location,
  }
}

// flavours actions
export const addFlavour = (flavour) => {
  return {
    type: types.ADD_FLAVOUR,
    flavour,
  }
}

export const addFlavourRequest = (flavour) => {
  return {
    type: types.ADD_FLAVOUR_REQUEST,
    flavour,
  }
}

export const getFlavoursRequest = () => {
  return {
    type: types.GET_FLAVOURS_REQUEST,
  }
}

export const setFlavours = () => {
  return {
    type: types.SET_FLAVOURS,
  }
}

export const toggleFlavourForm = () => {
  return {
    type: types.TOGGLE_FLAVOUR_FORM,
  }
}

// juices actions
export const addJuice = (juice) => {
  return {
    type: types.ADD_JUICE,
    juice,
  }
}

export const addJuiceRequest = (juice) => {
  return {
    type: types.ADD_JUICE_REQUEST,
    juice,
  }
}

export const getJuicesRequest = () => {
  return {
    type: types.GET_JUICES_REQUEST,
  }
}

export const setJuices = () => {
  return {
    type: types.SET_JUICES,
  }
}

export const toggleJuiceForm = () => {
  return {
    type: types.TOGGLE_JUICE_FORM,
  }
}

// TABLET

// Search actions
export const searchRequest = (flavours) => {
  return {
    type: types.SEARCH_REQUEST,
    flavours,
  }
}

export const setResults = (results) => {
  return {
    type: types.SET_RESULTS,
    results,
  }
}

export const toggleFlavour = (i) => {
  return {
    type: types.TOGGLE_FLAVOUR,
    i,
  }
}

export const toggleResults = () => {
  return {
    type: types.TOGGLE_RESULTS,
  }
}

export const toggleSearchFlavour = (flavour) => {
  return {
    type: types.TOGGLE_SEARCH_FLAVOUR,
    flavour,
  }
}

export const toggleSearchFlavourRequest = (flavour, i) => {
  return {
    type: types.TOGGLE_SEARCH_FLAVOUR_REQUEST,
    flavour,
    i,
  }
}