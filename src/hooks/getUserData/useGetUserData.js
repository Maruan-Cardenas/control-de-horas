import { useContext } from 'react'
import SesionContext from 'context/sesionContext/SesionContext'
import { getAuth } from 'firebase/auth'

export function useGetUserData () {
  const auth = getAuth()
  const user = auth.currentUser
  const { userId } = useContext(SesionContext)
  let userName
  let userImg
  let userUid
  let userEmail
  if (user) {
    userId.forEach(res => {
      userName = res.userName
      userUid = res.uid
      userImg = res.photo
      userEmail = res.email
    })
  }
  return { userName, userImg, userUid, userEmail }
}
