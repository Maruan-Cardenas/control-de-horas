import { useState } from 'react'

import { getAuth, signOut } from 'firebase/auth'

export function useLogOut () {
  const [logOut, setLogOut] = useState(false)
  const auth = getAuth()

  if (logOut) {
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.removeItem('name', 'image')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    })
  }
  return { setLogOut }
}
