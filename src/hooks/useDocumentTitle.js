import { useEffect, useState } from 'react'

export const useDocumentTitle = (initialValue = 'useDocumentTitle') => {
  const [title, setTitle] = useState(initialValue)

  useEffect(() => {
    const oldTitle = document.title
    document.title = title
    return () => {
      document.title = oldTitle
    }
  }, [title])

  return [title, setTitle]
}
