import { useContext, useEffect, useState } from 'react';
import AddBookForm from '../../components/forms/add-book-form/AddBookForm';
import Spinner from '../../components/spinner/Spinner';
import { booksContext } from '../../providers/BookProvider';

import './books.css';

function Books({ initialAmount }) {
  const { books, loading } = useContext(booksContext);
  const [showForm, setShowForm] = useState(false);
  const { setAmount } = useContext(booksContext);

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount, setAmount]);

  const renderBooks = () => {
    if (loading) {
      return <Spinner />;
    }

    return (
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
    );
  };

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="text-muted">books</h2>
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
  );
}

export default Books;
