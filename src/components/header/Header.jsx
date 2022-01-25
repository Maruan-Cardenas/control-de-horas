import './Header.scss'
import logo from 'images/logo.png'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-container'>
      <Link to='/'>
        <img src={logo} alt='Talleres Puente Sur' />
      </Link>
      <Link to='/newjob'>Nuevo Trabajo</Link>
    </header>
  )
}

export default Header
