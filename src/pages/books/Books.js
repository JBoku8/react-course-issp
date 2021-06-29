import { memo, useContext, useEffect, useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { BookCard } from '../../components/cards/BookCard'
import AddBookForm from '../../components/forms/add-book-form/AddBookForm'
import Spinner from '../../components/spinner/Spinner'
import { booksContext, useBooks } from '../../providers/BookProvider'
import { BOOKS_PATH } from '../../paths'

import css from './books.module.css'

const useQuery = (query) => {
  return new URLSearchParams(query)
}

function Books({ initialAmount }) {
  const { loading, setAmount } = useContext(booksContext)
  const books = useBooks()
  const query = useQuery(useLocation().search)
  const [showForm, setShowForm] = useState(() => {
    return query.get('showForm') === 'true'
  })
  const history = useHistory()

  const updateHistory = useCallback(() => {
    history.push({
      pathname: BOOKS_PATH,
      search: '?' + query.toString(),
    })
  }, [query])

  useEffect(() => {
    setAmount(initialAmount)
  }, [initialAmount, setAmount])

  useEffect(() => {
    query.set('showForm', showForm)

    updateHistory()
  }, [showForm])

  const renderBooks = () => {
    if (loading) {
      return <Spinner />
    }

    return (
      <div className="row px-3">
        {books.map((item) => {
          return <BookCard item={item} key={item.isbn} />
        })}
      </div>
    )
  }

  const onShowHandler = () => {
    const check = !(query.get('showForm') === 'true')
    setShowForm(check)
    query.set('showForm', check)
    updateHistory()
  }

  const onFilterChange = (amount) => {
    setAmount(amount)
    query.set('amount', amount)
    updateHistory()
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2 className={`text-muted ${css.title}`}>Books</h2>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={onShowHandler}>
            {showForm ? 'Hide' : 'Show'} Form
          </button>
          <button className="btn btn-primary" onClick={() => onFilterChange(12)}>
            12
          </button>
          <button className="btn btn-primary" onClick={() => onFilterChange(24)}>
            24
          </button>
          <button className="btn btn-primary" onClick={() => onFilterChange(36)}>
            36
          </button>
        </div>

        {showForm && <AddBookForm showForm={setShowForm} />}
      </div>

      {renderBooks()}
    </div>
  )
}

export default memo(Books)
