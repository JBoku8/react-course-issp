import * as actionType from '../action-types/auth-types'

const initialState = {
  auth: null,
  error: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      }
    case actionType.SET_GUEST_USER:
      return {
        ...state,
        auth: null,
      }
    default:
      return state
  }
}

export default authReducer
