import { useState } from 'react'

import './JobContainer.scss'

import Job from 'components/job/Job'
import ObtainData from 'services/getDB/obtainData'

const JobContainer = ({ db }) => {
  const [clientName, setClientName] = useState('client')
  const [operatorName, setOperatorName] = useState('operator')

  const [jobs] = ObtainData(db)
  const [jobsClient] = ObtainData('Clients')
  const [jobsOperator] = ObtainData('Operators')

  const handleChange = (e) => {
    setClientName(e.target.value)
  }
  const handleOperatorChange = (e) => {
    setOperatorName(e.target.value)
    console.log(operatorName)
  }

  const jobsFilter = jobs.filter(job => job.client === clientName)

  const sumaHours = clientName === 'client'
    ? jobs.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)
    : jobsFilter.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)

  const Hours = Math.floor(sumaHours / 3600)
  const Minuts = Math.floor((sumaHours / 60) % 60)

  return (
    <>
      <div className='jobContainer-container'>
        <div>
          <select name='operator' onChange={handleOperatorChange}>
            <option value='operator'>Operator</option>
            {
              jobsOperator.map((res, index) => (
                <option key={index} value={res.operator}>{res.operator}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select name='operator' onChange={handleChange}>
            <option value='client'>Clientes</option>
            {
              jobsClient.map((res, index) => (
                <option key={index} value={res.client}>{res.client}</option>
              ))
            }
          </select>
        </div>
        <div>Concepto</div>
        <div className='job-hora'>Horas</div>
      </div>
      {
        clientName === 'client' && jobs.map((res, index) => (
          <div key={index}>
            <Job key={index} db={res} filter={clientName} />
          </div>
        ))
      }
      {
        clientName !== 'client' && jobsFilter.map((res, index) => (
          <div key={index}>
            <Job key={index} db={res} />
          </div>
        ))
      }
      <div className='jobContainer-total'>
        <div className='text'>Total</div>
        <div className='hours'>{Hours + ':' + (Minuts < 10 ? '0' + Minuts : Minuts)}</div>
      </div>
    </>
  )
}
export default JobContainer
