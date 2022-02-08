import { Link } from 'react-router-dom'
import './Job.scss'
import removeDB from 'services/removeDB/removeDB'
import remove from 'images/remove.png'

const Job = ({ db }) => {
  const { operator, client, seconds, id } = db

  const shortOperator = operator && operator.slice(0, 7)
  const shortClient = client && client.slice(0, 7)
  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)
  return (
    <Link className='job-link' to={`/detail/${id}`}>
      <div className='job-container'>
        <div>{operator.length < 7 ? operator : shortOperator + '...'}</div>
        <div>{client.length < 7 ? client : shortClient + '...'}</div>
        <div className='job-hora'>{`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}</div>
        <div><button onClick={() => removeDB(id, 'Jobs')}><img src={remove} alt='remove' /></button></div>
      </div>
    </Link>
  )
}

export default Job
