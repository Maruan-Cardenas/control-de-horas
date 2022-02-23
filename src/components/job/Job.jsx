import { useState, useContext } from 'react'

import './Job.scss'
// Images
import edit from 'images/edit.png'
import prohibited from 'images/prohibited.png'

import SessionContext from 'context/context.config'
import Detail from 'components/detail/Detail'

const Job = ({ db }) => {
  const { user } = useContext(SessionContext)

  const [modalForm, setModalForm] = useState(false)
  const [detail, setDetail] = useState(false)

  const { operator, client, seconds, id } = db

  const hours = Math.floor(seconds / 3600)
  const minuts = Math.floor((seconds / 60) % 60)

  const handleModal = () => {
    setModalForm(!modalForm)
  }
  const handleDetail = () => {
    setDetail(!detail)
  }
  return (
    <>
      <div className='job-container'>
        <div className='job-link' onClick={handleDetail}>
          <div>
            {operator}
          </div>
          <div>
            {client}
          </div>
          <div className='job-hours'>
            {`${hours}:${minuts < 10 ? '0' + minuts : minuts}`}
          </div>
        </div>
      </div>
      {
      detail && <Detail detailID={id} />
      }
    </>
  )
}

export default Job
