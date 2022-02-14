import { Formik, Form, Field } from 'formik'
import signIn from 'services/signIn/signIn'

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  return (
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
        onSubmit={values => {
          signIn(values.email, values.password)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type='email'
              name='email'
              placeholder='email'
            />
            <Field
              type='password'
              name='password'
              placeholder='Contraseña'
            />
            <button className='button' type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignInForm
