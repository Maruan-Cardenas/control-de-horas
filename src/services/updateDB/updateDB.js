import { doc, updateDoc } from 'firebase/firestore'
import db from 'services/db.config'

const updateDB = (Jobs, id) => {
  const dataRef = doc(db, Jobs, id);

  (async () => {
    await updateDoc(dataRef, {
      capital: true
    })
  })()
}

export default updateDB
