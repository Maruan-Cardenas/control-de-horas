import './Job.scss'

const Job = ({ db }) => {
  const { operator, client, description, seconds } = db
  const shortDescription = description && description.slice(0, 10)
  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)
  return (
    <div className='job-container'>
      <div>{operator}</div>
      <div>{client}</div>
      <div>{shortDescription}...</div>
      <div className='job-hora'>{`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}</div>
    </div>
  )
}

export default Job
