import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

function Modal({ showModal, setShowModal, children }) {
  return (
    <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader setShowModal={setShowModal} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  )
}

export default Modal
