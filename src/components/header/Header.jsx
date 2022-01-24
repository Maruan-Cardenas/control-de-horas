import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to='/newjob'>Nuevo Trabajo</Link>
      <Link to='/jobs'>Trabajos</Link>
    </header>
  )
}

export default Header
