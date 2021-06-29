import { useContext, memo } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { booksContext } from '../../../providers/BookProvider'

function AddBookForm({ showForm }) {
  const { onBookAdd } = useContext(booksContext)

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const newBook = {
      ...data,
      isbn: uuid(),
      image:
        'https://i.pinimg.com/originals/76/00/ba/7600ba9d3305b21fc543a0e4599dd04d.gif',
    }

    onBookAdd(newBook)
    reset()
  }

  return (
    <form className="form mt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          {...register('title', {
            required: true,
          })}
        />
        {errors.title && (
          <div id="titleError" className="form-text text-danger">
            {errors.title.type === 'required' ? 'title is required' : ''}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          {...register('description', {
            required: true,
          })}
        />
        {errors.description && (
          <div id="descriptionError" className="form-text text-danger">
            {errors.description.type === 'required' ? 'description is required' : ''}
          </div>
        )}
      </div>

      <button className="btn btn-success" type="submit">
        Submit
      </button>

      <button
        className="btn btn-warning ms-1"
        type="button"
        onClick={() => showForm(false)}>
        Close
      </button>
    </form>
  )
}

AddBookForm.propTypes = {
  showForm: PropTypes.func.isRequired,
}

export default memo(AddBookForm)
