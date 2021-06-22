export const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="d-flex align-items-center mt-5 mb-5">
      <strong>{message}</strong>
      <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
  )
}

export default Spinner
