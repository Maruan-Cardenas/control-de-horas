import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { SessionContextProvider } from 'context/context.config.js'

ReactDOM.render(
  <React.StrictMode>
    <SessionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
