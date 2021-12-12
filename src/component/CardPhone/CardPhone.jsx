import './CardPhone.css'
import { useGetData } from 'hooks/Firestore/getData/useGetData'
import EventsLoader from 'component/ContentLoader/ContentLoader'

const CardPhone = ({ game }) => {
  const { arrGames, loading } = useGetData({ game })

  if (!loading) return <EventsLoader />

  return (
    <>
      {
    arrGames.map(res => (
      <section key={res.id} className='cardPhone-box'>
        {
        res.img !== ''
          ? <img className='cardPhone-img' src={res.img} alt={res.title} loading='lazy' />
          : <img className='cardPhone-img' src={`img/${res.title}.jpg`} alt={res.title} loading='lazy' />
        }
        <h2 className='cardPhone-title'>{res.title}</h2>
        <div className='cardPhone-date'>{res.date}</div>
        <article className='cardUser-prices'>
          <div className='actual-price'>{res.actualPrice}€</div>
          <div className='previus-price'>{res.previousPrice}€</div>
          <div className='percentage-price'>{`(-${Math.round(100 - ((100 * res.actualPrice) / res.previousPrice))}%)`}</div>
        </article>
        <div className='cardPhone-shop'><a target='_blank' rel='noreferrer noopener' className='cardPhone-link' href={res.url}>{res.shop}</a></div>
        <div className='cardPhone-description'>{res.description.slice(0, 60) + '...'}</div>
      </section>
    ))
  }
    </>
  )
}

export default CardPhone
