import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AvatarGroup from '@mui/material/AvatarGroup'
import CustomButton from '../../../../utils/components/CustomButton'
import useDateFormat from '../../../../utils/hooks/useDateFormat'
import { IconButton } from '@mui/material'


const EventCard = ({ eventData, onMoreInfoClick }) => {
    const { formatDate } = useDateFormat()

    return (
        <Box

            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '15px',
                backgroundColor: 'white',
                width: '280px'
            }}
        >
            <Card
                key={eventData.id}
                sx={{
                    width: '250px',
                    height: '280px',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    padding: '15px',
                }}
                elevation={0}
            >
                <CardMedia
                    component="img"
                    src={eventData.image}
                    alt='pic'
                    sx={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '20px'
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: '0'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Typography
                                component='div'
                                variant="body2"
                                sx={{
                                    fontSize: '0.65rem',
                                    lineHeight: '2.5',
                                    fontWeight: '300'
                                }}
                            >
                                {formatDate(eventData.date)}
                            </Typography>
                            <IconButton aria-label="delete" size="small">
                                <FavoriteBorderOutlinedIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                        <Typography
                            component='h3'
                            sx={{
                                fontSize: '0.9rem',
                                textTransform: 'capitalize',
                                lineHeight: '1.3'
                            }}
                        >
                            {eventData.title}
                        </Typography>

                    </Box>
                    
                </CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <AvatarGroup total={10} sx={{
                        '& .MuiAvatar-root': { width: 26, height: 26, fontSize: 12 },
                    }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </AvatarGroup>
                    <CustomButton
                        type='button'
                        onClick={() => onMoreInfoClick(eventData)}
                        sx={{
                            width: '90px',
                            fontSize: '0.7rem',
                            borderRadius: '30px'
                        }}
                    >
                        More
                    </CustomButton>
                </Box>

            </Card>
        </Box>
    )
}

export default EventCard
