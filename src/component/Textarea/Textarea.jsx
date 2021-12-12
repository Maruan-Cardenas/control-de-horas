import './Textarea.css'

const Textarea = ({ modify, label, ...rest }) => {
  return (
    <label className='textarea-label'>
      {label}
      <textarea {...rest} className={`textarea-textarea ${modify}`} cols='40' rows='5' />
    </label>
  )
}

export default Textarea
