import './Input.css'

const Input = ({ img, inputcss, labelcss, label, modify, ...rest }) => {
  return (
    <label className={`input-label ${labelcss}`}>
      {label}
      {
      img ? <img className='input-img' src={img} alt='Upload' /> : null
      }
      <input {...rest} className={`input-input ${inputcss} ${modify}`} />
    </label>
  )
}

export default Input
