import { getAuth, updateProfile } from 'firebase/auth'

const updateUser = (name) => {
  const auth = getAuth()
  updateProfile(auth.currentUser, {
    displayName: name.user
  }).then(() => {

  }).catch((error) => {
    console.log(error)
  })
}
export default updateUser
