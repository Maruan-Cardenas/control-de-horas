import { Formik, Form, Field } from 'formik'
import updateUser from 'services/updateUser/updateUser.js'

const UpdateUser = () => {
  return (
    <div className='form-container'>
      <Formik
        initialValues={{ user: '' }}
        onSubmit={values => {
          updateUser({ ...values })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              className='form-minuts'
              type='user'
              name='user'
              placeholder='Nuevo nombre'
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
export default UpdateUser
