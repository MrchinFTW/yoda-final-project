import React, { createContext, useContext, useState } from "react"
import axios from "axios"
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

    return <UserContext.Provider value={{ isLoggedin, setIsLoggedin, userData, setUserData, isLoggingin, setIsLoggingin, errors, setError}}>
        {children}
    </UserContext.Provider>

}



const useUserContext = () => {

    const { isLoggedin, setIsLoggedin, isLoggingin, setIsLoggingin, setUserData, errors, setError } = useContext(UserContext)
 

    const login = (data) => {

        const loginUrl = 'http://localhost:999/login'

        axios.post(loginUrl, { email: data.email, password: data.password })
            .then(response => {

                if (response.status === 401) {

                    setError("email", {
                        type: "manual",
                        message: "Sorry, we couldn't find your email address. Please sign up to create an account."

                    })
                }

                console.log(response + 'Login successful!')
            })
            .catch(error => {
                console.error('Error logging in: ', error)
            })
    }


    const logout = () => {

        if (isLoggedin) {
            setIsLoggedin(false)
            console.log("hello from logout func")
        }
    }



    const userInfo = (firstName, lastName) => {
        setUserData({
            firstName,
            lastName,
        })
        return { firstName, lastName }
    }

    const loginError = (err) => {
        console.log('An error occurred: ' + err)
    }


    return {
        errors,
        login,
        logout,
        userInfo,
        isLoggedin,
        isLoggingin,
        loginError
    }
}

export default useUserContext