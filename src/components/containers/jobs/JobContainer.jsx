import Job from 'components/job/Job'
import ObtainData from 'services/getDB/obtainData'
import './JobContainer.scss'

const JobContainer = ({ db }) => {
  const [jobs] = ObtainData(db)

  const sumaHours = jobs.map(res => res.seconds).reduce((prev, cur) => prev + cur, 0)
  const Hours = Math.floor(sumaHours / 3600)
  const Minuts = Math.floor((sumaHours / 60) % 60)
  console.log(Hours + ':' + Minuts)

  return (
    <>
      <div className='job-container jobContainer-container'>
        <div>Operario</div>
        <div>Cliente</div>
        <div>Concepto</div>
        <div className='job-hora'>Horas {Hours + ':' + (Minuts < 10 ? '0' + Minuts : Minuts)}</div>
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
