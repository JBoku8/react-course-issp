import * as actionType from '../action-types/product-types'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Products
    case actionType.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionType.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        data: [],
      }
    case actionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer
