import React, { useEffect } from 'react'

export const ChildComponent = ({ fetchData }) => {
  console.log('CHILD COMPONENT RENDER')

  useEffect(() => {
    fetchData('ChildComponent')
  }, [fetchData])
  return (
    <div className="row mt-1">
      <h2 className="text-danger">ChildComponent</h2>
    </div>
  )
}

export default React.memo(ChildComponent)
