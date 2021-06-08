import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './reducers/rootReducer'
import { validationMiddleware, autoLoginMiddleware } from './middleware '

const middleware = [validationMiddleware, logger, autoLoginMiddleware]

export const rootStore = createStore(rootReducer, applyMiddleware(...middleware))
