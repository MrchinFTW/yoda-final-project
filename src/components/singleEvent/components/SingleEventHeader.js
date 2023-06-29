import { Box, Typography } from "@mui/material"
import { IconButton } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useNavigate } from "react-router-dom"


const SingleEventHeader = ({ headerData }) => {
    const { image, title, host, shortDesc } = headerData
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/home')
    }

    return (
        <>

            <Box sx={{
                width: '100%',
                height: '400px',
                borderRadius: '30px',
                position: 'relative',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '30px',
                }
            }}>

                <IconButton aria-label="back" onClick={() => { onClick() }} sx={{
                    color: 'white',
                    position: 'absolute',
                    top: '7%',
                    left: '50px',
                    p: 0,

                }}>
                    <KeyboardBackspaceIcon />
                </IconButton>

                <Box sx={{
                    display: 'flex',
                    color: 'white',
                    flexDirection: 'column',
                    gap: '20px',
                    position: 'absolute',
                    top: '60%',
                    left: '50px',
                    transform: 'translateY(-60%)',
                    textAlign: 'left',
                    width: '50%',
                    zIndex: 1,
                }}>
                    <Typography variant="h4" component="div" sx={{ pb: '10px', textTransform: 'uppercase' }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontSize: '0.8rem', fontWeight: 'thin' }}>
                        {host}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ fontSize: '0.8rem', fontWeight: 'thin' }} >
                        {shortDesc}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default SingleEventHeader
