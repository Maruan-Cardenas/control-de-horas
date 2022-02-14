import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Session = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [session, setSession] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setSession(uid)
        return uid
      } else {
        navigate('/')
      }
    })
  }, [auth, navigate])
  return [session]
}
export default Session
