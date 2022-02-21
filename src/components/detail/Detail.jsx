import React from 'react'

const Detail = ({ idJobs }) => {
  if (!idJobs) return <div>Cargando...</div>
  const { client, operator, description, seconds, date } = idJobs
  const Hours = Math.floor(seconds / 3600)
  const Minuts = Math.floor((seconds / 60) % 60)
  return (
    <div className='detail-container'>
      <div className='detail-operator'>Operario: {operator}</div>
      <div className='detail-client'>Cliente: {client}</div>
      <div className='detail-description'>Descripción: {description}</div>
      <div className='detail-time'>Tiempo: {Hours}:{Minuts < 10 ? '0' + Minuts : Minuts}</div>
      <div className='detail-date'>Fecha: {date}</div>
    </div>
  )
}

export default Detail
