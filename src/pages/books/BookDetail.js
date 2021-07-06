import { memo, useContext, useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { BOOKS_PATH } from '../../paths'
import { booksContext } from '../../providers/BookProvider'

function BookDetail() {
  const { findBookByISBN } = useContext(booksContext)
  const [data, setData] = useState(null)
  const [visitor, setVisitor] = useState('')
  const params = useParams()
  const { state } = useLocation()

  useEffect(() => {
    if (state) {
      if (state.fromBooksPage) {
        setVisitor('BOOKS_PAGE')
      } else {
        setVisitor('GUEST')
      }
    } else {
      setVisitor('GUEST')
    }
  }, [state])

  useEffect(() => {
    const book = findBookByISBN(params.bookISBN)
    setData(book)
  }, [params])

  const renderDetails = () => {
    if (!data) return <Spinner />

    return (
      <div className="card col-8 p-2 align-self-center">
        <div className="card-title">
          <h2>
            {data.title} <small>{data.author}</small>
          </h2>
        </div>
        <img src={data.image} className="card-image-top img-fluid" />
        <div className="card-body">
          <p>{data.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      <h2 className="text-muted">Book Detail</h2>
      <h4>{visitor}</h4>
      <Link to={BOOKS_PATH} className="btn btn-link">
        Back
      </Link>
      <div className="col-12 d-flex">{renderDetails()}</div>
    </div>
  )
}

export default memo(BookDetail)
