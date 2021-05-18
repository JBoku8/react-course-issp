import { useContext, useState } from 'react';
import AddBookForm from '../../components/forms/add-book-form/AddBookForm';
import Spinner from '../../components/spinner/Spinner';
import { booksContext } from '../../providers/BookProvider';

import './books.css';

function Books() {
  const { books, loading } = useContext(booksContext);
  const [showForm, setShowForm] = useState(false);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="text-muted">books</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide' : 'Show'} Form
        </button>

        {showForm && <AddBookForm showForm={setShowForm} />}
      </div>

      <div className="row px-3">
        {books.map((item) => {
          return (
            <div className="card border-0 col-4 book-item mb-2 p-3" key={item.isbn}>
              <img
                className="card-img-top img-fluid h-50"
                src={item.image}
                alt={item.title}
              />
              <h2 className="card-title">{item.title}</h2>
              <div className="card-body">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
