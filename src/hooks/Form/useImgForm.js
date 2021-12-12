import { useState, useContext } from 'react'
import imgbbUploader from 'imgbb-uploader'
import SesionContext from 'context/sesionContext/SesionContext'

const useImgForm = () => {
  const [image, setImage] = useState()
  const [image64, setImage64] = useState()
  const { setPopUp, setUrlBb, formError, setFormError, setNotify } = useContext(SesionContext)
  let reader
  let preBase64

  const handleFile = (files) => {
    Array.from(files).forEach(file => {
      if (file.type === 'image/png' ||
          file.type === 'image/jpeg' ||
          file.type === 'image/jpg' ||
          file.type === 'image/svg+xml' ||
          file.type === 'image/gif') {
        reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setImage(reader.result)
          preBase64 = reader.result
          setImage64(preBase64.split(','))
          setPopUp('imagePreview')
        }
      } else {
        setFormError({ ...formError, file: 'fileError' })
        setNotify({ text: 'El fomarto de imagen no es válido, solo se acepta, png, jpg, pjeg, svg y gif', color: 'red' })
      }
    })
  }

  const handleSetImgForm = () => {
    const base64str = () =>
      new Promise((resolve) => {
        return setTimeout(() => {
          resolve(
            image64[1]
          )
        }, 1000)
      })
    const myUrl = async () => {
      return await imgbbUploader({
        apiKey: 'fa047856cb6241aff350bb92686d39d4',
        base64string: await base64str()
      })
        .then((res) => {
          // console.log(`Handle success: ${res.url}`)
          setUrlBb(res.url)
          setFormError({ ...formError, file: 'ok' })
          setPopUp(false)
        })
        .catch((e) => {
          console.error(`Handle error: ${e}`)
          return 'http://placekitten.com/300/300'
        })
    }
    myUrl()
  }

  const handleReset = () => {
    setFormError({ ...formError, file: '' })
    setPopUp(false)
    setImage(false)
  }

  return [handleFile, image, handleReset, handleSetImgForm]
}
export default useImgForm
