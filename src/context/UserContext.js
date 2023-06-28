import React, { createContext, useContext, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const { formState: { errors }, setError } = useForm()
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [isLoggingin, setIsLoggingin] = useState(false)
    const [userData, setUserData] = useState({
        firstName: null,
        lastName: null
    })

    return <UserContext.Provider value={{ isLoggedin, setIsLoggedin, userData, setUserData, isLoggingin, setIsLoggingin, errors, setError }}>
        {children}
    </UserContext.Provider>

}



export const useUserContext = () => {
    const { isLoggedin, setIsLoggedin, isLoggingin, setIsLoggingin, setUserData, errors, userData } = useContext(UserContext)


    useEffect(() => {
        const localStorageToken = localStorage.getItem('token')
        if (localStorageToken) {
            setIsLoggedin(true)
        }
        console.log('is logged in context', isLoggedin)

    }, [])



    const login = () => {
        if (!isLoggedin) {
            setIsLoggedin(true)
        } else {
            return
        }
    }


    const logout = () => {
        if (isLoggedin) {
            setIsLoggedin(false)
            setUserData({
                firstName: '',
                lastName: '',
            })
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("registeredEvents")
        }
    }



    const userInfo = (firstName, lastName) => {
        setUserData({
            firstName,
            lastName,
        })
    }

 
    const loginError = (err) => {
        console.log('An error occurred: ' + err)
    }


    return {
        userInfo,
        errors,
        login,
        logout,
        userData,
        isLoggedin,
        isLoggingin,
        loginError
    }

}

