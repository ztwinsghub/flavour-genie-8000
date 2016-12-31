// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import api
import Client from '../Client'

// worker Saga: will be fired on ADD_FLAVOUR actions
function* addFlavour(action) {
  try {

    // make api call to create a new flavour
    const flavour = yield call(Client.addFlavour, action.flavour, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with newly added flavour
    yield put({ type: "ADD_FLAVOUR", flavour })

  } catch (e) {
    console.log(e)
  }
}

// worker Saga: will be fired on GET_FLAVOURS_REQUEST actions
function* getFlavours() {
  try {

    // make api call to get flavours
    const flavours = yield call(Client.getFlavours, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with flavours
    yield put({ type: "SET_FLAVOURS", flavours })

  } catch (e) {
    console.log(e)
  }
}

/*
  Starts addFlavour on each dispatched 'ADD_FLAVOUR_REQUEST' action.
  Allows concurrent adds of flavour
*/
export function* addFlavourRequest() {
  yield takeEvery('ADD_FLAVOUR_REQUEST', addFlavour);
}

/*
  Starts getFlavours on each dispatched 'GET_FLAVOURS_REQUEST' action.
  Pulls flavours from api and sets flavours.flavours state
*/
export function* getFlavoursRequest() {
  yield takeEvery('GET_FLAVOURS_REQUEST', getFlavours);
}