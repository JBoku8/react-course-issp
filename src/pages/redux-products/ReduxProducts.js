import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductList } from '../../components/list'
import Spinner from '../../components/spinner/Spinner'
import { getProductsActionAsync } from '../../redux/actions/product-actions'
import { productsSelector } from '../../redux/selectors'
import { debounce } from '../../utils/helpers'

function ReduxProducts() {
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector(productsSelector)
  const [productsList, setProductsList] = useState([])
  const [filter, setFilter] = useState('')
  const inputRef = useRef(null)
  const productRef = useRef(null)
  const counterRef = useRef(0)

  useEffect(() => {
    dispatch(getProductsActionAsync(3))
  }, [dispatch])

  useEffect(() => {
    inputRef.current.focus()
    console.log(productRef)
    counterRef.current++
  }, [])

  useEffect(() => {
    let mounted = true
    if (mounted) {
      setProductsList([...data])
    }

    return () => {
      mounted = false
    }
  }, [data])

  const onCounterInc = () => {
    counterRef.current++

    console.log(counterRef.current)
  }

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 3) {
      const data = productsList.filter((item) =>
        item.name.toLowerCase().includes(target.value.toLowerCase())
      )
      setProductsList(data)
    } else {
      if (filter) {
        setProductsList(data)
      }
    }
    setFilter(target.value)
  })

  const renderProducts = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )
    }

    if (loading) {
      return <Spinner />
    }

    return <ProductList data={productsList} ref={productRef} />
  }

  return (
    <div className="row m-0">
      <div className="col-12 mb-4">
        <h4 onClick={onCounterInc}>Counter Ref Example - {counterRef.current}</h4>
        <h2 className="text-muted title">Redux Products Pages</h2>

        <div className="col-12 row m-0">
          <input
            type="search"
            className="form-control"
            placeholder="start typing..."
            name="searchTerm"
            onKeyUp={onSearch}
            ref={inputRef}
          />
        </div>
      </div>
      <div className="col-12">{renderProducts()}</div>
    </div>
  )
}

export default ReduxProducts
