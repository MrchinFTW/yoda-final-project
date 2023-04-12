import React, { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [isLoggingin, setIsLoggingin] = useState(false)
    const [userData, setUserData] = useState({
        firstName: null,
        lastName: null
    })

    return <UserContext.Provider value={{ isLoggedin, setIsLoggedin, userData, setUserData, isLoggingin, setIsLoggingin }}>
        {children}
    </UserContext.Provider>

}



const useUserContext = () => {

    const { isLoggedin, setIsLoggedin, isLoggingin, setIsLoggingin, userData, setUserData } = useContext(UserContext)

    // This is mock, login will be done with an exturnal lib. 
    const login = () => {
        if (!isLoggedin) {
            setIsLoggingin(true)


            // To simulate the time that the login takes.
            setTimeout(() => {
                setIsLoggedin(true)
                setIsLoggingin(false)

            }, 3000)
        }
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
        login,
        logout,
        userInfo,
        isLoggedin,
        isLoggingin,
        loginError
    }
}

export default useUserContext