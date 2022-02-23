import './normalize.css'

import { useContext } from 'react'

import { Routes, Route } from 'react-router-dom'

import Header from 'components/header/Header.jsx'

import HomePage from 'pages/home/HomePage.jsx'
import NewJobPage from 'pages/newJob/NewJobPage.jsx'
import SignInPage from 'pages/signIn/SignInPage.jsx'

import SessionContext from 'context/context.config'
import UserPage from 'pages/user/UserPage'
import NewJobButton from 'components/newJobButton/NewJobButton'

function App () {
  const { user } = useContext(SessionContext)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={user.uid ? <HomePage /> : <SignInPage />} />
        <Route path='/newjob' element={<NewJobPage />} />
        <Route path='/user' element={<UserPage user={user.displayName} />} />
      </Routes>
      {
        user.uid && <NewJobButton />
      }
    </>
  )
}

export default App
