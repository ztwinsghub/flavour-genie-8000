// import redux-saga deps
import { takeEvery } from 'redux-saga'
import { call, put, } from 'redux-saga/effects'

// import api
import Client from '../Client'

// worker Saga: will be fired on SEARCH_REQUEST actions
function* getResults(action) {
  try {
    const { flavours } = action

    // make api call to get results
    const results = yield call(Client.search, flavours, (error, results) => {
      if (error) {
        return error
      }

      return results.message
    })

    // update ui with results
    yield put({ type: "SET_RESULTS", results })

    // toggle open results
    yield put({ type: "TOGGLE_RESULTS" })

  } catch (e) {
    console.log(e)
  }
}

// worker Saga: will be fired on TOGGLE_SEARCH_FLAVOUR_REQUEST actions
function* toggleFlavour(action) {
  try {
    const { flavour, i } = action

    // add flavour to serach
    yield put({ type: "TOGGLE_SEARCH_FLAVOUR", flavour })

    // toggle flavour to active
    yield put({ type: "TOGGLE_FLAVOUR", i })

  } catch (e) {
    console.log(e)
  }
}

/*
  Starts getResults on each dispatched 'SEARCH_REQUEST' action.
  Pulls results from api and sets results state
*/
export function* searchRequest() {
  yield takeEvery('SEARCH_REQUEST', getResults);
}

/*
  Starts toggleFlavour on each dispatched 'TOGGLE_SEARCH_FLAVOUR_REQUEST' action.
  sets flavours.active and search.flavours
*/
export function* toggleSearchFlavourRequest() {
  yield takeEvery('TOGGLE_SEARCH_FLAVOUR_REQUEST', toggleFlavour);
}