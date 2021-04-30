export const ExpansesListItem = ({ item }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.title}</div>
        {item.date}
      </div>
      <span className="badge bg-success p-2">${item.amount}</span>
    </li>
  );
};
