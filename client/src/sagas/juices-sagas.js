// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import api
import Client from '../Client'

// worker Saga: will be fired on ADD_JUICE_REQUEST actions
function* addJuice(action) {
  try {
    const { juice } = action

    // make api call to create a new juice
    const newJuice = yield call(Client.addJuice, juice, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with newly added juice
    yield put({ type: "ADD_JUICE", juice: newJuice })

  } catch (e) {
    console.log(e)
  }
}

// worker Saga: will be fired on GET_JUICES_REQUEST actions
function* getJuices() {
  try {

    // make api call to get juices
    const juices = yield call(Client.getJuices, (error, result) => {
      if (error) {
        return error
      }

      return result.message
    })

    // update ui with juices
    yield put({ type: "SET_JUICES", juices })

  } catch (e) {
    console.log(e)
  }
}


/*
  Starts addJuice on each dispatched 'ADD_JUICE_REQUEST' action.
  Allows concurrent adds of juices
*/
export function* addJuiceRequest() {
  yield takeEvery('ADD_JUICE_REQUEST', addJuice);
}

/*
  Starts getJuices on each dispatched 'GET_JUICES_REQUEST' action.
  Pulls juices from api and sets juice.juices state
*/
export function* getJuicesRequest() {
  yield takeEvery('GET_JUICES_REQUEST', getJuices);
}