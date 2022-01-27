import './Job.scss'

const Job = ({ db }) => {
  const { operator, client, description, hours, minuts } = db
  const shortDescription = description && description.slice(0, 10)
  return (
    <div className='job-container'>
      <div>{operator}</div>
      <div>{client}</div>
      <div>{shortDescription}...</div>
      <div className='job-hora'>{hours}:{minuts || '00'}</div>
    </div>
  )
}

export default Job
