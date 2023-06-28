import EventCard from "./events/components/EventCard"
import EventsContainer from "./events/components/EventsContainer"
import Slider from "react-slick"
const Home = () => {

    const eventData = {
        id: 5,
        title: 'hello world',
        image: '/assets/images/image.jpg',
        date: '05/09/2023',
        shortDesc: 'lsujyhf hjsflkjsde  jhlkujlksd ujjk  jslgfs skghsrh ljskl solfu '

    }
    const onMoreInfoClick = () => { console.log('clicked!!') }



    return <>
        <h1>home</h1>

        <EventsContainer>
            <EventCard eventData={eventData} onMoreInfoClick={onMoreInfoClick} />
            <EventCard eventData={eventData} onMoreInfoClick={onMoreInfoClick} />
            <EventCard eventData={eventData} onMoreInfoClick={onMoreInfoClick} />
            <EventCard eventData={eventData} onMoreInfoClick={onMoreInfoClick} />
            <EventCard eventData={eventData} onMoreInfoClick={onMoreInfoClick} />
        </EventsContainer>

    </>
}

export default Home