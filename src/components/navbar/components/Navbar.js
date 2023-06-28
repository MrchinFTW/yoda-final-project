import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Sidebar from '../../sidebar/components/Sidebar'
import { CssBaseline } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { useUserContext } from '../../../context/UserContext'
//need to connect Cintext

function Navbar() {

    const brandName = 'BrainBloom'
    // const { userData, userInfo } = useUserContext()
    const userData = {
        firstName: 'batya',
        lastName: 'mayer'
    }
    const firstLetter = userData.firstName[0].toUpperCase()
    console.log(firstLetter)

    return (
        <AppBar color='secondary' elevation={0} position='sticky'>
            <CssBaseline>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', m: 0, p: '20px 0', maxWidth: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                            <Typography variant='h6' component='a' href='/' sx={{ marginLeft: '10px', fontWeight: 'bolder', textDecoration: 'none', textTransform: 'initial', letterSpacing: '-2.5px', fontSize: '2.2rem', color: 'initial', }}>{brandName}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                            <Avatar sx={{ bgcolor: 'gray' }}>B</Avatar>
                        </Box>
                    </Toolbar>
                </Container>
            </CssBaseline>
        </AppBar>
    )
}

export default Navbar
