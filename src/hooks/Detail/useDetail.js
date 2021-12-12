import { useGetData } from 'hooks/Firestore/getData/useGetData'
import { useEffect, useState } from 'react'

const useDetail = (params) => {
  const [singleData, setSingleData] = useState()
  const game = params.page
  const { arrGames, loading } = useGetData({ game })

  useEffect(() => {
    setSingleData(arrGames.find(singleData => singleData.id === params.id))
  }, [arrGames, params.id, setSingleData])

  return [singleData, loading]
}

export default useDetail
