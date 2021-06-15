import { useState } from 'react'
import ExpansesForm from '../../components/forms/expanses-form'
import { ExpansesList } from '../../components/list'
import Modal from '../../components/modal'

function Expanses() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="expanses container">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h2>Custom Context</h2>
      </Modal>
      <div className="row mt-5">
        <h2 className="col-4 mx-auto text-muted text-center">ჩემი ხარჯები</h2>
        <button
          className="col-4 mx-auto  text-center btn btn-warning"
          type="button"
          onClick={() => {
            setShowModal(true)
          }}>
          Show Modal
        </button>
      </div>
      <div className="row mt-3">
        <div className="col-6 mx-auto">
          <ExpansesForm />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-8 mx-auto mb-5">
          <ExpansesList />
        </div>
      </div>
    </div>
  )
}

export default Expanses
