import { createContext, useState } from 'react'

const Context = createContext('No Sesion')
export function SesionContextProvider ({ children }) {
  const [userId, setUserId] = useState([])
  const [popUp, setPopUp] = useState(false)
  const [notify, setNotify] = useState()
  const [urlBb, setUrlBb] = useState()
  const [formError, setFormError] = useState({ img: '', title: '', description: '', previousPrice: '', actualPrice: '', shop: '', url: '' })
  return (
    <Context.Provider value={{ userId, setUserId, popUp, setPopUp, notify, setNotify, urlBb, setUrlBb, formError, setFormError }}>
      {children}
    </Context.Provider>
  )
}

export default Context
