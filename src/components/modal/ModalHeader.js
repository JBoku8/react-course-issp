function ModalHeader({ setShowModal }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title">Modal title</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => setShowModal(false)}></button>
    </div>
  )
}

export default ModalHeader
