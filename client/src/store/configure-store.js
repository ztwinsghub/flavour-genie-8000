// import redux
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

// import redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

// import default data
import cms from '../data/cms'
import flavours from '../data/flavours'
import juices from '../data/juices'
import search from '../data/search'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

//enable redux devtools via enchancers
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ?
    window.devToolsExtension() :
    f => f
)

const defaultState = {
  cms,
  flavours,
  juices,
  search,
}

// create state store
const store = createStore(rootReducer, defaultState, enhancers);

// run the rootSaga
sagaMiddleware.run(rootSaga)

export default store