import React, { useState } from 'react'
import './NewJobForm.scss'

import SetDataDB from 'services/setDB/setDB'

import ObtainData from 'services/getDB/obtainData'
import removeDB from 'services/removeDB/removeDB'
import DataForm from '../formComponents/DataForm'

const NewJobForm = () => {
  const [setDataDB] = SetDataDB()
  const [clients] = ObtainData('Clients')
  const [newClient, setNewClient] = useState(false)
  const modalSwitch = () => {
    setNewClient(!newClient)
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
      <DataForm
        initialValues={initialValuesNewJob}
        setDataDB={setDataDB}
        newClient={newClient}
        modalSwitch={modalSwitch}
      />
      {
       newClient &&
         <div>
           {
         clients.map((res, index) => (
           <div key={index}><button className='newJobForm-removeClientButton' onClick={() => removeDB(res.id, 'Clients')}>X</button>{res.client}</div>
         ))
        }
         </div>
      }

    </div>
  )
}

export default NewJobForm
