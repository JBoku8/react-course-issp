import { getProducts } from '../../services/products'
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from '../action-types/product-types'

export const getProductsRequestAction = () => ({
  type: GET_PRODUCTS_REQUEST,
})

export const getProductsFailureAction = (payload) => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
})

export const getProductsSuccessAction = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
})

export const getProductsActionAsync = (amount) => {
  return async (dispatch) => {
    try {
      dispatch(getProductsRequestAction())
      const products = await getProducts(amount)
      dispatch(getProductsSuccessAction(products))
    } catch (err) {
      dispatch(getProductsFailureAction(err))
    }
  }
}
