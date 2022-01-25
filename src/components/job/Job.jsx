import './Job.scss'

const Job = ({ db }) => {
  const { operator, client, description, hours } = db
  const shortDescription = description && description.slice(0, 10)
  return (
    <div className='job-container'>
      <div>{operator}</div>
      <div>{client}</div>
      <div>{shortDescription}...</div>
      <div className='job-hora'>{hours}</div>
    </div>
  )
}

export default Job
