import './UserData.css'

const UserData = ({ icon, name, handle, imgB, href, imgR }) => {
  return (
    <article className='user-data__container'>
      <div className='user-firstIcon'>
        <img className='user-name__icon' src={icon} alt={name} />
      </div>
      <div className='user-body'>
        {
        href ? <a className='user-name__link' href={href}>{name}</a> : <div className='user-name__name'>{name}</div>
      }
      </div>
      <div className='user-lastIcon'>
        {
        imgB ? <button className='user-name__button' onClick={handle}><img className='user-name__buttonImg' src={imgB} alt='NewName' /></button> : null
       }
        {
         imgR ? <a href={href}><img className='user-name__linkImg' src={imgR} alt={name} /></a> : null
       }
      </div>
    </article>
  )
}

export default UserData
