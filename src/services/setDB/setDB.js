import db from 'services/db.config'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const SetDataDB = () => {
  const [dataDB, setDataDB] = useState({})
  useEffect(() => {
    if (dataDB.jobs === 'Jobs') {
      (async () => {
        await addDoc(collection(db, dataDB.jobs), {
          client: dataDB.client,
          operator: dataDB.operator,
          description: dataDB.description,
          hours: dataDB.hours,
          minuts: dataDB.minuts
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
  }, [dataDB])
  return [setDataDB]
}

export default SetDataDB
