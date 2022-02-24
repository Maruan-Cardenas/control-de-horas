import './Detail.scss'

const ConfirmRemoveModal = ({ remove, noRemove }) => {
  const handleRemove = () => {
    noRemove()
    remove()
  }
  return (
    <div className='confirmRemoveModal'>
      <div>
        <h3>¿Seguro?</h3>
        <span>
          <button className='remove' onClick={handleRemove}>Si</button>
          <button className='noRemove' onClick={noRemove}>No</button>
        </span>
      </div>
    </div>
  )
}

export default ConfirmRemoveModal