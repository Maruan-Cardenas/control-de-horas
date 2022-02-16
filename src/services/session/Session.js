import { useEffect, useContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import SessionContext from 'context/context.config'
const Session = () => {
  const { setUser } = useContext(SessionContext)
  const auth = getAuth()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        navigate('/')
      }
    })
  }, [auth, navigate, setUser])
}
export default Session
