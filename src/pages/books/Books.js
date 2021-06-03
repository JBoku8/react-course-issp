import { useContext, useEffect, useState } from 'react'
import { BookCard } from '../../components/cards/BookCard'
import AddBookForm from '../../components/forms/add-book-form/AddBookForm'
import Spinner from '../../components/spinner/Spinner'
import { booksContext, useBooks } from '../../providers/BookProvider'

import css from './books.module.css'

function Books ({ initialAmount }) {
  const { loading, setAmount } = useContext(booksContext)
  const books = useBooks()
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setAmount(initialAmount)
  }, [initialAmount, setAmount])

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

  return (
    <div className="row">
      <div className="col-12">
        <h2 className={`text-muted ${css.title}`}>Books</h2>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide' : 'Show'} Form
          </button>
          <button className="btn btn-primary" onClick={() => setAmount(12)}>
            12
          </button>
          <button className="btn btn-primary" onClick={() => setAmount(24)}>
            24
          </button>
          <button className="btn btn-primary" onClick={() => setAmount(36)}>
            36
          </button>
        </div>

        {showForm && <AddBookForm showForm={setShowForm} />}
      </div>

      {renderBooks()}
    </div>
  )
}

export default Books
