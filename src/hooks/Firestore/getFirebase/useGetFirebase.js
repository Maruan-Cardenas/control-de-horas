import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import db from 'firebase/firebaseKey'

export function useGetFirebase ({ game, max }) {
  const [loading, setLoadig] = useState(false)
  const [games, setGames] = useState([])
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, game), orderBy('date'), limit(max)))
      setGames(querySnapshot)
      setLoadig(true)
    })()
  }, [game, max, setGames])

  return { games, loading }
}
