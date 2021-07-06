import { Link } from 'react-router-dom'
import { BOOKS_PATH } from '../../paths'

import { bookCardIds } from '../../utils/testids'
import css from './bookCard.module.css'

export const BookCard = ({ item }) => {
  return (
    <div className="card border-0 col-4 book-item mb-2 p-3">
      <Link
        to={{
          pathname: `${BOOKS_PATH}/${item.isbn}`,
          search: "name='example'",
          state: {
            fromBooksPage: true,
          },
        }}>
        <img
          className="card-img-top img-fluid h-50"
          src={item.image}
          alt={item.title}
          data-testid={bookCardIds.image}
        />
      </Link>
      <h2 className={`card-title ${css.title}`} data-testid={bookCardIds.title}>
        {item.title}
      </h2>
      <div className="card-body" data-testid={bookCardIds.description}>
        {item.description}
      </div>
    </div>
  )
}
