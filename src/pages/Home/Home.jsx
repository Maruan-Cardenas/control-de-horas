import './Home.css'
import Card from 'component/Card/Card'

const Home = () => {
  return (
    <section className='home-section'>
      <h1 className='home-section__title'>Últimas Ofertas</h1>
      <article className='home-article__nintendo'>
        <h2 className='home-article__title'>Nintendo</h2>
        <Card max={3} game='Nintendo' />
      </article>
      <article className='home-article__playstation'>
        <h2 className='home-article__title'>Playstation</h2>
        <Card max={3} game='Playstation' />
      </article>
      <article className='home-article__xbox'>
        <h2 className='home-article__title'>Xbox</h2>
        <Card max={3} game='Xbox' />
      </article>
      <article className='home-article__pc'>
        <h2 className='home-article__title'>PC</h2>
        <Card max={3} game='PC' />
      </article>
    </section>
  )
}
export default Home
