import { useState, useContext } from 'react'
import SesionContext from 'context/sesionContext/SesionContext'

const useValidateForm = () => {
  const [formulario, setFormulario] = useState({ img: '', title: '', description: '', previousPrice: '', actualPrice: '', shop: '', url: '', plataform: '' })
  const { setNotify, formError, setFormError } = useContext(SesionContext)

  const expReg = {
    price: /[0-9]+((,|\.)?[0-9]{2})/,
    url: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/
  }

  const handleForm = (e) => {
    setFormulario({ ...formulario })
    if (e.target.name === 'title') {
      if (formulario.title.length <= 50) {
        setFormulario({ ...formulario, title: e.target.value })
        setFormError({ ...formError, title: 'ok' })
      } else {
        setNotify({ text: 'El campo Titulo no puede contener más de 50 caracteres', color: 'red' })
        setFormError({ ...formError, title: 'formError' })
        setFormulario({ ...formulario, title: formulario.title.slice(0, 50) })
      }
    } else if (e.target.name === 'description') {
      if (formulario.description.length <= 1000) {
        setFormulario({ ...formulario, description: e.target.value })
        setFormError({ ...formError, description: 'ok' })
      } else {
        setNotify({ text: 'El campo Descripción no puede contener más de 1000 caracteres', color: 'red' })
        setFormError({ ...formError, description: 'formError' })
        setFormulario({ ...formulario, description: formulario.description.slice(0, 1000) })
      }
    } else if (e.target.name === 'shop') {
      if (formulario.shop.length <= 20) {
        setFormulario({ ...formulario, shop: e.target.value })
        setFormError({ ...formError, shop: 'ok' })
      } else {
        setNotify({ text: 'El campo Tienda no puede contener más de 20 caracteres', color: 'red' })
        setFormError({ ...formError, shop: 'formError' })
        setFormulario({ ...formulario, shop: formulario.shop.slice(0, 20) })
      }
    } else if (e.target.name === 'previousPrice') {
      if (!expReg.price.test(e.target.value)) {
        setNotify({ text: 'El campo precio sin oferta no es válido', color: 'red' })
        setFormError({ ...formError, previousPrice: 'formError' })
        setFormulario({ ...formulario, previousPrice: e.target.value })
      } else {
        setFormError({ ...formError, previousPrice: 'ok' })
        setFormulario({ ...formulario, previousPrice: e.target.value })
      }
    } else if (e.target.name === 'actualPrice') {
      if (!expReg.price.test(e.target.value)) {
        setNotify({ text: 'El campo precio con oferta no es válido', color: 'red' })
        setFormError({ ...formError, actualPrice: 'formError' })
        setFormulario({ ...formulario, actualPrice: e.target.value })
      } else {
        setFormError({ ...formError, actualPrice: 'ok' })
        setFormulario({ ...formulario, actualPrice: e.target.value })
      }
    } else if (e.target.name === 'url') {
      if (!expReg.url.test(e.target.value)) {
        setFormulario({ ...formulario, url: e.target.value })
        setFormError({ ...formError, url: 'formError' })
        setNotify({ text: 'La URL introducida contine un formato incorrecto', color: 'red' })
      } else {
        setFormulario({ ...formulario, url: e.target.value })
        setNotify(false)
        setFormError({ ...formError, url: 'ok' })
      }
    } else if (e.target.name === 'img') {
      if (!expReg.url.test(e.target.value)) {
        setFormulario({ ...formulario, img: e.target.value })
        setFormError({ ...formError, img: 'formError' })
        setNotify({ text: 'La URL introducida contine un formato incorrecto', color: 'red' })
      } else {
        setFormulario({ ...formulario, img: e.target.value })
        setNotify(false)
        setFormError({ ...formError, img: 'ok' })
      }
    } else if (e.target.name === 'plataform') {
      if (e.target.value === 'Selecciona una plataforma') {
        setFormError({ ...formError, plataform: 'selectError' })
        setNotify({ text: 'Por favor selecciona una plataforma', color: 'red' })
        setFormulario({ ...formulario, plataform: '' })
      } else {
        setFormError({ ...formError, plataform: 'ok' })
        setFormulario({ ...formulario, plataform: e.target.value })
        setNotify(false)
      }
    }
  }

  return { formulario, handleForm }
}

export default useValidateForm
