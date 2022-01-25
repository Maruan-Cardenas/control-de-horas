import { useState, useEffect } from 'react'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import db from 'services/db.config'

const GetDB = (jobDb) => {
  const [loading, setLoadig] = useState(false)
  const [job, setJob] = useState([])
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, jobDb), limit(10)))
      setJob(querySnapshot)
      setLoadig(true)
    })()
  }, [jobDb, setJob])

  return [job, loading]
}

export default GetDB
