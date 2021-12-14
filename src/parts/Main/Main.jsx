import React, { Suspense, useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { Route } from 'wouter'
import './Main.css'
import Card from 'component/Card/Card'
import LogIn from 'component/LogIn/LogIn'
import SesionContext from 'context/sesionContext/SesionContext'
import PopUp from 'component/PopUp/PopUp'
import ChangeName from 'component/ChangeName/ChangeName'
import MoreArticles from 'component/MoreArticles/MoreArticles'
import Notification from 'component/Notification/Notification'
const Home = React.lazy(() => import('pages/Home/Home'))
const Detail = React.lazy(() => import('pages/Detail/Detail'))
const FormData = React.lazy(() => import('pages/FormData/FormData'))
const User = React.lazy(() => import('pages/User/User'))

const Main = ({ page }) => {
  const { popUp, notify } = useContext(SesionContext)
  const auth = getAuth()
  const user = auth.currentUser

  return (
    <Suspense fallback={null}>
      <main className='main'>
        <Route path={`/${page}`}>
          <div className='main-card__container'>
            <Card game={page} />
          </div>
        </Route>
        <Route path='/Games/:page/:id' component={Detail} />
        <Route path='/Formulario' component={FormData} />
        <Route path='/' component={Home} />
        <Route path='/User'>
          {
            user ? <User /> : <div>No tienes Permiso</div>
          }
        </Route>
        {
          popUp === 'LogIn' &&
            <PopUp component={<LogIn />} />
        }
        {
          popUp === 'changeName' &&
            <PopUp component={<ChangeName input={popUp} />} />
        }
        {
          popUp === 'changeImage' &&
            <PopUp component={<ChangeName input={popUp} />} />
        }
        {
          popUp === 'moreArticles' &&
            <PopUp component={<MoreArticles />} />
        }
        {
          notify &&
            <Notification {...notify} />
        }
      </main>
    </Suspense>
  )
}
export default Main
