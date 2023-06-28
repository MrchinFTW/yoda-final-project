import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export const useEventCardData = () => {
    const [eventData, setEventData] = useState([])
    const [eventError, setEventError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const eventsUrl = 'http://localhost:999/api/events'


    // const token = localStorage.getItem('token')
    const navigate = useNavigate()



    const config = {
        // headers: {
        //     'Authorization': 'Bearer ' + token,
        // },
    }

    const onMoreInfoClick = (event) => {
        const { id } = event
        navigate(`/events/${id}`)
    }



    useEffect(() => {
        const getEvents = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(eventsUrl, config)
                const restructuredData = response.data.data.map((event) => ({
                    id: event.id,
                    title: event.title,
                    date: event.date,
                    image: event.image,
                }))
                setEventData(restructuredData)
                setIsLoading(false)
            } catch (error) {
                if (error.response) {
                    const errorMessage = error.message + ' please try again shortly'
                    setIsLoading(false)
                    setEventError(errorMessage)
                    console.error('Failed to fetch events:', error)
                } else {
                    const errorMessage = 'An error has accured please try again shortly'
                    setIsLoading(false)
                    setEventError(errorMessage)
                    console.error('Failed to fetch events:', error)
                }
            }
        }

        getEvents()
    }, [])



    return { eventData, eventError, isLoading, onMoreInfoClick }
}


