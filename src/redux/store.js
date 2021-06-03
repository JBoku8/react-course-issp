import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './reducers/rootReducer'

const middleware = [logger]

export const rootStore = createStore(rootReducer, applyMiddleware(...middleware))
