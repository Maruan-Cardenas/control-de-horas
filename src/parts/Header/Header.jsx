import { useContext } from 'react'
import './Header.css'
import logo from 'logo.png'
import { useGetUserData } from 'hooks/getUserData/useGetUserData'
import SesionContext from 'context/sesionContext/SesionContext'
import { useSesion } from 'hooks/sesion/useSesion'

const Header = () => {
  useSesion()
  const { setPopUp } = useContext(SesionContext)
  const { userName } = useGetUserData()

  const handleLoingButton = () => {
    setPopUp('LogIn')
  }

  const sesion = localStorage.getItem('name')
  const userImg = localStorage.getItem('image')

  return (
    <header className='header'>
      <a className='header-img__link' href='/'>
        <img src={logo} alt='Logo' className='header-img' />
      </a>
      <nav className='header-nav'>
        <ul className='header-ul'>
          <li className='header-li'><a className='header-li__a' href='/Nintendo'>Nintendo</a></li>
          <li className='header-li'><a className='header-li__a' href='/Playstation'>Playstation</a></li>
          <li className='header-li'><a className='header-li__a' href='/Xbox'>Xbox</a></li>
          <li className='header-li'><a className='header-li__a' href='/PC'>PC</a></li>
        </ul>
      </nav>
      {
        sesion
          ? <a href='/user' className='header-logIn__link'><img className='header-logIn__img' src={userImg} alt={userName} /></a>
          : <button onClick={handleLoingButton} className='header-logIn__button'>Iniciar Sesión</button>
      }
    </header>
  )
}

export default Header
