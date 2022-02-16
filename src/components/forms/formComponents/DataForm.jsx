// Components
import { Formik, Form, Field } from 'formik'
import ClientsList from '../formComponents/ClientList'
import NewClient from '../formComponents/NewClient'
// Routes
import { useNavigate } from 'react-router-dom'
// Data

const DataForm = ({ initialValues, setDataDB, newClient, modalSwitch }) => {
  const navigate = useNavigate()
  return (
    <div className='form-container'>
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
          const CLIENT = newClient ? 'Clients' : ''
          setDataDB({ ...values, newClient: CLIENT })
          setTimeout(() => {
            navigate('/')
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-clients'>
              {
                newClient
                  ? <NewClient />
                  : <ClientsList />
              }
              <button type='button' className='button' onClick={modalSwitch} disabled={newClient}>Añadir</button>
            </div>
            <Field
              type='description'
              name='description'
              placeholder='Descripción'
            />
            <div className='form-time'>
              <Field
                type='number'
                name='hours'
                placeholder='Horas'
              />
              <span>:</span>
              <Field
                className='form-minuts'
                type='number'
                name='minuts'
                placeholder='Minutos'
              />
            </div>
            <button className='button' type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DataForm
