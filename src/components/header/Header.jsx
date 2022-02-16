import './Header.scss'
import logo from 'images/logo.png'

import { Link } from 'react-router-dom'
import SignOutComponent from 'components/signOut/SignOutComponent'

import Session from 'services/session/Session'

const Header = () => {
  Session()
  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={logo} alt='Talleres Puente Sur' />
      </Link>
      <Link to='/newjob'>Nuevo Trabajo</Link>
      <SignOutComponent />
    </header>
  )
}

export default Header
