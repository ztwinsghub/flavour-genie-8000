// import redux deps
import { combineReducers } from 'redux'

// import reducers
import cms from './cms-reducer'
import flavours from './flavours-reducer'
import juices from './juices-reducer'
import search from './search-reducer'

const rootReducer = combineReducers({
  cms,
  flavours,
  juices,
  search,
})

export default rootReducer