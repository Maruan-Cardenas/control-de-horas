import { useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import SesionContext from 'context/sesionContext/SesionContext'

export function useSesion () {
  const auth = getAuth()
  const { setUserId } = useContext(SesionContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('name', user.displayName)
        localStorage.setItem('image', user.photoURL)
        setUserId([{
          uid: user.uid,
          email: user.email,
          userName: user.displayName,
          photo: user.photoURL
        }])
      } else {
        console.log('Sesión Cerrada')
      }
    })
  }, [auth, setUserId])
}
