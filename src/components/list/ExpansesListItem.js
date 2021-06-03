import { useContext } from 'react'
import { expansesContext } from '../../contexts/expansesContext'

import './list-item.css'

export const ExpansesListItem = ({ item }) => {
  const { setSelectedExpanse: onClick } = useContext(expansesContext)

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-start cursor-pointer"
      onClick={() => onClick(item)}>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.title}</div>
        {item.date}
      </div>
      <span className="badge bg-success p-2">${item.amount}</span>
    </li>
  )
}
