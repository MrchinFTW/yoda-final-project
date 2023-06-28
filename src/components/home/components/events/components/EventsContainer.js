import Container from '@mui/material/Container'


const EventsContainer = ({ children }) => {
  



    return (
        <>
              
            <Container elevation={0} maxWidth="false" sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                width: '100%',
                background: '#FAFAFA',
                padding: '15px'
            }}>
                    {children}
            </Container>
             
        </>
    )
}

export default EventsContainer
