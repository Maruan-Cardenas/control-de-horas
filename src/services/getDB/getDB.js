import { useState, useEffect } from 'react'
// import { collection, getDocs, query, limit } from 'firebase/firestore'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from 'services/db.config'

const GetDB = (jobDb) => {
  const [loading, setLoadig] = useState(false)
  const [job, setJob] = useState([])
  useEffect(() => {
    let unSub
    (async () => {
      const q = query(collection(db, jobDb), orderBy('FireDate', 'desc'))
      unSub = onSnapshot(q, (querySnapshot) => {
        setJob(querySnapshot)
        setLoadig(true)
      })
    })()
    return () => unSub()
  }, [jobDb, setJob])

  return [job, loading]
}

export default GetDB
