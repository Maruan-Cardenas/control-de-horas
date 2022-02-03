import db from 'services/db.config'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const SetDataDB = () => {
  const [dataDB, setDataDB] = useState({})
  const seconds = (dataDB.hours * 3600) + (dataDB.minuts * 60)
  useEffect(() => {
    if (dataDB.jobs === 'Jobs') {
      (async () => {
        await addDoc(collection(db, dataDB.jobs), {
          client: dataDB.client,
          operator: dataDB.operator,
          description: dataDB.description,
          seconds: seconds
        })
        console.log(dataDB)
      })()
    }
    if (dataDB.newClient === 'Clients') {
      (async () => {
        await addDoc(collection(db, dataDB.newClient), {
          client: dataDB.client
        })
        console.log(dataDB)
      })()
    }
  }, [dataDB, seconds])
  return [setDataDB]
}

export default SetDataDB
