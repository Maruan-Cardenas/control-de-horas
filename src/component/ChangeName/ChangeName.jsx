import './ChangeName.css'
import { useContext } from 'react'
import SesionContex from 'context/sesionContext/SesionContext'
import { getAuth, updateProfile } from 'firebase/auth'
import { useGetUserData } from 'hooks/getUserData/useGetUserData'
import useImgForm from 'hooks/Form/useImgForm'
import useSetName from 'hooks/userName/useSetName'
import useGetName from 'hooks/userName/useGetName'
import Upload from 'images/icons/subir.png'
import PopUp from 'component/PopUp/PopUp'
import ImagePreview from 'component/ImagePreview/ImagePreview'

const ChangeName = ({ input }) => {
  const { setPopUp, popUp, setNotify, notify } = useContext(SesionContex)
  const [handleFile, image, handleReset, handleSetImgForm] = useImgForm()
  const { userName } = useGetUserData()
  const auth = getAuth()
  let newName
  const [setNameDb] = useSetName()
  const [arrName] = useGetName()
  const nameUser = []

  arrName.map(res => (
    nameUser.push(res.userName)
  ))

  const handleNameChange = (e) => {
    if (nameUser.includes(e.target.value)) {
      setNotify('NameError')
    } else {
      newName = e.target.value
      setNotify(false)
    }
  }

  const handleSetChange = (e) => {
    e.preventDefault()
    updateProfile(auth.currentUser, {
      displayName: newName
    }).then(() => {
      setNameDb(newName)
      setPopUp(false)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <section className='change-container'>
      {
      input === 'changeName' &&
        <article className='change-container__inputText'>
          <form>
            <label>
              Indica tu nuevo nombre:
              <div>
                <input onChange={handleNameChange} type='text' placeholder={userName} />
              </div>
            </label>
            <button onClick={handleSetChange}>Cambiar</button>
          </form>
          {
            notify === 'NameError' &&
              <div className='error'>El nombre de usuario {newName} no es válido</div>
          }
        </article>
      }
      {
      input === 'changeImage' &&
        <form className='change-container__inputFile'>
          <label>
            Sube tu nueva imagen
            <img src={Upload} alt='Upload' />
            <input type='file' onChange={(e) => handleFile(e.target.files)} placeholder={userName} />
          </label>
          <button>Cambiar</button>
          {
            popUp === 'imagePreview' &&
              <PopUp component={<ImagePreview image={image} handleSetImgForm={handleSetImgForm} handleReset={handleReset} />} />
          }
        </form>
      }
    </section>
  )
}

export default ChangeName
