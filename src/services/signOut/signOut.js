import { getAuth, signOut } from 'firebase/auth'

const signout = async () => {
  const auth = getAuth()
  signOut(auth).then(() => {
  }).catch((error) => {
    console.log(error)
  })
}
export default signout
