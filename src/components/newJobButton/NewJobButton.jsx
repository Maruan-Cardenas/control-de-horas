import './NewJobButton.scss'

import { Link } from 'react-router-dom'

const NewJobButton = () => {
  return (
    <Link to='newJob'>
      <div className='newJobButton'>+</div>
    </Link>
  )
}
export default NewJobButton
