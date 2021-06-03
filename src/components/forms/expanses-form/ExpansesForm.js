import { useEffect, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ExpansesFilter } from '../../filters/ExpansesFilter'
import { expansesContext } from '../../../contexts/expansesContext'

function ExpansesForm () {
  const { onExpanseSubmit: onSubmit, selectedExpanse } = useContext(expansesContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState('')

  useEffect(() => {
    if (selectedExpanse) {
      setTitle(selectedExpanse.title)
      setAmount(selectedExpanse.amount)
      setDate(new Date(selectedExpanse.date).toDateString())
    }
  }, [selectedExpanse])

  const onSubmitHandler = (event) => {
    event.preventDefault()
    onSubmit({
      title,
      amount,
      date,
      id: uuidv4()
    })

    setTitle('')
    setAmount(0)
    setDate('')
  }

  return (
    <>
      <form
        className="form d-flex justify-content-between flex-wrap"
        onSubmit={onSubmitHandler}>
        <div className="mb-3 col-8">
          <label htmlFor="title" className="form-label">
            ხარჯის დასახელება
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={({ target }) => {
              setTitle(target.value)
            }}
            value={title}
            required
          />
        </div>
        <div className="mb-3 col-3">
          <label htmlFor="amount" className="form-label">
            გადახდილი თანხა
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={({ target }) => {
              setAmount(target.value)
            }}
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="date" className="form-label">
            თარიღი
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={({ target }) => {
              setDate(target.value)
            }}
            required
          />
        </div>
        <div className="mb-3 col-12">
          <button type="submit" className="btn btn-success">
            ხარჯის {selectedExpanse ? 'რედაქტირება' : 'შექმნა'}
          </button>
        </div>
      </form>
      <ExpansesFilter />
    </>
  )
}

export default ExpansesForm
