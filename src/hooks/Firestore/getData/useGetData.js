import { useGetFirebase } from 'hooks/Firestore/getFirebase/useGetFirebase'

export function useGetData ({ game }) {
  const { games, loading } = useGetFirebase({ game })
  const arrGames = []

  games.forEach(res => {
    arrGames.push({ ...res.data(), id: res.id })
  })

  return { arrGames, loading }
}
