import Container from '@mui/material/Container'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const EventsContainer = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,


    }

    return (
        <>
            <Container elevation={0} maxWidth="false" sx={{
                width: '80%',
                height: '40vh',
                background: '#FAFAFA',
           

            }}>
                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
        </>
    )
}

export default EventsContainer
