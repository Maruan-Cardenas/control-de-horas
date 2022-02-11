import { useState, useEffect } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import db from 'services/db.config'

const UpdateDB = (jobs, id) => {
  const [updateData, setUpdateData] = useState({})
  const { client, description, hours, minuts, send } = updateData
  const seconds = (hours * 3600) + (minuts * 60)
  console.log(send)
  useEffect(() => {
    if (send) {
      (async () => {
        await updateDoc(doc(db, jobs, id), {
          seconds: seconds,
          description: description,
          client: client
        })
      })()
    }
  }, [client, description, seconds, id, jobs, updateData, send])
  return [setUpdateData]
}

export default UpdateDB
