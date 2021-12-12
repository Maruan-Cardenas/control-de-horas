import './LogIn.css'
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth'
import GoogleLogo from 'GoogleLogo.svg'

const LogIn = () => {
  const handleGoogleLogIn = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    signInWithRedirect(auth, provider)
  }

  return (
    <div className='login-container'>
      <div className='login-box'>
        <button className='login-button' onClick={handleGoogleLogIn}>
          <img className='login-img' src={GoogleLogo} alt='Google' />
        </button>
      </div>
    </div>
  )
}

export default LogIn
