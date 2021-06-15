function ModalFooter({ setShowModal }) {
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={() => setShowModal(false)}>
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </div>
  )
}

export default ModalFooter
