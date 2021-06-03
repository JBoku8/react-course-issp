import axios from 'axios'

import { API_URL } from './service.helpers'

axios.defaults.baseURL = API_URL

export const getBooks = async (_quantity = 3) => {
  try {
    const response = await axios.get(`/books?_quantity=${_quantity}`)
    return response.data.data
  } catch (err) {
    console.trace(err)
    return []
  }
}
