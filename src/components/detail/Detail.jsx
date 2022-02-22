import React from 'react'
import clock from '../../images/clock.png'
import calendar from '../../images/calendar.png'

const Detail = ({ idJobs }) => {
  if (!idJobs) return <div>Cargando...</div>
  const { client, operator, description, seconds, date } = idJobs
  const Hours = Math.floor(seconds / 3600)
  const Minuts = Math.floor((seconds / 60) % 60)
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
    </section>
  )
}

export default Detail
