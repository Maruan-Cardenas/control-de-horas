import { useState, useContext } from 'react'

import './Job.scss'
// Images
import edit from 'images/edit.png'
import prohibited from 'images/prohibited.png'

// routes
import { Link } from 'react-router-dom'
import ModalUpdateForm from 'components/forms/modalUpdateForm/ModalUpdateForm'

import SessionContext from 'context/context.config'

const Job = ({ db }) => {
  const { user } = useContext(SessionContext)

  const [modalForm, setModalForm] = useState(false)

  const { operator, client, seconds, id } = db

  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)

  const handleModal = () => {
    setModalForm(!modalForm)
  }
  return (
    <>
      <div className='job-container'>
        <Link className='job-link' to={`/detail/${id}`}>
          <div>
            {operator}
          </div>
          <div>
            {client}
          </div>
          <div className='job-hours'>
            {`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}
          </div>
        </Link>
        <div>
          {
            (user.displayName === operator || user.displayName === 'Manuel Campos' || user.displayName === 'Maruan')
              ? (
                <img onClick={handleModal} src={edit} alt='remove' />
                )
              : <img src={prohibited} alt='Sin permisos' />
          }
        </div>
      </div>

      {
      modalForm && <ModalUpdateForm id={id} setModalForm={setModalForm} />
    }
    </>
  )
}

export default Job
