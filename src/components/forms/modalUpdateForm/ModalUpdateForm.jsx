import { useState } from 'react'
import './ModalUpdateForm.scss'

import ObtainData from 'services/getDB/obtainData'
import UpdateDB from 'services/updateDB/updateDB'
import SetDataDB from 'services/setDB/setDB'

import { Formik, Form, Field } from 'formik'
import ClientsList from '../formComponents/ClientList'

const ModalUpdateForm = ({ id, setModalForm }) => {
  const [setDataDB] = SetDataDB()
  const [setUpdateData] = UpdateDB('Jobs', id)
  const [newClient, setNewClient] = useState(false)

  const [jobs] = ObtainData('Jobs')
  const job = jobs.find(job => job.id === id)

  if (!job) return <div>Cargando...</div>

  const { client, description, seconds } = job

  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)

  const modalSwitch = () => {
    setNewClient(!newClient)
  }

  const initialUpdateData = {
    client,
    description,
    hours,
    minuts,
    send: true
  }

  return (
    <div className='modalUpdateForm-container'>
      <Formik
        initialValues={initialUpdateData}
        onSubmit={values => {
          newClient && setDataDB({ ...values, newClient: 'Clients' })
          setUpdateData({ ...values })
          setModalForm(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-clients'>
              {
                newClient
                  ? <Field type='client' name='client' placeholder={client} />
                  : <ClientsList />
              }
              <button type='button' className='button' onClick={modalSwitch} disabled={newClient}>Añadir</button>
            </div>
            <Field
              type='description'
              name='description'
            />
            <div className='form-time'>
              <Field
                className='form-hours'
                type='number'
                name='hours'
              />
              <span>H</span>
              <span className='doblePoint'>:</span>
              <Field
                className='form-minuts'
                type='number'
                name='minuts'
              />
              <span>M</span>
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

export default ModalUpdateForm
