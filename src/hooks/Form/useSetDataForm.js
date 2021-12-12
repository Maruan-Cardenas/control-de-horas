import { useContext } from 'react'
import { useLocation } from 'wouter'
import { collection, addDoc } from 'firebase/firestore'
import db from 'firebase/firebaseKey'
import SesionContext from 'context/sesionContext/SesionContext'
import { useGetUserData } from 'hooks/getUserData/useGetUserData'

const useSetDataForm = (formulario) => {
  const { userUid } = useGetUserData()
  const { setNotify, urlBb } = useContext(SesionContext)
  const [, navigate] = useLocation()

  const date = new Date()
  const dateNow = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  let img
  urlBb ? img = urlBb : img = formulario.img

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formulario.title || !formulario.description || !formulario.previousPrice || !formulario.actualPrice || !img || !formulario.url || !formulario.shop || !formulario.plataform) {
      setNotify({ text: 'No puede quedar ningún campo vacio', color: 'red' })
    } else {
      await addDoc(collection(db, formulario.plataform), {
        title: formulario.title,
        description: formulario.description,
        img: img,
        actualPrice: formulario.actualPrice,
        previousPrice: formulario.previousPrice,
        url: formulario.url,
        shop: formulario.shop,
        date: dateNow,
        userID: userUid
      })
    }
    setNotify({ text: '¡Felicidades! la oferta se ha creado correctamente', color: 'green' })
    navigate('/')
  }
  return [handleSubmit]
}

export default useSetDataForm
