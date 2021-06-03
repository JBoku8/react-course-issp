import { useEffect, useState } from 'react'

export const useBackgroundColor = (initialValue = 'red') => {
  const [color, setColor] = useState(initialValue)

  useEffect(() => {
    document.body.style.backgroundColor = color
    return () => {
      document.body.style.backgroundColor = 'initial'
    }
  }, [color])

  return [color, setColor]
}
