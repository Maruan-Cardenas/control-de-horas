import './Home.css'
import Card from 'component/Card/Card'

const Home = () => {
  return (
    <section className='home-section'>
      <h1 className='home-section__title'>Últimas Ofertas</h1>
      <article className='home-nintendo'>
        <h2 className='home-title'>Nintendo</h2>
        <Card max={3} game='Nintendo' />
      </article>
      <article className='home-playstation'>
        <h2 className='home-title'>Playstation</h2>
        <Card max={3} game='Playstation' />
      </article>
      <article className='home-xbox'>
        <h2 className='home-title'>Xbox</h2>
        <Card max={3} game='Xbox' />
      </article>
      <article className='home-pc'>
        <h2 className='home-title'>PC</h2>
        <Card max={3} game='PC' />
      </article>
    </section>
  )
}
export default Home
