import './User.css'
import Lapiz from 'images/icons/pencil.png'
import ImgRef from 'images/icons/imgHref.png'
import UserIcon from 'images/icons/user.png'
import EmailIcon from 'images/icons/email.png'
import NewIcon from 'images/icons/new.png'
import UserData from 'component/UserData/UserData'
import { useContext } from 'react'
import { useGetUserData } from 'hooks/getUserData/useGetUserData'
import { useLogOut } from 'hooks/logOut/useLogOut'
import SesionContext from 'context/sesionContext/SesionContext'
import CardUser from 'component/CardUser/CardUser'
import PopUp from 'component/PopUp/PopUp'
import ImagePreview from 'component/ImagePreview/ImagePreview'
import useImgForm from 'hooks/Form/useImgForm'

const User = () => {
  const { setPopUp, popUp } = useContext(SesionContext)
  const { setLogOut } = useLogOut()
  const { userName, userImg, userEmail } = useGetUserData()
  const [handleFile, image, handleReset, handleSetImgForm] = useImgForm()

  const handleLogOut = () => {
    setLogOut(true)
  }

  const handlePopUp = (name) => {
    setPopUp(name)
  }

  return (
    <section className='user-container'>
      <article className='user-data'>
        <label>
          <img src={userImg} alt={userName} />
          <input type='file' onChange={(e) => handleFile(e.target.files)} placeholder={userName} />
          {
            popUp === 'imagePreview' &&
              <PopUp component={<ImagePreview image={image} handleSetImgForm={handleSetImgForm} handleReset={handleReset} />} />
          }
        </label>
        <div className='user-component'>
          <UserData
            icon={UserIcon}
            name={userName}
            handle={() => handlePopUp('changeName')}
            imgB={Lapiz}
          />
          <UserData
            icon={EmailIcon}
            name={userEmail}
          />
          <UserData
            icon={NewIcon}
            name='Añadir Oferta'
            href='/Formulario'
            imgR={ImgRef}
          />
        </div>
        <button className='user-logOut' onClick={handleLogOut}>Cerrar Sesión</button>
      </article>
      <article className='user-cards'>
        <h2 className='user-cards__title'>Tus ofertas</h2>
        <div className='user-cards__items'>
          <CardUser game='Nintendo' />
          <CardUser game='Playstation' />
          <CardUser game='Xbox' />
          <CardUser game='PC' />
        </div>
        <div>
          <button className='user-cards__button' onClick={() => handlePopUp('moreArticles')}>Ver más...</button>
        </div>
      </article>
    </section>
  )
}

export default User
