import Job from 'components/job/Job'
import ObtainData from 'services/getDB/obtainData'
import './JobContainer.scss'

const JobContainer = ({ db }) => {
  const [jobs] = ObtainData(db)
  let sume
  const sumeTime = () => {
    jobs.forEach(res => (
    +  sume += res.hours
    ))
  }
  sumeTime()
  console.log(sume)
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
          <div key={index}>
            <Job key={index} db={res} />
          </div>
        ))
      }
    </>
  )
}
export default JobContainer
