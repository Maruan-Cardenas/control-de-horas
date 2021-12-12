import './Select.css'

const Select = ({ modify, ...rest }) => {
  return (
    <div className='select-container'>
      <select {...rest} className={`select-select ${modify}`}>
        <option>Selecciona una plataforma</option>

        <option value='Nintendo'>Nintendo</option>

        <option value='Playstation'>Playstation</option>

        <option value='Xbox'>Xbox</option>

        <option value='PC'>PC</option>

      </select>
    </div>
  )
}

export default Select
