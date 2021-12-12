import { useContext } from 'react'
import SesionContext from 'context/sesionContext/SesionContext'

const useNotifyDetele = () => {
  const { setNotify } = useContext(SesionContext)

  const handleDetele = () => {
    setTimeout(() => {
      setNotify('')
    }, 5000)
  }
  return [handleDetele]
}

export default useNotifyDetele
