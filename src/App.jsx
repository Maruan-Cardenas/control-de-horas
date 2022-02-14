import './normalize.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/HomePage.jsx'
import Header from 'components/header/Header.jsx'
import NewJobPage from 'pages/newJob/NewJobPage.jsx'
import DetailPage from 'pages/detail/DetailPage.jsx'
import SignInPage from 'pages/signIn/SignInPage.jsx'
import Session from 'services/session/Session.js'

function App () {
  const [session] = Session()
  console.log(session)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={session ? <HomePage /> : <SignInPage />} />
        <Route path='/newjob' element={<NewJobPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
