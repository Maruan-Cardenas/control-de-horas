import { useContext } from 'react'
import UpdateUser from 'components/forms/formComponents/UpdateUser'
import Job from 'components/job/Job'
import SignOutComponent from 'components/signOut/SignOutComponent'
import ObtainData from 'services/getDB/obtainData'
import SessionContext from 'context/context.config'

const User = () => {
  const { user } = useContext(SessionContext)
  const [jobs] = ObtainData('Jobs')
  const jobsFilter = jobs.filter(job => job.operator === user.displayName)
  return (
    <div className='user-container'>
      {
        jobsFilter && jobsFilter.map((res, index) => (
          <div key={index} className='user-job-container'>
            <Job key={index} db={res} />
          </div>
        ))
      }
      {
        user.displayName === 'Maruan' && <UpdateUser />
      }

      <SignOutComponent />
    </div>
  )
}
export default User
