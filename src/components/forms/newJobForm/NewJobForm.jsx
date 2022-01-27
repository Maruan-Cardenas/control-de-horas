import React, { useState } from 'react'
import './NewJobForm.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import ClientsList from '../formComponents/ClientList'
import NewClient from '../formComponents/NewClient'

import SetDataDB from 'services/setDB/setDB'
import { operators } from 'array/operatos.array'

import { useNavigate } from 'react-router-dom'

const NewJobForm = () => {
  const navigate = useNavigate()
  const [setDataDB] = SetDataDB()
  const [modal, setModal] = useState(false)

  const modalSwitch = () => {
    setModal(!modal)
  }

  const initialValuesNewJob = {
    operator: '',
    client: '',
    description: '',
    hours: '',
    minuts: '',
    jobs: 'Jobs'
  }

  return (
    <div className='form-container'>
      <Formik
        initialValues={initialValuesNewJob}
        validate={values => {
          const errors = {}
          if (values.operator === 'operario' || values.operator === '') {
            errors.operator = 'Debes seleccionar tú nombre'
          }
          return errors
        }}
        onSubmit={values => {
          const CLIENT = modal ? 'Clients' : ''
          setDataDB({ ...values, newClient: CLIENT })
          setTimeout(() => {
            navigate('/')
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='operator' as='select' name='operator'>
              <option value='operario' default>Operario</option>
              {
                operators.map((res, index) => (
                  <option key={index} value={res}>{res}</option>
                ))
              }
            </Field>
            <ErrorMessage className='newJobForm-error' name='operator' component='div' />
            <div className='form-clients'>
              {
                modal
                  ? <NewClient />
                  : <ClientsList />
              }
              <button type='button' className='button' onClick={modalSwitch}>Añadir</button>
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

export default NewJobForm
