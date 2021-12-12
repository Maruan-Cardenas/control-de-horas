import './PopUp.css'
import { useContext } from 'react'
import SesionContext from 'context/sesionContext/SesionContext'

const PopUp = ({ component }) => {
  const { setPopUp } = useContext(SesionContext)
  const handleclosePopUp = () => {
    setPopUp(false)
  }
  return (
    <div className='popUp'>
      {
        component.type.name !== 'ImagePreview'
          ? <button onClick={handleclosePopUp} className='closePopUp'>X</button>
          : null
      }
      {
        component
      }
    </div>
  )
}

export default PopUp
