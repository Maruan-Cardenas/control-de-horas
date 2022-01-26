import './NewClientModal.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'

const NewClientModal = ({ modalSwitch }) => {
  const initialValues = {
    client: ''
  }
  return (
    <div className='newClient-container'>
      <button className='button' onClick={modalSwitch}>X</button>
      <div>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors = {}
            if (values.operator === 'operario' || values.operator === '') {
              errors.operator = 'Debes seleccionar tú nombre'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type='client'
                name='client'
                placeholder='Escribe el nombre del cliente'
              />
              <ErrorMessage className='newJobForm-error' name='operator' component='div' />
              <button className='button' type='submit' disabled={isSubmitting}>
                Añadir
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewClientModal
