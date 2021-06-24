import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Greeting from '../../components/greeting'
import ParentComponent from '../../components/perf-optimization/ParentComponent'
import Spinner from '../../components/spinner/Spinner'
import { Button } from '../../components/ui'
import useFetch from '../../hooks/useFetch'

import {
  addNumberAction,
  resetNumberAction,
  subtractNumberAction,
} from '../../redux/actions'
import { counterSelector } from '../../redux/selectors'

function Home() {
  const [showGreeting, setShowGreeting] = useState(false)
  const dispatch = useDispatch()
  const counter = useSelector(counterSelector)

  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}/companies?_quantity=1`
  )

  const onGreetingClick = () => {
    setShowGreeting(!showGreeting)
    dispatch({
      type: 'INVALID_ACTION',
    })
  }

  const renderGreeting = () => {
    if (!showGreeting) return null

    return (
      <>
        <Greeting text="Introduction" />
        <Greeting text="ReactJS Rocks." />
      </>
    )
  }

  const renderCompanies = () => {
    if (error) {
      return (
        <div className="alert alert-danger">
          <pre>{JSON.stringify(error)}</pre>
        </div>
      )
    }

    if (loading || !data) {
      return <Spinner />
    }

    return (
      <div className="col-12">
        <h2 className="text-muted">Data.length {data.data.length}</h2>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-12 my-3 shadow">
        <ParentComponent />
      </div>

      <div className="col-12 mb-2 btn-group">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addNumberAction(10))}>
          Add Number - Action
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(subtractNumberAction(7))}>
          Subtract Number - Action
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(resetNumberAction())}>
          Reset Number - Action
        </button>
      </div>
      <div>
        <p className="shadow p-2 border fs-1 text-center">{counter}</p>
      </div>
      <div className="col-12 mb-4">
        <h2 className="text-muted">Home Page</h2>
        <div className="col-4 align-items-center d-flex">
          <Button
            className="btn btn-dark"
            onClick={onGreetingClick}
            text={`${showGreeting ? 'Hide' : 'Show'} Greeting`}
          />
        </div>
        <div className="col-8 border bg-light">{renderGreeting()}</div>
      </div>
      {renderCompanies()}
    </div>
  )
}

export default Home
