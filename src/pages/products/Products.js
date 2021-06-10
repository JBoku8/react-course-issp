import { useCallback, useEffect, useReducer } from 'react'
import { ProductList } from '../../components/list'
import useLocalStorage from '../../hooks/useLocalStorage'
import { getProducts } from '../../services'
import { debounce } from '../../utils/helpers'

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_FILTER = 'SET_FILTER'
const CLEAR_FILTER = 'CLEAR_FILTER'

const initialState = {
  products: [],
  oldProducts: [],
  filters: null,
}

const productsReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        oldProducts: [...action.payload],
      }
    case SET_FILTER:
      // eslint-disable-next-line
      const data = state.products.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      )
      return {
        ...state,
        filter: action.payload,
        products: data,
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        products: [...state.oldProducts],
      }
    default:
      throw new Error('')
  }
}

function Products() {
  const [state, dispatch] = useReducer(productsReducer, initialState)
  const [, setProductsStorage] = useLocalStorage('app:products', [])

  const loadProducts = useCallback(async () => {
    const productsList = await getProducts(12)
    setProductsStorage(productsList)
    dispatch({
      type: SET_PRODUCTS,
      payload: productsList,
    })
  }, [setProductsStorage])

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    setProductsStorage(state.products)
  }, [state.products, setProductsStorage])

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 3) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      })
    } else {
      if (state.filter) {
        dispatch({
          type: CLEAR_FILTER,
        })
      }
    }
  })

  const renderProducts = () => {
    return <ProductList data={state.products} />
  }

  return (
    <div className="row m-0">
      <div className="col-12 mb-4">
        <h2 className="text-muted title">Products Pages</h2>

        <div className="col-12 row m-0">
          <input
            type="search"
            className="form-control"
            placeholder="start typing..."
            name="searchTerm"
            onKeyUp={onSearch}
          />
        </div>
      </div>
      <div className="col-12">{renderProducts()}</div>
    </div>
  )
}

export default Products
