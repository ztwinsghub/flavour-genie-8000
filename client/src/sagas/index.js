// import redux-saga deps
import { fork } from 'redux-saga/effects'

// import sagas
import {
  addJuiceRequest,
  getJuicesRequest,
} from './juices-sagas'

import {
  addFlavourRequest,
  getFlavoursRequest,
} from './flavours-sagas'

import {
  searchRequest,
  toggleSearchFlavourRequest,
} from './search-sagas'

export default function* rootSaga() {
  yield [
    fork(addFlavourRequest),
    fork(addJuiceRequest),
    fork(getFlavoursRequest),
    fork(getJuicesRequest),
    fork(searchRequest),
    fork(toggleSearchFlavourRequest),
  ]
}