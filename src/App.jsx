import './normalize.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/HomePage'
import Header from 'components/header/Header'

function App () {
  return (
    <>
      <h1>Control de horas</h1>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
