import signout from 'services/signOut/signOut'
const SignOutComponent = () => {
  const handleClick = () => {
    signout()
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <button onClick={handleClick}>
      Cerrar Sesión
    </button>
  )
}
export default SignOutComponent
