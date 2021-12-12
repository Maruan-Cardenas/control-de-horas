import './MoreArticles.css'
import CardUser from 'component/CardUser/CardUser'

const MoreArticles = () => {
  return (
    <section className='moreArticles-container'>
      <CardUser game='Nintendo' />
      <CardUser game='Playstation' />
      <CardUser game='Xbox' />
      <CardUser game='PC' />
    </section>
  )
}

export default MoreArticles
