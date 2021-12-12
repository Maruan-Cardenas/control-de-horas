import { useEffect, useContext } from 'react'
import { getAuth, GoogleAuthProvider, getRedirectResult } from 'firebase/auth'
import SesionContext from 'context/sesionContext/SesionContext'

export function useGoogleLogIn () {
  const auth = getAuth()
  const { setUserId } = useContext(SesionContext)
  useEffect(() => {
    getRedirectResult(auth)
      .then((user) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        // const token = credential.accessToken
        // console.log(token)
        // The signed-in user info
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        console.log(errorCode)
        const errorMessage = error.message
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.email
        console.log(email)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(credential)
        // ...
      })
  }, [auth, setUserId])
}
