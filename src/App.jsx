import './normalize.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/HomePage'
import Header from 'components/header/Header'
import NewJobPage from 'pages/newJob/NewJobPage'
import DetailPage from 'pages/detail/DetailPage'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newjob' element={<NewJobPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default App
