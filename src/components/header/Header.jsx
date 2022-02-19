import { useContext } from 'react'
import './Header.scss'
import logo from 'images/logo.png'

import { Link } from 'react-router-dom'

import Session from 'services/session/Session'
import SessionContext from 'context/context.config'
const Header = () => {
  const { user } = useContext(SessionContext)
  Session()
  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={logo} alt='Talleres Puente Sur' />
      </Link>
      {
        user.uid && <Link to='/newjob'>Nuevo Trabajo</Link>
      }
      {
        user.uid && <Link to='/user'>{user.displayName}</Link>
      }
    </header>
  )
}

export default Header
