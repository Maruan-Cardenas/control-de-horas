import { useState } from 'react'

import './Job.scss'
// Images
import remove from 'images/remove.png'
import edit from 'images/edit.png'
// logic component
import removeDB from 'services/removeDB/removeDB'
// routes
import { Link, useNavigate } from 'react-router-dom'
import ModalUpdateForm from 'components/forms/modalUpdateForm/ModalUpdateForm'

const Job = ({ db }) => {
  const [modalForm, setModalForm] = useState(false)

  const navigate = useNavigate()

  const { operator, client, seconds, id } = db

  const shortOperator = operator && operator.slice(0, 7)
  const shortClient = client && client.slice(0, 7)

  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)

  const handleRemove = () => {
    removeDB(id, 'Jobs')
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  const handleModal = () => {
    setModalForm(!modalForm)
  }
  return (
    <>
      <div className='job-container'>
        <Link className='job-link' to={`/detail/${id}`}>
          <div>
            {operator.length < 7 ? operator : shortOperator + '...'}
          </div>
          <div>
            {client.length < 7 ? client : shortClient + '...'}
          </div>
          <div className='job-hora'>
            {`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}
          </div>
        </Link>
        <div>
          <button onClick={handleRemove}>
            <img src={remove} alt='remove' />
          </button>
        </div>
        <div>
          <button onClick={handleModal}>
            <img src={edit} alt='edit' />
          </button>
        </div>
      </div>

      {
      modalForm && <ModalUpdateForm id={id} setModalForm={setModalForm} />
    }
    </>
  )
}

export default Job
