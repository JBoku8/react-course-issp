import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/'
import { validationMiddleware, autoLoginMiddleware } from './middleware '

// logger
const middleware = [validationMiddleware, thunk, autoLoginMiddleware]

export const rootStore = createStore(rootReducer, applyMiddleware(...middleware))
