import './DetailPage.scss'

import Detail from 'components/detail/Detail'
import React from 'react'

import obtainData from 'services/getDB/obtainData'

import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [jobs] = obtainData('Jobs')
  const { id } = useParams()

  const idJobs = jobs.find(job => job.id === id)

  return (
    <main className='detailPage-container'>
      <Detail idJobs={idJobs} />
    </main>
  )
}

export default DetailPage
