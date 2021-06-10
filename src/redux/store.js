import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/'
import { validationMiddleware, autoLoginMiddleware } from './middleware '

const middleware = [validationMiddleware, thunk, logger, autoLoginMiddleware]

export const rootStore = createStore(rootReducer, applyMiddleware(...middleware))
