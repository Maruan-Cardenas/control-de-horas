import './NewJobForm.scss'

import { Formik, Form, Field } from 'formik'

const NewJobForm = () => {
  const initialValues = {
    operario: '',
    cliente: '',
    concepto: '',
    horas: ''
  }
  return (
    <div className='form-container'>
      <Formik
        initialValues={initialValues}
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
              type='text'
              name='operario'
              placeholder='Operario'
            />
            <Field
              type='text'
              name='cliente'
              placeholder='Cliente'
            />
            <Field
              type='text'
              name='concepto'
              placeholder='Concepto'
            />
            <Field
              type='number'
              name='horas'
              placeholder='Horas'
            />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewJobForm
