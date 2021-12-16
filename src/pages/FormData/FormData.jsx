import './FormData.css'
import Input from 'component/Input/Input'
import Textarea from 'component/Textarea/Textarea'
import Upload from 'images/icons/subir.png'
import Select from 'component/Select/Select'
import useValidateForm from 'hooks/Form/useValidateForm'
import useSetDataForm from 'hooks/Form/useSetDataForm'
import useImgForm from 'hooks/Form/useImgForm'
import SesionContext from 'context/sesionContext/SesionContext'
import ImagePreview from 'component/ImagePreview/ImagePreview'
import PopUp from 'component/PopUp/PopUp'
import { useContext } from 'react'

const FormData = () => {
  const { formulario, handleForm } = useValidateForm()
  const [handleSubmit] = useSetDataForm(formulario)
  const [handleFile, image, handleReset, handleSetImgForm] = useImgForm()
  const { notify, formError, popUp } = useContext(SesionContext)

  let disableddFile, labelDisabled, disabledImg, disabledButton
  if (formulario.img) {
    disableddFile = 'disabled'
    labelDisabled = 'labelDisabled'
  }
  if (image) disabledImg = 'disabled'

  if (formError.title === 'ok' && formError.description === 'ok' && formError.shop === 'ok' && formError.previousPrice === 'ok' && formError.actualPrice === 'ok' && formError.url === 'ok' && formError.plataform === 'ok' && (formError.img === 'ok' || formError.file === 'ok')) disabledButton = true

  return (
    <form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
      <Input
        type='text'
        label='Titulo:'
        name='title'
        modify={formError.title}
        value={formulario.title}
        placeholder='Pon el título (max 50 caracteres)'
        onChange={handleForm}
      />
      <Textarea
        label='Descripción:'
        name='description'
        modify={formError.description}
        value={formulario.description}
        placeholder='Descripcón del videojugo (max 1000 caracteres)'
        onChange={handleForm}
      />
      <Input
        label='URL de la imagen:'
        disabled={disabledImg}
        modify={formError.img}
        value={formulario.img}
        name='img'
        placeholder='http://www.url-de-la-imagen.com'
        onChange={handleForm}
      />
      <div className='url-or-fill '>( o )</div>
      <Input
        type='file'
        inputcss='file'
        disabled={disableddFile}
        labelcss={`label ${formError.file} ${labelDisabled}`}
        label='Sube una imágen'
        img={Upload}
        name='file'
        onChange={(e) => handleFile(e.target.files)}
      />
      {
        popUp === 'imagePreview' &&
          <PopUp component={<ImagePreview image={image} handleSetImgForm={handleSetImgForm} handleReset={handleReset} />} />
      }
      <Input
        label='Tienda:'
        name='shop'
        modify={formError.shop}
        value={formulario.shop}
        placeholder='Tienda'
        onChange={handleForm}
      />
      <Input
        type='text'
        label='Precio sin oferta:'
        name='previousPrice'
        modify={formError.previousPrice}
        value={formulario.previousPrice}
        placeholder='Precio sin oferta'
        onChange={handleForm}
      />
      <Input
        label='Precio con oferta:'
        modify={formError.actualPrice}
        value={formulario.actualPrice}
        name='actualPrice'
        placeholder='Precio con oferta'
        onChange={handleForm}
      />
      <Input
        label='URL de la oferta:'
        modify={formError.url}
        error={notify}
        value={formulario.url}
        name='url'
        placeholder='http://www.pagina-de-la-oferta.com'
        onChange={handleForm}
      />

      <Select
        name='plataform'
        modify={formError.plataform}
        onChange={handleForm}
      />
      {
        !disabledButton ? <div className='form-button grey'>Crear nueva oferta</div> : <button className='form-button' type='submit'>Crear nueva oferta</button>
      }
    </form>
  )
}
export default FormData
