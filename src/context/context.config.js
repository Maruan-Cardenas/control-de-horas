import { createContext, useState } from 'react'

const Context = createContext('No Sesion')

export function SessionContextProvider ({ children }) {
  const [user, setUser] = useState([])

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
