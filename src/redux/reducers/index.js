import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { counterReducer } from './counterReducer'
import { productsReducer } from './productsReducer'

export const rootReducer = combineReducers({
  user: authReducer,
  counter: counterReducer,
  products: productsReducer,
})
