import css from './bookCard.module.css';

export const BookCard = ({ item }) => {
  return (
    <div className="card border-0 col-4 book-item mb-2 p-3">
      <img
        className="card-img-top img-fluid h-50"
        src={item.image}
        alt={item.title}
      />
      <h2 className={`card-title ${css.title}`}>{item.title}</h2>
      <div className="card-body">{item.description}</div>
    </div>
  );
};
