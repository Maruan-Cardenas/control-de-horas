import './normalize.css'
import './App.scss'

import { useContext } from 'react'

import { Routes, Route } from 'react-router-dom'

import Header from 'components/header/Header.jsx'

import HomePage from 'pages/home/HomePage.jsx'
import NewJobPage from 'pages/newJob/NewJobPage.jsx'
import DetailPage from 'pages/detail/DetailPage.jsx'
import SignInPage from 'pages/signIn/SignInPage.jsx'

import SessionContext from 'context/context.config'
import UserPage from 'pages/user/UserPage'

function App () {
  const { user } = useContext(SessionContext)
  console.log(window.screen.width)
  if (window.screen.width < 750) {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={user.uid ? <HomePage /> : <SignInPage />} />
          <Route path='/newjob' element={<NewJobPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/user' element={<UserPage user={user.displayName} />} />
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path='/' element={
              user.uid
                ? (
                  <div className='app-desktopSreen'>
                    <NewJobPage />
                    <HomePage />
                  </div>
                  )
                : <SignInPage />
}
          />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/user' element={<UserPage user={user.displayName} />} />
        </Routes>
      </>
    )
  }
}

export default App
