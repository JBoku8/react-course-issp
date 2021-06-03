import axios from 'axios'

import { API_URL } from './service.helpers'

axios.defaults.baseURL = API_URL

export const getProducts = async (quantity = 3) => {
  try {
    const result = await axios.get(
      `/products?_quantity=${quantity}&_taxes=12&_categories_type=uuid`
    )
    return result.data.data
  } catch (error) {
    console.log(error)
  }
}
