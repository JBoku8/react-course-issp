import { createContext, useState, useEffect, useContext } from 'react'
import { getBooks } from '../services/books'

export const booksContext = createContext(null)

booksContext.displayName = 'BooksContext'

function BookProvider ({ children }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState()

  const loadBooks = async (count) => {
    setLoading(true)
    const result = await getBooks(count)
    setBooks(result)
    setLoading(false)
  }

  const onBookAdd = (newBook) => {
    setBooks([...books, newBook])
  }

  useEffect(() => {
    loadBooks(amount)
  }, [amount])

  return (
    <booksContext.Provider
      value={{ books, setBooks, loading, onBookAdd, setAmount }}>
      {children}
    </booksContext.Provider>
  )
}

export const useBooks = () => {
  const { books } = useContext(booksContext)
  if (!books) {
    throw Error('invalid books context')
  }
  return books
}

export default BookProvider
