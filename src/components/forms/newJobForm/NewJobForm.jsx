import React, { useState } from 'react'
import './NewJobForm.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import ObtainData from 'services/getDB/obtainData'
import NewClientModal from 'components/modal/newClient/NewClientModal'

const NewJobForm = () => {
  const [modal, setModal] = useState(false)
  const [jobs] = ObtainData('Clients')
  const initialValues = {
    operator: '',
    client: '',
    description: '',
    hours: ''
  }
  const modalSwitch = () => {
    setModal(!modal)
  }
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
            <ErrorMessage className='newJobForm-error' name='operator' component='div' />
            <div>
              <Field className='form-select-client' type='client' as='select' name='client'>
                <option value='operario' default>Clientes</option>
                {
                jobs.map((res, index) => (
                  <option key={index} value={res.name}>{res.name}</option>
                ))
                }
              </Field>
              <button type='button' className='button' onClick={modalSwitch}>Añadir</button>
            </div>
            {
              modal && <NewClientModal modalSwitch={modalSwitch} />
            }
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
            <button className='button' type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewJobForm
