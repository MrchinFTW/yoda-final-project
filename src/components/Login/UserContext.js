import React, { createContext, useContext, useState, useEffect, useMemo } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    // will log the user out after 10 min
    useEffect(() => {
        let timerId
        if (isLoggedIn) {
            timerId = setTimeout(() => {
                setIsLoggedIn(false)
            }, 600000)
        }
        return () => clearTimeout(timerId)
    }, [isLoggedIn])

    const value = useMemo(() => ({
        isLoggedIn,
        isLoggingIn,

        userLoggingIn: () => {
            if (!isLoggedIn && !isLoggingIn) {
                setIsLoggingIn(true)

                const timeoutId = setTimeout(() => {
                    setIsLoggedIn(true)
                    setIsLoggingIn(false)
                }, 3000)

                return () => clearTimeout(timeoutId)
            }
        },
        userLogout: () => {
            if (isLoggedIn) {
                setIsLoggedIn(false)
            }
        },

        sayHello: (userName) => {
            alert('Hello' + userName)
        },
        logginError: (err) => {
            console.log('error accured: ' + err)
        }

    }), [isLoggedIn, isLoggingIn])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

