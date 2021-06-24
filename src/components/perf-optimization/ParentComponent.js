import React, { useState, useMemo, useEffect, useCallback } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  const [state, setState] = useState(0)

  const numbers = useMemo(() => [1, 2, 3, 4, 5, 6], [])

  const fetchData = useCallback(async (action) => {
    setTimeout(() => {
      console.log('FETCHED DATA', action)
    }, 1500)
  }, [])

  useEffect(() => {
    fetchData('ParentComponent')
  }, [])

  return (
    <div className="row">
      <div className="col-6">
        <h2 className="fs-1 text-primary">ParentComponent - {state}</h2>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setState(Math.floor(Math.random() * 100))}>
          Change State
        </button>
      </div>

      <ChildComponent title="title props" numbers={numbers} fetchData={fetchData} />
    </div>
  )
}

export default React.memo(ParentComponent)
