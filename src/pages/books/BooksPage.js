import { Route, Switch } from 'react-router-dom'
import BookProvider from '../../providers/BookProvider'
import Books from './Books'
import BookDetail from './BookDetail'

import { withAuth } from '../../hoc'
import { BOOKS_PATH, BOOK_DETAIL_PATH } from '../../paths'

function BooksPage({ initialAmount }) {
  return (
    <BookProvider>
      <Switch>
        <Route path={BOOKS_PATH} exact>
          <Books initialAmount={initialAmount} />
        </Route>
        <Route path={BOOK_DETAIL_PATH}>
          <BookDetail />
        </Route>
      </Switch>
    </BookProvider>
  )
}

export default withAuth(BooksPage)
