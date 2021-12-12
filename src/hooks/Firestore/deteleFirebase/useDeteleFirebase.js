import { useState, useEffect } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import db from 'firebase/firebaseKey'

export const useDeteleFirebase = () => {
  let id = '0'
  let page = '0'
  const [detele, setDetele] = useState([])
  detele.forEach((res) => {
    id = res.id
    page = res.page
  })
  useEffect(() => {
    (async () => {
      await deleteDoc(doc(db, page, id))
    })()
  }, [id, page])

  return { detele, setDetele }
}
