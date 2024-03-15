import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext()

export const  UserProvider  = ({ children }) => {

  // Chat detail
  const [contactToShow, setContactToShow] = useState([])

  return (
    <UserContext.Provider value={{
      contactToShow,
      setContactToShow,
    }}>
      {children}
    </UserContext.Provider>
  )
}