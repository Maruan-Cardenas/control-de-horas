import './Card.css'
import { useGetData } from 'hooks/Firestore/getData/useGetData'
import EventsLoader from 'component/ContentLoader/ContentLoader'

const Card = ({ game }) => {
  const { arrGames, loading } = useGetData({ game })

  if (!loading) return <EventsLoader />

  return (
    <>
      {
      arrGames.map(res => (
        <section key={res.id} className='card-box'>
          <div className='card-shop'><a target='_blank' rel='noreferrer noopener' className='card-link' href={res.url}>{res.shop}</a></div>
          <a href={`/Games/${game}/${res.id}`} className='card-box__link'>
            <h2 className='card-title'>{res.title}</h2>
            {
          res.img !== ''
            ? <img className='card-img' src={res.img} alt={res.title} loading='lazy' />
            : <img className='card-img' src={`img/${res.title}.jpg`} alt={res.itle} loading='lazy' />
        }
            <article className='card-prices'>
              <div className='actual-price'>{res.actualPrice}€</div>
              <div className='previus-price'>{res.previousPrice}€</div>
              <div className='percentage-price'>{`(-${Math.round(100 - ((100 * res.actualPrice) / res.previousPrice))}%)`}</div>
            </article>
            <p className='card-description'>{res.description.slice(0, 250) + '...'} <span className='card-readMore'>Leer más</span> </p>
            <div className='card-date'>{res.date}</div>
          </a>
        </section>
      ))
    }
    </>
  )
}

export default Card
