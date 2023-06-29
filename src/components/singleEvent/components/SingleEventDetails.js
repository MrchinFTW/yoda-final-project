import { Grid, Typography, Box } from "@mui/material"
import useDateFormat from '../../utils/hooks/useDateFormat'


const SingleEventDetails = ({ detailsData }) => {
    const { detailsArr, date, time, location } = detailsData
    const tags = [1, 2, 3, 4, 5, 6, 7, 8]
    const { formatDate } = useDateFormat()
    return (
        <Grid container direction="row" justifyContent='center' gap='80px' sx={{ p: 3 }}>
            <Grid item container direction="column" xs={9} spacing={3} sx={{ pt: 3 }}>
                {detailsArr.map((detail, index) => (
                    <Box key={index} sx={{ pt: 3 }}>
                        <Typography component='h3' sx={{ p: '10px' }} >
                            {detail.title}
                        </Typography>
                        <Typography component='div' sx={{ whiteSpace: 'wrap', fontSize: '0.8rem', fontWeight: '300', lineHeight: '2', p: '10px' }}>
                            {detail.description}
                        </Typography>
                    </Box>
                ))}
            </Grid>
            <Box sx={{ p: 3 }}>
                <Grid item container direction="column" xs={9} spacing={3}>
                    <Grid item>
                        <Typography component='h3' sx={{ pb: '10px' }}>
                            Time & Date
                        </Typography>
                        <Typography component='div' sx={{ whiteSpace: 'wrap', fontSize: '0.8rem', fontWeight: '300', lineHeight: '2' }}>
                            {formatDate(date)}
                            {/* Tuesday, June 20, 2023 at 6:00 PM */}
                        </Typography>
                        <Typography component='div' sx={{ whiteSpace: 'wrap', fontSize: '0.8rem', fontWeight: '300', lineHeight: '2' }}>
                            {time}
                            {/* Tuesday, June 20, 2023 at 6:00 PM */}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography component='h3' sx={{ pb: '10px' }} >
                            Location
                        </Typography>
                        <Typography component='div' sx={{ whiteSpace: 'wrap', fontSize: '0.8rem', fontWeight: '300', lineHeight: '2' }}>
                            {location}
                        </Typography>
                        <Box >

                            {/* This is a mock box representing the map. */}
                        </Box>
                    </Grid>



                    <Grid item>
                        <Typography component='h3' sx={{ pb: '10px' }}>
                            Tags
                        </Typography>
                        {tags.map((tag, index) => (
                            <Typography component='div' key={index}>
                                {tag}
                            </Typography>
                        ))}
                    </Grid>

                </Grid>
            </Box>
        </Grid>
    )
}

export default SingleEventDetails
