import Spiner from 'component/Spiner/Spiner'
import { useGetData } from 'hooks/Firestore/getData/useGetData'
import './Detail.css'

const Detail = ({ params }) => {
  const game = params.page
  const { arrGames, loading } = useGetData({ game })
  let singleData = ' '
  if (!loading) {
    return <Spiner />
  } else {
    singleData = arrGames.find(singleData => singleData.id === params.id)
  }
  const title = singleData.title
  const description = singleData.description
  const img = singleData.img
  const date = singleData.date
  const actualPrice = singleData.actualPrice
  const previousPrice = singleData.previousPrice
  const url = singleData.url
  const shop = singleData.shop
  const discount = previousPrice - actualPrice
  const percentageDiscount = `-${discount.toFixed(2)}€ (${Math.round(100 - ((100 * actualPrice) / previousPrice))}%)`

  return (
    <section className='detail-section'>
      <span className='detail-date'>Fecha de publication: {date}</span>
      <img className='detail-img' src={img} alt={title} />
      <h1 className='detail-title'>{title}</h1>
      <div className='detail-pricesContainer'>
        <span className='actualPrice-detail'>{actualPrice}€</span>
        <span className='detail-previousPrice'>{previousPrice}€</span>
        <span className='percentagePrice-detail'>{percentageDiscount}</span>
      </div>
      <p className='detail-description'>{description}</p>
      <a className='detail-link' href={url} target='_blank' rel='noreferrer noopener'>{shop}</a>
    </section>
  )
}
export default Detail
