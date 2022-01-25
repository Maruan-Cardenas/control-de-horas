import Job from 'components/job/Job'
import ObtainData from 'services/getDB/obtainData'
import './JobContainer.scss'

const JobContainer = ({ db }) => {
  const [jobs] = ObtainData(db)
  return (
    <>
      <div className='job-container jobContainer-container'>
        <div>Operario</div>
        <div>Cliente</div>
        <div>Concepto</div>
        <div className='job-hora'>Horas</div>
      </div>
      {
        jobs.map((res, index) => (
          <Job key={index} db={res} />
        ))
      }
    </>
  )
}
export default JobContainer
