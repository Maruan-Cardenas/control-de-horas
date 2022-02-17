import db from 'services/db.config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const SetDataDB = () => {
  const [dataDB, setDataDB] = useState({})
  const seconds = (dataDB.hours * 3600) + (dataDB.minuts * 60)

  const date = new Date()

  const FireDateNow = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  const DateNow = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  useEffect(() => {
    const jobsData = {
      client: dataDB.client,
      operator: dataDB.operator,
      description: dataDB.description,
      seconds: seconds,
      FireDate: Timestamp.fromDate(new Date(FireDateNow)),
      date: DateNow,
      uid: dataDB.uid
    }

    const clientData = {
      FireDate: Timestamp.fromDate(new Date(FireDateNow)),
      client: dataDB.client
    }

    if (dataDB.jobs === 'Jobs') {
      (async () => {
        await addDoc(collection(db, 'Jobs'), jobsData)
      })()
    }
    if (dataDB.newClient === 'Clients') {
      (async () => {
        await addDoc(collection(db, 'Clients'), clientData)
      })()
    }
  }, [dataDB, seconds, DateNow, FireDateNow])
  return [setDataDB]
}

export default SetDataDB
