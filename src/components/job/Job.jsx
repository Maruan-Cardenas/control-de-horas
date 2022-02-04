import { Link } from 'react-router-dom'
import './Job.scss'

const Job = ({ db }) => {
  const { operator, client, description, seconds, id } = db
  const shortDescription = description && description.slice(0, 10)
  const shortOperator = operator && operator.slice(0, 7)
  const shortClient = client && client.slice(0, 7)
  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)
  return (
    <Link className='job-link' to={`/detail/${id}`}>
      <div className='job-container'>
        <div>{operator.length < 7 ? operator : shortOperator + '...'}</div>
        <div>{client.length < 7 ? client : shortClient + '...'}</div>
        <div>{shortDescription}...</div>
        <div className='job-hora'>{`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}</div>
      </div>
    </Link>
  )
}

export default Job
