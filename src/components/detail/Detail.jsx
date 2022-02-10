import React from 'react'

const Detail = ({ idJobs }) => {
  if (!idJobs) return <div>Cargando...</div>
  const { client, operator, description, seconds, date } = idJobs
  const Hours = Math.floor(seconds / 3600)
  const Minuts = Math.floor((seconds / 60) % 60)
  return (
    <main>
      <div>Operario: {operator}</div>
      <div>Cliente: {client}</div>
      <div>Descripción: {description}</div>
      <div>Tiempo: {Hours}:{Minuts < 10 ? '0' + Minuts : Minuts}</div>
      <div>Fecha: {date}</div>
    </main>
  )
}

export default Detail
