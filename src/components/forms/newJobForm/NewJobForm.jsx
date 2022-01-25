import './NewJobForm.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'

const NewJobForm = () => {
  const initialValues = {
    operator: '',
    client: '',
    description: '',
    hours: ''
  }
  return (
    <div className='form-container'>
      <Formik
        initialValues={initialValues}
        validate={values => {
          console.log(values.operator)
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
        {({ isSubmitting, errors }) => (
          <Form>
            <Field type='operator' as='select' name='operator'>
              <option value='operario' default>Operario</option>
              <option value='Manuel Campos'>Manuel Campos</option>
              <option value='Antonio Valera'>Antonio Valera</option>
              <option value='Antonio Jesús'>Antonio Jesús</option>
              <option value='Miguel Baena'>Miguel Baena</option>
              <option value='Miguel Mayo'>Miguel Mayo</option>
            </Field>
            <ErrorMessage name='operator' component='div' />
            <Field
              type='client'
              name='client'
              placeholder='Cliente'
            />
            <Field
              type='description'
              name='description'
              placeholder='Descripción'
            />
            <Field
              type='number'
              name='hours'
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
