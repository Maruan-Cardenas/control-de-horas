import React, { useContext } from 'react'
import clock from '../../images/clock.png'
import calendar from '../../images/calendar.png'

import { useNavigate } from 'react-router-dom'
import removeDB from 'services/removeDB/removeDB'
import SessionContext from 'context/context.config'

const Detail = ({ idJobs }) => {
  const navigate = useNavigate()
  const { user } = useContext(SessionContext)
  if (!idJobs) return <div>Cargando...</div>
  const { client, operator, description, seconds, date, id } = idJobs
  const Hours = Math.floor(seconds / 3600)
  const Minuts = Math.floor((seconds / 60) % 60)

  const handleRemove = () => {
    removeDB(id, 'Jobs')
    navigate('/')
  }
  return (
    <section className='detail-container'>
      <article className='detail-operator'>
        <h3>{operator}</h3>
        <div className='detail-description'>
         {description}
         <p>Trabajo realizado para {client}</p>
        </div>
      </article>
      <div className='detail-time'><img src={clock} alt="Tiempo" /> {Hours}:{Minuts < 10 ? '0' + Minuts : Minuts}h</div>
      <div className='detail-date'><img src={calendar} alt="Fecha" /> {date}</div>
      <button className='removeButton' onClick={handleRemove} disabled={(user.displayName === operator || user.displayName === 'Manuel Campos' || user.displayName === 'Man') ? false : true}>{(user.displayName === operator || user.displayName === 'Manuel Campos' || user.displayName === 'Man') ? 'Eliminar' : 'Sin permisos'}</button>
    </section>
  )
}

export default Detail
