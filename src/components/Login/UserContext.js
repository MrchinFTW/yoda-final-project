import React, { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export const useUserData = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn)

    const value = {
        isLoggedIn,
        toggleLoggedIn,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
