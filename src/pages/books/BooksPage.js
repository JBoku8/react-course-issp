import BookProvider from '../../providers/BookProvider'
import Books from './Books'
import { withAuth } from '../../hoc'

function BooksPage ({ initialAmount }) {
  return (
    <BookProvider>
      <Books initialAmount={initialAmount} />
    </BookProvider>
  )
}

export default withAuth(BooksPage)
