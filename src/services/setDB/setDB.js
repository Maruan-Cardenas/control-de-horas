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
          hours: dataDB.hours
        })
      })()
    } else if (dataDB.clients === 'Clients') {
      (async () => {
        await addDoc(collection(db, 'Clients'), {
          name: dataDB.name
        })
      })()
    }
  }, [dataDB])
  return [setDataDB]
}

export default SetDataDB
