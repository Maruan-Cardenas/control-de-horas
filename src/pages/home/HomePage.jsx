import './HomePage.scss'

import JobContainer from 'components/containers/jobs/JobContainer'

const HomePage = () => {
  return (
    <main className='main-container'>
      <JobContainer db='Jobs' />
    </main>
  )
}

export default HomePage
