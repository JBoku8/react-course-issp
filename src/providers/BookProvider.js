import { createContext, useState, useEffect } from 'react';
import { getBooks } from '../services/books';

export const booksContext = createContext(null);

booksContext.displayName = 'BooksContext';

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBooks = async () => {
    setLoading(true);
    const result = await getBooks();
    setBooks(result);
    setLoading(false);
  };

  const onBookAdd = (newBook) => {
    setBooks([...books, newBook]);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <booksContext.Provider value={{ books, setBooks, loading, onBookAdd }}>
      {children}
    </booksContext.Provider>
  );
}

export default BookProvider;
