import { doc, deleteDoc } from 'firebase/firestore'
import db from 'services/db.config'

const removeDB = (id, jobs) => {
  if (id && jobs) {
    (async () => {
      await deleteDoc(doc(db, jobs, id))
    })()
  }
}

export default removeDB
