import './Notification.css'
import useNotifyDetele from './useNotifyDetele'

const Notification = ({ text, color }) => {
  const [handleDetele] = useNotifyDetele()

  if (text) handleDetele()

  return (
    <div className={`notification-container ${color}`}>{text}</div>
  )
}

export default Notification
