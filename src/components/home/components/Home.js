import EventCard from "./events/components/EventCard"
import EventsContainer from "./events/components/EventsContainer"
import { useEventCardData } from './events/hooks/useEventCardData'
import EventCardLoading from "./events/components/EventCardLoading"

const Home = () => {

    const { isLoading, eventData, onMoreInfoClick } = useEventCardData()

    return <>
        <h1>home</h1>
        <EventsContainer>
            {!isLoading ?
                eventData.map((event) => (
                    <EventCard key={event.id} eventData={event} onMoreInfoClick={onMoreInfoClick} />
                ))
                :
                Array(4).fill().map((_, i) => <EventCardLoading key={i} />)
            }
        </EventsContainer>
    </>
}

export default Home
