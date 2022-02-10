import { useState } from 'react'

import './JobContainer.scss'

import Job from 'components/job/Job'

import ObtainData from 'services/getDB/obtainData'
const JobContainer = ({ db }) => {
  const [operatorName, setOperatorName] = useState('client')
  const [jobs] = ObtainData(db)

  const [jobsClient] = ObtainData('Clients')
  const handleChange = (e) => {
    setOperatorName(e.target.value)
  }
  const jobsFilter = jobs.filter(job => job.client === operatorName)
  const sumaHours = operatorName === 'client' ? jobs.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0) : jobsFilter.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)

  const Hours = Math.floor(sumaHours / 3600)
  const Minuts = Math.floor((sumaHours / 60) % 60)
  return (
    <>
      <div className='jobContainer-container'>
        <div>Operario</div>
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
        <div>Tiempo</div>
        <div className='job-hora'>Eliminar</div>
        <div>Editar</div>
      </div>
      {
        operatorName === 'client' && jobs.map((res, index) => (
          <div key={index}>
            <Job key={index} db={res} filter={operatorName} />
          </div>
        ))
      }
      {
        operatorName !== 'client' && jobsFilter.map((res, index) => (
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
