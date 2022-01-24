import Job from 'components/job/Job'
import './JobContainer.scss'

const JobContainer = () => {
  return (
    <>
      <div className='job-container jobContainer-container'>
        <div>Operario</div>
        <div>Cliente</div>
        <div>Concepto</div>
        <div className='job-hora'>Horas</div>
      </div>
      <Job />
    </>
  )
}
export default JobContainer
