import * as actionType from '../action-types'

const initialState = {
  counter: 0,
  auth: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case actionType.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case actionType.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload
      }
    case actionType.RESET_NUMBER:
      return {
        ...state,
        counter: initialState.counter
      }

    // Auth
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload
      }
    case actionType.SET_GUEST_USER:
      return {
        ...state,
        auth: initialState.auth
      }
    default:
      return state
  }
}

export default rootReducer
