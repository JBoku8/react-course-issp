import * as actionType from '../action-types/counter-types'

const initialState = {
  value: 0,
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case actionType.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      }
    case actionType.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
      }
    case actionType.RESET_NUMBER:
      return {
        ...state,
        counter: initialState.counter,
      }

    default:
      return state
  }
}

export default counterReducer
