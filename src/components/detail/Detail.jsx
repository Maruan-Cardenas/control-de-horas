import React, { useState, useContext } from 'react'

import './Detail.scss'

import Clock from '../../images/clock.png'
import Calendar from '../../images/calendar.png'
import Remove from '../../images/remove.png'
import Edit from '../../images/edit.png'

import ModalUpdateForm from 'components/forms/modalUpdateForm/ModalUpdateForm'

import { useNavigate } from 'react-router-dom'
import removeDB from 'services/removeDB/removeDB'
import obtainData from 'services/getDB/obtainData'
import SessionContext from 'context/context.config'

const Detail = ({ detailID }) => {
  const [jobs] = obtainData('Jobs')
  const navigate = useNavigate()
  const { user } = useContext(SessionContext)

  const [edit, setEdit] = useState(false)

  const idJobs = jobs.find(job => job.id === detailID)

  if (!idJobs) return <div>Cargando...</div>

  const { client, operator, description, seconds, date, id } = idJobs

  const Hours = Math.floor(seconds / 3600)
  const Minuts = Math.floor((seconds / 60) % 60)

  const handleRemove = () => {
    removeDB(id, 'Jobs')
    navigate('/')
  }
  const handleEdit = () => {
    setEdit(!edit)
  }
  return (
    <>
      <section className='detail-container'>
        <article className='detail-operator'>
          <h3>{operator}</h3>
          <div className='detail-description'>
          {description}
          <p>Trabajo realizado para {client}</p>
          </div>
        </article>
        <div className='detail-time'><img src={Clock} alt="Tiempo" /> {Hours}:{Minuts < 10 ? '0' + Minuts : Minuts}h</div>
        <div className='detail-date'><img src={Calendar} alt="Fecha" /> {date}</div>
        <div className='button-container'>
          <button
            onClick={handleRemove} 
            disabled={(user.displayName === operator || user.displayName === 'Manuel Campos' || user.displayName === 'Maruan') ? false : true}>
              Eliminar
              <img src={Remove} alt="Borrar" />
            </button>
          <button 
            onClick={handleEdit}
            className='editButton'
            disabled={(user.displayName === operator || user.displayName === 'Manuel Campos' || user.displayName === 'Maruan') ? false : true}
            >
              Editar
              <img src={Edit} alt="Editar" />
          </button>
        </div>
      </section>
      {
        edit && <ModalUpdateForm id={id} setModalForm={setEdit} />
      }
    </>
  )
}

export default Detail
