import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import SingleEventContainer from "./SingleEventContainer"
import SingleEventHeader from "./SingleEventHeader"
import SingleEventDetails from "./SingleEventDetails"
import SingleEventFooter from "./SingleEventFooter"
import axios from "axios"



const SingleEvent = () => {
    const { id } = useParams()
    const eventUrl = `http://localhost:999/api/events/${id}`
    const [isLoading, setIsLoading] = useState(false)
    const [eventData, setEventData] = useState([])
    const [eventError, setEventError] = useState(false)

    useEffect(() => {
        const getEventData = async () => {
            try {
                setIsLoading(true)

                const response = await axios.get(eventUrl)
                setEventData(response.data.data)
                setIsLoading(false)

            } catch (error) {
                if (error.response) {
                    const errorMessage = error.message + ' please try again shortly'
                    setIsLoading(false)
                    setEventError(errorMessage)
                    console.error('Failed to fetch events:', error)
                } else {
                    const errorMessage = 'An error has occurred. Please try again shortly'
                    setIsLoading(false)
                    setEventError(errorMessage)
                    console.error('Failed to fetch events:', error)
                }
            }
        }

        getEventData()
    }, [id])

    const headerData = {
        title: eventData.title,
        shortDesc: eventData.shortDesc,
        image: eventData.image,
        alt: eventData.alt,
        host: eventData.host,
    }


    const detailsData = {
        detailsArr: [{ title: 'About The Event', description: eventData.longDesc }, { title: 'About The Host', description: eventData.hostDesc }],
        date: eventData.date,
        time: eventData.time,
        location: eventData.location
    }

    const footerData = {
        title: eventData.title,

    }

    return <>
        <SingleEventContainer >
            <SingleEventHeader headerData={headerData} />
            <SingleEventDetails detailsData={detailsData} />
            <SingleEventFooter footerData={footerData} />
        </SingleEventContainer>
    </>

}

export default SingleEvent;

