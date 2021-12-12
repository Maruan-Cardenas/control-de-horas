import db from 'firebase/firebaseKey'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useSetName = () => {
  const [nameDb, setNameDb] = useState()
  useEffect(() => {
    if (nameDb) {
      (async () => {
        await addDoc(collection(db, 'users'), {
          userName: nameDb
        })
      })()
    }
  }, [nameDb])
  return [setNameDb]
}

export default useSetName
