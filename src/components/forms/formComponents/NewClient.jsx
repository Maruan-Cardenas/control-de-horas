import { Field } from 'formik'

const NewClient = () => {
  return (
    <Field
      className='form-select-client'
      type='client'
      name='client'
      placeholder='Escribe el nombre del cliente'
    />
  )
}

export default NewClient
