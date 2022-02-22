import { useState } from 'react'

import './JobContainer.scss'

import Job from 'components/job/Job'
import ObtainData from 'services/getDB/obtainData'

const JobContainer = ({ db }) => {
  const NAMES = {
    OPERATOR: 'opeator',
    CLIENT: 'client'
  }
  const [clientName, setClientName] = useState(NAMES.CLIENT)
  const [operatorName, setOperatorName] = useState(NAMES.OPERATOR)

  const [jobs] = ObtainData(db)
  const [jobsClient] = ObtainData('Clients')
  const [jobsOperator] = ObtainData('Operators')

  const handleChange = (e) => {
    setClientName(e.target.value)
  }
  const handleOperatorChange = (e) => {
    setOperatorName(e.target.value)
  }

  const jobsFilter = []
  let filterName

  if (clientName !== NAMES.CLIENT && operatorName === NAMES.OPERATOR) {
    filterName = jobs.filter(job => job.client === clientName)
    jobsFilter.push(...filterName)
  } else if (operatorName !== NAMES.OPERATOR && clientName === NAMES.CLIENT) {
    filterName = jobs.filter(job => job.operator === operatorName)
    jobsFilter.push(...filterName)
  } else if (clientName !== NAMES.CLIENT && operatorName !== NAMES.OPERATOR) {
    filterName = jobs.filter(job => (job.client === clientName && job.operator === operatorName))
    jobsFilter.push(...filterName)
  }

  const sumaHours = (clientName === NAMES.CLIENT && operatorName === NAMES.OPERATOR)
    ? jobs.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)
    : jobsFilter.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)

  const Hours = Math.floor(sumaHours / 3600)
  const Minuts = Math.floor((sumaHours / 60) % 60)

  return (
    <>
      <div className='jobContainer-container'>
        <div>
          <select name={NAMES.OPERATOR} onChange={handleOperatorChange}>
            <option value={NAMES.OPERATOR}>Operario</option>
            {
              jobsOperator.map((res, index) => (
                <option key={index} value={res.operator}>{res.operator}</option>
              ))
            }
          </select>
        </div>
        <div>
          <select name={NAMES.CLIENT} onChange={handleChange}>
            <option value={NAMES.CLIENT}>Clientes</option>
            {
              jobsClient.map((res, index) => (
                <option key={index} value={res.client}>{res.client}</option>
              ))
            }
          </select>
        </div>
        <div className='job-hora'>Horas</div>
        <div className='job-hora'>Edit</div>
      </div>
      {
        (clientName === NAMES.CLIENT && operatorName === NAMES.OPERATOR) && jobs.map((res, index) => (
          <div key={index}>
            <Job key={index} db={res} filter={clientName} />
          </div>
        ))
      }
      {
        jobsFilter && jobsFilter.map((res, index) => (
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
