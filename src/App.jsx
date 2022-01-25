import './normalize.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/HomePage'
import Header from 'components/header/Header'
import NewJobPage from 'pages/newJob/NewJobPage'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newjob' element={<NewJobPage />} />
      </Routes>
    </>
  )
}

export default App
