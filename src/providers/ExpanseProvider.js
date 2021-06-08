import { useContext, useState } from 'react'

import { expansesContext } from '../contexts/expansesContext'
import { expansesList } from '../data'
import { SORT_TYPE } from '../utils'

function ExpanseProvider({ children }) {
  const [expansesData, setExpansesData] = useState(expansesList)
  const [selectedExpanse, setSelectedExpanse] = useState(null)

  const onExpanseSubmit = (data) => {
    if (selectedExpanse) {
      // update
      const index = expansesData.findIndex((item) => item.id === selectedExpanse.id)
      const leftData = expansesData.slice(0, index)
      const updatedItem = {
        ...expansesData[index],
        ...data,
      }
      const rightData = expansesData.slice(index + 1)

      setExpansesData([...leftData, updatedItem, ...rightData])
      setSelectedExpanse(null)
    } else {
      setExpansesData([...expansesData, data])
    }
  }

  const onSortHandler = (sortBy) => {
    let sorted = [...expansesData]
    if (sortBy === SORT_TYPE.ASC) {
      sorted = sorted.sort((a, b) => a.amount - b.amount)
    } else if (sortBy === SORT_TYPE.DESC) {
      sorted = sorted.sort((a, b) => b.amount - a.amount)
    }

    setExpansesData(sorted)
  }

  return (
    <expansesContext.Provider
      value={{
        onExpanseSubmit,
        selectedExpanse,
        setSelectedExpanse,
        onSortHandler,
        expansesData,
      }}>
      {children}
    </expansesContext.Provider>
  )
}

export const useExpanses = () => {
  const { expansesData } = useContext(expansesContext)
  if (!expansesData) {
    throw Error('invalid expanse context')
  }
  return expansesData
}

export default ExpanseProvider
