import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

const EventCardLoading = () => {

    return <>
        <Box >
            <Skeleton variant="rectangular" width={220} height={120} sx={{
                margin: '15px',
                borderRadius: '20px',
            }} />
            <Skeleton variant="rectangular" width={220} height={10} sx={{ borderRadius: '20px', margin: '15px' }}
            />
            <Skeleton variant="rectangular" width={220} height={15} sx={{ borderRadius: '20px', margin: '15px' }} />
            <Skeleton variant="rectangular" width={220} height={20} sx={{ borderRadius: '20px', margin: '15px' }} />
        </Box>
    </>
}

export default EventCardLoading