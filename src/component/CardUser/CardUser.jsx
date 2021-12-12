import './CardUser.css'
import { useDeteleFirebase } from 'hooks/Firestore/deteleFirebase/useDeteleFirebase'
import { useGetData } from 'hooks/Firestore/getData/useGetData'
import { useGetUserData } from 'hooks/getUserData/useGetUserData'
import EventsLoader from 'component/ContentLoader/ContentLoaderUser'
import Detele from 'images/icons/detele.png'

const CardUser = ({ game }) => {
  const { arrGames, loading } = useGetData({ game })
  const { setDetele } = useDeteleFirebase()
  const { userUid } = useGetUserData()
  const handleDetele = (id, game) => {
    setDetele([{ id: id, page: game }])
    window.location.reload()
  }

  let userCards
  if (!loading) {
    return <EventsLoader />
  } else {
    userCards = arrGames.filter(userCards => userCards.userID === userUid)
  }

  return (
    <>
      {
      userCards.map(res => (
        <section key={res.id} className='cardUser-box'>
          {
        res.img !== ''
          ? <img className='cardUser-img' src={res.img} alt={res.title} loading='lazy' />
          : <img className='cardUser-img' src={`img/${res.title}.jpg`} alt={res.title} loading='lazy' />
      }
          <h2 className='cardUser-title'>{res.title}</h2>
          <div className='cardUser-date'>{res.date}</div>
          <article className='cardUser-prices'>
            <div className='actual-price'>{res.actualPrice}€</div>
            <div className='previus-price'>{res.previousPrice}€</div>
            <div className='percentage-price'>{`(-${Math.round(100 - ((100 * res.actualPrice) / res.previousPrice))}%)`}</div>
          </article>
          <div className='cardUser-shop'><a target='_blank' rel='noreferrer noopener' className='cardUser-link' href={res.url}>{res.shop}</a></div>
          {
          userUid === (userUid || res.userID) ? <button onClick={() => handleDetele(res.id, game)} className='cardUser-detele'><img className='cardUser-deteleImage' src={Detele} alt='detele' /></button> : null
        }
        </section>
      ))
    }

    </>
  )
}

export default CardUser
