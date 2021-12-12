import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from 'firebase/firebaseKey'

const useGetName = () => {
  const [name, setName] = useState([])
  const arrName = []
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, 'users'))
      setName(querySnapshot)
    })()
  }, [setName])
  name.forEach(res => {
    arrName.push({ ...res.data() })
  })

  return [arrName]
}

export default useGetName
