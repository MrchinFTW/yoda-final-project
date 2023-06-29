import { useEffect, useState } from "react"
import { useUserContext } from '../../../context/UserContext'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"


export const useRegistrationManager = () => {
    const [btnText, setBtnText] = useState("Register")
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { isLoggedin } = useUserContext()
    const { id } = useParams()
    const navigate = useNavigate()

    const eventUrl = `http://localhost:999/api/events/${id}/register`
    let registeredEvents = JSON.parse(localStorage.getItem("registeredEvents")) || []

    useEffect(() => {
        setIsRegistered(registeredEvents.includes(id))
    }, [registeredEvents, id])

    useEffect(() => {
        setBtnText(!isRegistered ? 'Register' : 'Unregister')
    }, [isRegistered])


    const registerUser = async (userId) => {
        setIsLoading(true)
        try {
            const response = await axios.patch(eventUrl, {
                userId,
            })
            if (response.status === 200) {
                setIsLoading(false)
                registeredEvents.push(id)
                localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents))
                setIsRegistered(true)
            }
            console.log(response.data)
        } catch (error) {
            console.error(error)

        }
    }


    const unregisterUser = async (userId) => {
        setIsLoading(true)
        try {
            const response = await axios.delete(eventUrl, { data: { userId } })
            if (response.status === 200) {
                registeredEvents = registeredEvents.filter(eventId => eventId !== id)
                localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents))
                setIsRegistered(false)
            }
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }




    const handleOnClick = async (userId) => {
        if (isRegistered) {
            await unregisterUser(userId)
        } else {
            await registerUser(userId)
        }
    }



    return {
        btnText,
        isRegistered,
        isLoading,
        handleOnClick,


    }



}