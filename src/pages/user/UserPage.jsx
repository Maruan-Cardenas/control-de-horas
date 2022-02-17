import './UserPage.scss'
import User from 'components/user/User'

const UserPage = ({ user }) => {
  return (
    <main className='userPage-container'>
      <h2>Dashboar de {user}</h2>
      <User />
    </main>
  )
}
export default UserPage
