import './normalize.css'
import { Route } from 'wouter'
import Header from './parts/Header/Header'
import Footer from './parts/Footer/Footer'
import Main from './parts/Main/Main'
import { SesionContextProvider } from 'context/sesionContext/SesionContext'

function App () {
  return (
    <>
      <SesionContextProvider>
        <Header />
        <Route path='/Nintendo'>
          <Main page='Nintendo' />
        </Route>
        <Route path='/Playstation'>
          <Main page='Playstation' />
        </Route>
        <Route path='/Xbox'>
          <Main page='Xbox' />
        </Route>
        <Route path='/PC'>
          <Main page='PC' />
        </Route>
        <Route path='/Formulario'>
          <Main />
        </Route>
        <Route path='/User'>
          <Main />
        </Route>
        <Route path='/Games/:page/:id'>
          <Main />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
        <Footer />
      </SesionContextProvider>
    </>
  )
}

export default App
