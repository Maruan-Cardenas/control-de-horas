import './SignOutComponent.scss'
import signout from 'services/signOut/signOut'
const SignOutComponent = () => {
  const handleClick = () => {
    signout()
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <button onClick={handleClick} className='signOut-button'>
      Cerrar Sesión
    </button>
  )
}
export default SignOutComponent
