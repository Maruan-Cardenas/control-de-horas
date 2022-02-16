import React, { useState, useContext } from 'react'
import './NewJobForm.scss'

import SetDataDB from 'services/setDB/setDB'
import SessionContext from 'context/context.config.js'

import ObtainData from 'services/getDB/obtainData'
import removeDB from 'services/removeDB/removeDB'
import DataForm from '../../forms/formComponents/DataForm'

const NewJobForm = () => {
  const { user } = useContext(SessionContext)
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
    jobs: 'Jobs',
    uid: user.uid
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
